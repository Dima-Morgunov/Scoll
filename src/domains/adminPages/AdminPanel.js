import React, { Component } from 'react';
import { Tab, Input, TextArea, Button } from 'semantic-ui-react'
import axios from  "axios"
import './AdminPageStyle/inputBlock.css'
import './AdminPageStyle/AdminPanel.css'

class AdminPanel extends Component{

    state = {
        // блок новостей
        newsElement: null,
        // 4й блок
        startCoursesDescript: '',
        // 3й блок
        secondParagraph:'',
        firstParagraph:'',

        data: {
            //1й блок
            numChildren: 0,
            startFistCours:'',
            levelFirstCours:'',
            descriptFirstTittleCours:'',
            descriptFirstCours:'',
            startSecondCours:'',
            levelSecondCours:'',
            descriptSecondTittleCours:'',
            //2й блок
            drationCourses:'',
            monthBeginningCourses:'',
            numberOfTimes:'',
            lessonDuration:'',
            //3й блок

            //4й блок
            freePlacesCount:"",
        },
    };
    // Гет запрос на 1й блок
    getFrontEndData = () =>{
        return axios.get(`/front-end`)
    }
    getBackEndData = () =>{
        return axios.get(`/php`)
    }
    // Гет запрос на 2й блок
    getData = () =>{
        return axios.get(`/data`)
    }
    // Гет запрос на 3й блок
    getProgramOne = () =>{
        return axios.get(`/program-one`)
    }
    getProgramTwo = () =>{
        return axios.get(`/program-two`)
    }
    // Гет запрос на 4й блок
    getStartCoursesData = () =>{
        return axios.get(`/clients`)
    }
    // Гет запрос на 5й блок
    getNews = () =>{
        return axios.get(`/news`)
    }
    componentDidMount() {
        this.getNews()
            .then(result => {
                this.setState({
                    newsElement: result.data
                })
            })
        this.getStartCoursesData()
            .then(result => {
                let responsData = []
                for (var key in result.data[0]){
                    if(key !== 'id' && key !== 'created_at'  && key !== 'updated_at' && key !== 'seats')
                        responsData.push(result.data[0][key])
                }
                let arrayObj = []
                for (let i = 0; i < responsData.length; i++){
                    if (responsData.length !==undefined){
                        arrayObj.push({id: i, text: responsData[i]})
                    }
                }
                this.setState({
                    startCoursesDescript: arrayObj,
                    freePlacesCount: result.data[0].seats
                })
            })
        this.getProgramOne()
            .then(result => {
                let randerArray = []
                for (var key in result.data[0]){
                    if(key !== 'id' && key !== 'created_at'  && key !== 'updated_at')
                        randerArray.push(result.data[0][key])
                }
                let arrayObj = []
                for (let i = 0; i < randerArray.length; i++){
                    if (randerArray.length !==undefined){
                            arrayObj.push({id: i, text: randerArray[i]})
                    }
                }
                this.setState({
                    secondParagraph: arrayObj
                })
            })
        this.getProgramTwo()
            .then(result => {
                let randerArray = []
                for (var key in result.data[0]){
                    if(key !== 'id' && key !== 'created_at'  && key !== 'updated_at')
                        randerArray.push(result.data[0][key])
                }
                let arrayObj = []
                for (let i = 0; i < randerArray.length; i++){
                    if (randerArray.length !==undefined){
                        arrayObj.push({id: i, text: randerArray[i]})
                    }
                }
                this.setState({
                    firstParagraph: arrayObj
                })
            })
        this.getData()
            .then(result => {
                this.setState({
                    data: {...this.state.data,
                        drationCourses:  result.data[0].col,
                        numberOfTimes: result.data[0].days,
                        monthBeginningCourses: result.data[0].month,
                        lessonDuration: result.data[0].time,
                    }
                })
            })
        this.getBackEndData()
            .then(result => {
                this.setState({
                    data: {
                        ...this.state.data,
                        startFistCours: result.data[0].data,
                        levelFirstCours: result.data[0].complication,
                        descriptFirstTittleCours: result.data[0].title,
                        descriptFirstCours: result.data[0].text,
                    }
                })
            })
        this.getFrontEndData()
            .then(result => {
                this.setState({
                    data: {
                        ...this.state.data,
                        startSecondCours: result.data[0].data,
                        levelSecondCours: result.data[0].complication,
                        descriptSecondTittleCours: result.data[0].title,
                        descriptSecondCours: result.data[0].text,
                    }
                })
            })
    }
//функция изменения инпутов
    onChange = e => {
        console.log(this.state.data)
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }
//функции удаление инпутов
    onDeleteFirstModule = id => {
        var newState = this.state.firstParagraph.filter(e => {
            if(e.id !== id) return e
        })
        this.setState({
            firstParagraph: newState
        })
    }
    onDeleteSecondModule = id => {
        var newState = this.state.secondParagraph.filter(e => {
            if(e.id !== id) return e
        })
        console.log(newState)
        this.setState({
            secondParagraph: newState
        })
    }
    onDeleteDescript = id => {
        var newState = this.state.startCoursesDescript.filter(e => {
            if(e.id !== id) return e
        })
        console.log(newState)
        this.setState({
            startCoursesDescript: newState
        })
    }
    onDeleteNews = id => {
        var newState = this.state.newsElement.filter(e => {
            if(e.id !== id) return e
        })
        console.log(newState)
        this.setState({
            newsElement: newState
        })
    }
    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

//функции добавления инпутов
    onAddFirstModule = () =>{
        var newArr = this.state.firstParagraph
        newArr.push({
            id: this.getRandomInt(1, 99999999),
            text: '',
        })
        console.log(newArr)
        this.setState({
            firstParagraph: newArr
        })
    }
    onAddSecondModule = () =>{
        var newArr = this.state.secondParagraph
        newArr.push({
            id: this.getRandomInt(1, 99999999),
            text: '',
        })
        this.setState({
            secondParagraph: newArr
        })
    }
    onAddDescript = () =>{
        var newArr = this.state.startCoursesDescript
        newArr.push({
            id: this.getRandomInt(1, 99999999),
            text: '',
        })
        this.setState({
            startCoursesDescript: newArr
        })
    }
    onAddNews = () =>{
        var newArr = this.state.newsElement
        newArr.push({
            id: this.getRandomInt(1, 99999999),
            text_1: '',
            text_2: '',
            images: [{id:1, image: ''},{id:2, image: ''}]
        })
        console.log(newArr)
        this.setState({
            newsElement: newArr
        })
    }
    onChangeFirstBlock = event => {
        var arrId = event.target.id
        var newArr = this.state.firstParagraph.map(e => {
            if(e.id === arrId) {
                e.text = event.target.value
            }
            return e
        })
        this.setState({
            firstParagraph: newArr
        })
    }
    onChangeSecondBlock = event => {
        var arrId = event.target.id
        var newArr = this.state.secondParagraph.map(e => {
            if(e.id === arrId) {
                e.text = event.target.value
            }
            return e
        })
        this.setState({
            secondParagraph: newArr
        })
    }
    onChangeStartCoursesDescript = event => {
        var arrId = event.target.id
        var newArr = this.state.startCoursesDescript.map(e => {
            if(e.id === arrId) {
                e.text = event.target.value
            }
            return e
        })
        this.setState({
            startCoursesDescript: newArr
        })
    }
    onChangeNewsElementTittle = event => {
        var arrId = event.target.id
        var el = this.state.newsElement.filter(e => {if(e.id == arrId) return e})
        var obj = el[0]
        console.log(obj)

        var newArr = this.state.newsElement.map(e => {
            if(e.id == arrId) {
                e.title = event.target.value
            }
            return e
        })
        this.setState({
            newsElement: newArr
        })
    }
    onChangeFirstNewsElementDescript = event => {
        var arrId = event.target.id
        var newArr = this.state.newsElement.map(e => {
            if(e.id == arrId) {
                e.text_1 = event.target.value
            }
            return e
        })
        this.setState({
            newsElement: newArr
        })

    }
    onChangeSecondNewsElementDescript = event => {
        var arrId = event.target.id
        var newArr = this.state.newsElement.map(e => {
            if (e.id == arrId) {
                e.text_2 = event.target.value
            }
            return e
        })
        this.setState({
            newsElement: newArr
        })
    }
    onChangeFirstImageNews = element =>{
        var file = element.target.files[0];
        var reader = new FileReader();
        var arrId = element.target.id
        reader.onloadend = () => {
            var newArr = this.state.newsElement.map(e => {
                if(e.id == arrId) {
                    e.images[0].image = reader.result
                }
                return e
            })
            this.setState({
                newsElement: newArr
            })
        }
        reader.readAsDataURL(file);
    }
    onChangeSecondImageNews = element =>{
        var file = element.target.files[0];
        var reader = new FileReader();
        var arrId = element.target.id
        reader.onloadend = () => {
            var newArr = this.state.newsElement.map(e => {
                if(e.id == arrId) {
                    e.images[1].image = reader.result
                }
                return e
            })
            this.setState({
                newsElement: newArr
            })
        }
        reader.readAsDataURL(file);
    }
    render(){

        const {data, firstParagraph, startCoursesDescript, secondParagraph, newsElement} = this.state;

        //блок новостей
        const newsBlock = [
            { menuItem: 'Description', render: () =>
                    <Tab.Pane>
                        {
                            newsElement.map(e => (
                                <div className='wrapInput'>
                                    <Button className='deleteButton' onClick={() => this.onDeleteNews(e.id)}>
                                        X
                                    </Button>
                                    <p>Title №{e.id}</p>
                                    <TextArea
                                        className='News-TitletexrArea'
                                        placeholder='Оглавление'
                                        id={e.id}
                                        value={e.title}
                                        onChange={this.onChangeNewsElementTittle}
                                    />
                                    <p> first paragraphs </p>
                                    <TextArea
                                        placeholder='1 абзац'
                                        id={e.id}
                                        value={e.text_1}
                                        onChange={this.onChangeFirstNewsElementDescript}
                                        className='News-DescriptTexrArea'
                                    />
                                    <p> second paragraphs </p>
                                    <TextArea
                                        placeholder='2 абзац'
                                        id={e.id}
                                        value={e.text_2}
                                        onChange={this.onChangeSecondNewsElementDescript}
                                        className='News-DescriptTexrArea'
                                    />
                                    <div>
                                        <div>
                                            <input
                                                type="file"
                                                id={e.id}
                                                onChange={this.onChangeFirstImageNews}
                                            />
                                            <input
                                                type="file"
                                                id={e.id}
                                                onChange={this.onChangeSecondImageNews}
                                            />
                                        </div>
                                        <div className='News-image'>
                                            {
                                                e.images &&
                                               <div>
                                                   <img
                                                       src={e.images[0].image}
                                                       alt="image"
                                                   />
                                                   <img
                                                       src={e.images[1].image}
                                                       alt="image"
                                                   />
                                               </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <Button onClick={this.ChangeData}>Update</Button>
                        <Button onClick={this.onAddNews}>Add note</Button>
                    </Tab.Pane> },
        ]
        //4й блок
        const startCourses = [
            { menuItem: 'Description', render: () =>
                    <Tab.Pane>
                        {startCoursesDescript.map(e => (
                                <div className='wrapInput'>
                                    <Button className='deleteButton' onClick={() => this.onDeleteDescript(e.id)}>X</Button>
                                    <Input
                                        placeholder='Начало курса'
                                        value={e.text}
                                        id={e.id}
                                        onChange={this.onChangeStartCoursesDescript}
                                        key={e.id}
                                        className='inputBlock'
                                    />
                                </div>
                            ))
                        }
                        <Button onClick={this.ChangeData}>Update</Button>
                        <Button onClick={this.onAddDescript}>Add note</Button>
                    </Tab.Pane> },
            { menuItem: 'Количество свободных мест', render: () =>
                    <Tab.Pane>
                        <Input
                            placeholder='11'
                            name="freePlacesCount"
                            value={data.freePlacesCount}
                            onChange={this.onChange}
                        />
                        <Button >Click Here</Button>
                    </Tab.Pane> },
        ]
        //3й блок
        const ProgramCourses = [
            { menuItem: '1й модуль', render: () =>
                    <Tab.Pane>
                        {
                            firstParagraph.map(e => (
                                <div className='wrapInput'>
                                    <Button className='deleteButton' onClick={() => this.onDeleteFirstModule(e.id)}>X</Button>
                                    <Input
                                        placeholder='Начало курса'
                                        value={e.text}
                                        id={e.id}
                                        onChange={this.onChangeFirstBlock}
                                        key={e.id}
                                        className='inputBlock'
                                    />
                                </div>
                            ))
                        }
                        <Button onClick={this.ChangeData}>Update</Button>
                        <Button onClick={this.onAddFirstModule}>Add note</Button>
                    </Tab.Pane> },
            { menuItem: '2й модуль', render: () =>
                            <Tab.Pane>
                            {
                                secondParagraph.map((e) => (
                                    <div className='wrapInput'>
                                        <Button className='deleteButton' onClick={() => this.onDeleteSecondModule(e.id)}>
                                            X
                                        </Button>
                                        <Input
                                            placeholder='Начало курса'
                                            value={e.text}
                                            id={e.key}
                                            onChange={this.onChangeSecondBlock}
                                            key={e.key}
                                            className='inputBlock'
                                        />
                                    </div>
                                ))
                            }
                                <Button onClick={this.ChangeData}>Update</Button>
                                <Button onClick={this.onAddSecondModule}>Add note</Button>
                    </Tab.Pane> },
        ]
        // 2й блок
        const CommindCouses = [
            { menuItem: '2й блок', render: () =>
                    <Tab.Pane>
                        <p>Продолжительность</p>
                        <Input
                            placeholder='6 месяцев'
                            name="startFistCours"
                            value={data.drationCourses}
                            onChange={this.onChange}
                        />
                        <p>Начало занятий</p>
                        <Input
                            placeholder='ноябрь'
                            name="startFistCours"
                            value={data.monthBeginningCourses}
                            onChange={this.onChange}
                        />
                        <p>Количество занятий</p>
                        <Input
                            placeholder='3 раза в неделю'
                            name="levelFirstCours"
                            value={data.numberOfTimes}
                            onChange={this.onChange}
                        />
                        <p>Время</p>
                        <Input
                            placeholder='18:30 - 21:30'
                            name="levelFirstCours"
                            value={data.lessonDuration}
                            onChange={this.onChange}
                        />
                        <p>Применить изменения</p>
                        <Button onClick={this.ChangeData}>Update</Button>
                    </Tab.Pane> },
        ]
        // 1й блок
        const Courses_menu = [
            { menuItem: 'Курс №1', render: () =>
                    <Tab.Pane>
                        <p>Начало курса</p>
                        <Input
                            placeholder='Начало курса'
                            name="startFistCours"
                            value={data.startFistCours}
                            onChange={this.onChange}
                        />
                        <p>Сложность от 1 до 5</p>
                        <Input
                            type = "number"
                            min="1"
                            max="5"
                            placeholder='Сложность'
                            name="levelFirstCours"
                            value={data.levelFirstCours}
                            onChange={this.onChange}
                        />
                        <p>Заглавие описания</p>
                        <Input
                            type='text'
                            placeholder='Заголовок описания'
                            name="descriptFirstTittleCours"
                            value={data.descriptFirstTittleCours}
                            onChange={this.onChange}
                        />
                        <p>Текст описания</p>
                        <TextArea
                            className='Courses-textArea'
                            type='text'
                            laceholder='Описанмие'
                            name="descriptFirstCours"
                            value={data.descriptFirstCours}
                            onChange={this.onChange}
                        />
                        <p>Применить изменения</p>
                        <Button onClick={this.ChangeData}>Update</Button>


                    </Tab.Pane> },
            { menuItem: 'Курсы №2', render: () => <Tab.Pane>
                    <p>Начало курса</p>
                    <Input
                        placeholder='Начало курса'
                        name="startSecondCours"
                        value={data.startSecondCours}
                        onChange={this.onChange}
                    />
                    <p>Сложность от 1 до 5</p>
                    <Input
                        type = "number"
                        min="1"
                        max="5"
                        placeholder='Сложность'
                        name="levelSecondCours"
                        value={data.levelSecondCours}
                        onChange={this.onChange}
                    />
                    <p>Заглавие описания</p>
                    <Input
                        placeholder='Заголовок описания'
                        name="descriptSecondTittleCours"
                        value={data.descriptSecondTittleCours}
                        onChange={this.onChange}
                    />
                    <p>Текст описания</p>
                    <TextArea
                        className='Courses-textArea'
                        paceholder='Описанмие'
                        name="descriptSecondCours"
                        value={data.descriptSecondCours}
                        onChange={this.onChange}
                    />
                    <p>Применить изменения</p>
                    <Button onClick={this.ChangeData}>Update</Button>
                </Tab.Pane> },
        ]
        const panes = [
            { menuItem: 'Курсы', render: () => <Tab.Pane>
                    <Tab panes={Courses_menu} />
                </Tab.Pane> },
            { menuItem: 'Дата и продилжительность', render: () =>
                    <Tab.Pane>
                    <Tab panes = {CommindCouses}/>
                </Tab.Pane> },
            { menuItem: '3й блок', render: () =>
                    <Tab.Pane>
                        <Tab panes = {ProgramCourses}/>
                </Tab.Pane> },
            { menuItem: 'Блок начала курсов', render: () =>
                    <Tab.Pane>
                        <Tab panes = {startCourses}/>
                    </Tab.Pane> },
            { menuItem: 'Блок новостей', render: () =>
                    <Tab.Pane>
                        <Tab panes = {newsBlock}/>
                    </Tab.Pane> },
        ]
        return(
            <div>
                {
                    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
                }
            </div>
        )
    }
}
export default AdminPanel

