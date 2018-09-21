import React, { Component } from 'react';
import "../PagesStyle/ProgramCours.css"
import axios from "axios";

class ProgramCours extends Component{
    state = {
        secondParagraph: [
            {
                "0": "Основы Web-программирования. Возможности, задачи и применение PHP. Среда выполнения. Инструменты разработки. Взаимодействие PHP, HTML, CSS, JS. Структура будущего сайта.",
                "1": "Специфика языка программирования PHP: синтаксис, переменные, константы, типы данных, выражения, операции, приоритет выполнения операций, операторы инкремента и декремента.",
                "2": "Пользовательские формы, HTTP-методы, GET & POST, передача данных на сервер при помощи форм.",
                "3": "Конструкции языка – if-else, do-while, for, foreach, switch – case, require, include и другие.",
                "4": "Работа с массивами, доступ к данным, сортировка, глобальные массивы.",
                "5": "Функции. Встроенные и пользовательские функции.",
                "6": "Работа с файлами, сохранение данных в файл.",
                "7": "Регуляр выражения и функции для работы с ними.",
                "8": "Cookies и сессии, авторизация на сайте, организация доступа к разделам сайта при помощи сессии, роли пользователей.",
                "id": 1,
                "created_at": "2018-09-13 16:16:13",
                "updated_at": "2018-09-13 16:16:13"
            }
        ],
        firstParagraph:null,
    }



    getData = () =>{
        return axios.get(`/program-one`)
    }

    componentDidMount() {
        this.getData()
            .then(result => {
                console.log(result.data[0])
                const newObj =
                    {
                        "0": "Основы Web-программирования. Возможности, задачи и применение PHP. Среда выполнения. Инструменты разработки. Взаимодействие PHP, HTML, CSS, JS. Структура будущего сайта.",
                        "1": "Специфика языка программирования PHP: синтаксис, переменные, константы, типы данных, выражения, операции, приоритет выполнения операций, операторы инкремента и декремента.",
                        "2": "Пользовательские формы, HTTP-методы, GET & POST, передача данных на сервер при помощи форм.",
                        "3": "Конструкции языка – if-else, do-while, for, foreach, switch – case, require, include и другие.",
                        "4": "Работа с массивами, доступ к данным, сортировка, глобальные массивы.",
                        "5": "Функции. Встроенные и пользовательские функции.",
                        "6": "Работа с файлами, сохранение данных в файл.",
                        "7": "Регуляр выражения и функции для работы с ними.",
                        "8": "Cookies и сессии, авторизация на сайте, организация доступа к разделам сайта при помощи сессии, роли пользователей.",
                        "id": 1,
                        "created_at": "2018-09-13 16:16:13",
                        "updated_at": "2018-09-13 16:16:13"
                    }
                let randerArray = []

                for (var key in newObj){
                    if(key !== 'id' && key !== 'created_at'  && key !== 'updated_at')
                        randerArray.push(newObj[key])
                }
                console.log(randerArray)
                this.setState({
                    secondParagraph: result.data[0],

                })
            })
     }

    render(){

        const {firstParagraph, secondParagraph} = this.state
        const {scrollTo} = this.props
        {console.log(secondParagraph)}
        return(

            <div className='ProgramCours'>
                <p className='ProgramCours-background'>Программа курса</p>
                <div className="ProgramCours-conteiner">

                    <h3>Программа курса</h3>
                    <div className="ProgramCours-conteiner-wrap">
                        <div className="ProgramCours-conteiner-wrap-item">
                            <p><span>1 </span>Модуль</p>
                            <ul>
                                {

                                    firstParagraph
                                    ?
                                        firstParagraph.map(e =>
                                            <li>{e.value}</li>
                                        )
                                        : null
                                }
                            </ul>
                        </div>
                        <div className="ProgramCours-conteiner-wrap-item">
                            <p><span>2 </span>Модуль</p>
                            <ul>
                                {


                                    /*{
                                    secondParagraph
                                        ?
                                        secondParagraph.map(e =>
                                            <li>{e.text}</li>
                                        )
                                        : null
                                }*/}
                            </ul>
                        </div>
                    </div>
                    <input onClick={() => scrollTo(`form`)} type="button" value="Заявка на курс"/>
                </div>
            </div>
        )
    }
}

export default ProgramCours;