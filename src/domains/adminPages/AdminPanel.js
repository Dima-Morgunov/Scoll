import React, { Component } from 'react';
import { Tab, Input, TextArea, Button } from 'semantic-ui-react'
import axios from  "axios"
import './AdminPageStyle/inputBlock.css'
import './AdminPageStyle/AdminPanel.css'
import Commidoncours from '../pages/Commidoncours'

class AdminPanel extends Component{

    state = {
        // блок новостей
        newsElement: null,
        addNews:{
            title: null,
            text_one: null,
            text_two:null,
            image:["картинка 1", "картинка 2"]
        },
        // 4й блок

        startCoursesDescript: null,
        startCoursesAddText: '',
        // 3й блок
        secondParagraph:null,
        firstParagraph:'',
        valueChangeAddProgramOne:'',
        valueChangeAddProgramTwo:'',

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
    postStartCoursesData = () =>{
/*
        return axios.post(/clients)
*/
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
                this.setState({
                    startCoursesDescript: result.data[1],
                    freePlacesCount: result.data[0]
                })
            })
        this.getProgramOne()
            .then(result => {
                this.setState({
                    firstParagraph: result.data
                })
            })
        this.getProgramTwo()
            .then(result => {
                this.setState({
                    secondParagraph: result.data
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

    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    //3й блок
    onChangeAddProgramOne = e =>{
        this.setState({
            valueChangeAddProgramOne:  e.target.value
        })
    }
    onChangeAddProgramTwo = e =>{
        this.setState({
            valueChangeAddProgramTwo:  e.target.value
        })
    }

    onChangeFirstBlock = event => {
        var arrId = event.target.id
        var newArr = this.state.firstParagraph.map(e => {
            if(e.id == arrId) {
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
            if(e.id == arrId) {
                e.text = event.target.value
            }
            return e
        })
        this.setState({
            secondParagraph: newArr
        })
    }

    changeFirstBlock = e =>{
        axios.request({
            url: '/api/auth/program_one/' + e.id ,
            method: 'put',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
            data: {text: e.text}
        }).then(() => {
            this.getProgramOne()
                .then(result => {
                    this.setState({
                        firstParagraph: result.data,
                    })
                })
        }).catch((error) => {
            console.log(error)})
    }
    changeSecondBlock = e =>{
        axios.request({
            url: '/api/auth/program_two/' + e.id ,
            method: 'put',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
            data: {text: e.text}
        }).then(() => {
            this.getProgramTwo()
                .then(result => {
                    this.setState({
                        secondParagraph: result.data,
                    })
                })
        }).catch((error) => {
            console.log(error)})
    }

    AddFirstModule = () =>{
        axios.request({
            url: '/api/auth/program_one',
            method: 'post',
            headers: {Authorization: "Bearer " + localStorage.getItem("token")},
            data: {text: this.state.valueChangeAddProgramOne},
        }).then(() => {
            this.getProgramOne()
                .then(result => {
                    this.setState({
                        firstParagraph: result.data,
                        valueChangeAddProgramOne: '',
                    })
                })
        }).catch((error) => {
            console.log(error)})
        console.log(this.state.startCoursesAddText)
    }
    AddSecondModule = () =>{
        axios.request({
            url: '/api/auth/program_two',
            method: 'post',
            headers: {Authorization: "Bearer " + localStorage.getItem("token")},
            data: {text: this.state.valueChangeAddProgramTwo},
        }).then(() => {
            this.getProgramTwo()
                .then(result => {
                    this.setState({
                        secondParagraph: result.data,
                        valueChangeAddProgramTwo: '',
                    })
                })
        }).catch((error) => {
            console.log(error)})
    }

    onDeleteFirstModule = id => {
        axios.request({
            url: '/api/auth/program_one/' + id,
            method: 'delete',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
        }).then(() => {
            this.getProgramOne()
                .then(result => {
                    this.setState({
                        firstParagraph: result.data
                    })
                })
        }).catch((error) => {
            console.log(error)})
    }
    onDeleteSecondModule = id => {
        axios.request({
            url: '/api/auth/program_two/' + id,
            method: 'delete',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
        }).then(() => {
            this.getProgramTwo()
                .then(result => {
                    this.setState({
                        secondParagraph: result.data
                    })
                })
        }).catch((error) => {
            console.log(error)})
    }

    //4й блок
    onChangeAddStartCours = e => {
        this.setState({
            startCoursesAddText: e.target.value
        })
    }
    changeItem = e =>{
        console.log(e);
        axios.request({
            url: '/api/auth/clients/' + e.id ,
            method: 'put',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
            data: {text: e.text}
        }).then(() => {
            this.getStartCoursesData()
                .then(result => {
                    this.setState({
                        startCoursesDescript: result.data[1]
                    })
                })
        }).catch((error) => {
            console.log(error)})
    }
    onDeleteDescript = id => {
        axios.request({
            url: '/api/auth/clients/' + id,
            method: 'delete',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
        }).then(() => {
            this.getStartCoursesData()
                .then(result => {
                    console.log(result)
                    this.setState({
                        startCoursesDescript: result.data[1],
                    })
                })
        }).catch((error) => {
            console.log(error)})
    }
    addStartCoursItem = () =>{
        let key = "startCoursesAddText"
        let text = {text: this.state.startCoursesAddText[key]}
        console.log(text)
        axios.request({
            url: '/api/auth/clients',
            method: 'post',
            headers: {Authorization: "Bearer " + localStorage.getItem("token")},
            data: text,
        }).then(() => {
            this.getStartCoursesData()
                .then(result => {
                        this.setState({
                            startCoursesDescript: result.data[1],
                        })
                })
        }).catch((error) => {
            console.log(error)})
        console.log(this.state.startCoursesAddText)
    }
    onChangeStartCoursesDescript = event => {
        console.log(event.target)
        var arrId = event.target.id
        var newArr = this.state.startCoursesDescript.map(e => {
            if(e.id == arrId) {
                e.text = event.target.value
            }
            return e
        })
        console.log(newArr)
        console.log(this.state.startCoursesDescript)
        this.setState({
            startCoursesDescript: newArr
        })
    }

    //5й блок
    onChangeNewsElementTittle = element => {
        var arrId = element.target.id
        var newArr = this.state.newsElement.map(e => {
            if(e.id == arrId) {
                e.title = element.target.value
            }
            return e
        })
        this.setState({
            newsElement: newArr
        })
    }
    onChangeFirstNewsElementDescript = element => {
        var arrId = element.target.id
        var newArr = this.state.newsElement.map(e => {
            if(e.id == arrId) {
                e.text_1 = element.target.value
            }
            return e
        })
        this.setState({
            newsElement: newArr
        })
    }
    onChangeSecondNewsElementDescript = element => {
        var arrId = element.target.id
        var newArr = this.state.newsElement.map(e => {
            if(e.id == arrId) {
                e.text_2 = element.target.value
            }
            return e
        })
        this.setState({
            newsElement: newArr
        })
    }
    onChangeAddNews = e => {
        this.setState({
            addNews: {... this.state.addNews, [e.target.name]: e.target.value}
        })
    }
    onChangeFirstImageNews = element =>{
        let file = element.target.files[0],
                reader = new FileReader(),
                dataImage = this.state.addNews;
        reader.onloadend = () => {
            dataImage.image[0] = reader.result
        }
        this.setState({
            addNews: dataImage
        })
        console.log(this.state.addNews)
        reader.readAsDataURL(file);
    }
    onChangeSecondImageNews = element =>{
        let file = element.target.files[0],
            reader = new FileReader(),
            dataImage = this.state.addNews;
        reader.onloadend = () => {
            dataImage.image[1] = reader.result
        }
        this.setState({
            addNews: dataImage
        })
        console.log(this.state.addNews)
        reader.readAsDataURL(file);
    }
    ChangeNewsData = () =>{
        axios.request({
            url: '/api/auth/news',
            method: 'post',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
            data: this.state.addNews
        }).then(() => {
            this.getNews()
                .then(result => {
                    this.setState({
                        newsElement: result.data
                    })
                })
            }).catch((error) => {
                console.log(error)})
    }
    onChangeNewsElement = e =>{
        console.log(e)
        let bodyrequest ={
            title: e.title,
            text_one: e.text_1,
            text_two: e.text_2,
            id: e.id
        }
        axios.request({
            url: '/api/auth/news/' + e.id ,
            method: 'put',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
            data: bodyrequest
        }).then(() => {
            this.getNews()
                .then(result => {
                    this.setState({
                        newsElement: result.data
                    })
                })
        }).catch((error) => {
            console.log(error)})
    }
    onDeleteNews = id => {
        axios.request({
            url: '/api/auth/news/' + id,
            method: 'delete',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
        }).then(() => {
            this.getNews()
                .then(result => {
                    this.setState({
                        newsElement: result.data
                    })
                })
        }).catch((error) => {
            console.log(error)})
    }
    render(){

        const {data, firstParagraph, startCoursesDescript, secondParagraph, newsElement, addNews, valueChangeAddProgramOne, valueChangeAddProgramTwo} = this.state;

        //блок новостей
        const newsBlock = [
            { menuItem: 'Description', render: () =>
                    <Tab.Pane>
                        {newsElement.map(e => (
                                <div className='wrapInput'>
                                    <Button className='deleteButton' onClick={() => this.onDeleteNews(e.id)}>
                                        X
                                    </Button>
                                    <Button className='changeButton' onClick={() => this.onChangeNewsElement(e)}>
                                        change
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
                                        <div className='News-image'>
                                            {
                                                e.images[0] &&
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
                            ))}
                            <div>
                                <p>Titlle</p>
                                <input
                                    type="text"
                                    className='News-TitletexrArea'
                                    name="title"
                                    value={addNews.title}
                                    onChange={this.onChangeAddNews}
                                />
                                <p>Text 1</p>
                                <textarea
                                    className='News-DescriptTexrArea'
                                    name="text_one"
                                    value={addNews.text_one}
                                    onChange={this.onChangeAddNews}
                                />
                                <p>Text 2</p>
                                <textarea
                                    className='News-DescriptTexrArea'
                                    name="text_two"
                                    value={addNews.text_two}
                                    onChange={this.onChangeAddNews}
                                />
                            </div>
                        <div>
                            <input
                                type="file"
                                name="image[0]"
                                onChange={this.onChangeFirstImageNews}
                            />
                            <input
                                type="file"
                                name="image[1]"
                                onChange={this.onChangeSecondImageNews}
                            />
                        </div>
                        <Button onClick={this.ChangeNewsData}>Update</Button>
                    </Tab.Pane> },
        ]
        //4й блок
        const startCourses = [
            { menuItem: 'Description', render: () =>
                    <Tab.Pane>
                        {startCoursesDescript.map(e => (
                                <div className='wrapInput'>
                                    <Button className='deleteButton' onClick={() => this.onDeleteDescript(e.id)}>X</Button>
                                    <Button className='changeButton' onClick={() => this.changeItem(e)}>change</Button>
                                    <Input
                                        placeholder='Начало курса'
                                        value={e.text}
                                        id={e.id}
                                        onChange={this.onChangeStartCoursesDescript}
                                        key={e.id}
                                        className='StartCoursesInputBlock'
                                    />
                                </div>
                            ))
                        }
                        <Input
                            placeholder='Начало курса'
                            name= "startCoursesAddText"
                            onChange={this.onChangeAddStartCours}
                            className='inputBlock'
                        />
                        <Button onClick={this.addStartCoursItem}>Update</Button>
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
                                    <Button className='changeButton' onClick={() => this.changeFirstBlock(e)}>change</Button>
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
                        <Input
                            placeholder='Начало курса'
                            name= "onChangeAddProgramOne"
                            value ={valueChangeAddProgramOne}
                            onChange={this.onChangeAddProgramOne}
                            className='inputBlock'
                        />
                        <Button onClick={this.AddFirstModule}>Add note</Button>
                    </Tab.Pane> },
            { menuItem: '2й модуль', render: () =>
                            <Tab.Pane>
                            {secondParagraph.map((e) => (
                                    <div className='wrapInput'>
                                        <Button className='deleteButton' onClick={() => this.onDeleteSecondModule(e.id)}>X</Button>
                                        <Button className='changeButton' onClick={() => this.changeSecondBlock(e)}>change</Button>
                                        <Input
                                            placeholder='Начало курса'
                                            value={e.text}
                                            id={e.id}
                                            onChange={this.onChangeSecondBlock}
                                            key={e.id}
                                            className='inputBlock'
                                        />
                                    </div>
                                ))
                            }
                                <Input
                                    placeholder='Начало курса'
                                    name= "valueChangeAddProgramTwo"
                                    value ={valueChangeAddProgramTwo}
                                    onChange={this.onChangeAddProgramTwo}
                                    className='inputBlock'
                                />
                                <Button onClick={this.AddSecondModule}>Add note</Button>
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
                        <Commidoncours />
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

