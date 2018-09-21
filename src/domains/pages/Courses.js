import React, { Component } from 'react';
import '../PagesStyle/Courses.css'
import  clock from '../../image/clock.png'
import calendar from '../../image/calendar.png'
import axios from  "axios"

class Courses extends Component{

        state={
            data:{
                drationCourses:null,
                monthBeginningCourses:null,
                numberOfTimes:null,
                lessonDuration:null,
            }
        }


          /*  col: "6 месяцев"
            created_at: "2018-09-13 16:15:59"
            days: "3 раза в неделю"
            id: 1
            month: "НОЯБРЬ 2018"
            time: "18.30 - 21.30"
            }*/
            getData = () =>{
            return axios.get(`/data`)
            }

        componentDidMount() {
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
        }

/*

[
    {
        "id": 1,
        "title": "IT-школа Samsung: от обучения до профессионального программирования",
        "text_1": "В 2018-2019 учебном году учащиеся из 6 городов Украины смогут пройти бесплатное обучение программированию благодаря проекту «IT-школа Samsung», который предусматривает основы разработки приложений под систему Android.\nЭтот проект был создан при поддержке Министерства образования и науки Украины, а также Института модернизации содержания образования, и рассчитан на учащихся старших классов общеобразовательных школ.",
        "text_2": "Зачисление в программу «IT-школа Samsung» будет осуществляться через вступительное тестирование, которое смогут пройти школьники 9-11 классов в учебных заведениях Киева, Харькова, Днепра, Винницы, Львова и Одессы. Под крылом современных программистов и специалистов Украинского центра разработок и исследований Samsung будут проводиться занятия для тех двухсот учеников, которые получат высокий показатель при отборе.",
        "created_at": "2018-09-13 16:16:07",
        "updated_at": "2018-09-13 16:16:07",
        "images": [
            {
                "id": 1,
                "image": "Картинка 1",
                "new_id": 1,
                "created_at": "2018-09-13 16:16:07",
                "updated_at": "2018-09-13 16:16:07"
            },
            {
                "id": 2,
                "image": "Картинка 2",
                "new_id": 1,
                "created_at": "2018-09-13 16:16:07",
                "updated_at": "2018-09-13 16:16:07"
            }
        ]
    }
]




    [
        {
            "0": "- Для тех, кто хочет \"оживлять\" дизайны сайтов",
            "1": "- Для тех, кто хочет изучать один из самых популярных языков программирования",
            "2": "- Для тех, кто хочет быть не просто \"верстальщиком\"",
            "3": "- Для тех, кто хочет попасть на высокооплачиваемую работу с постоянным карьерным ростом",
            "id": 1,
            "seats": "11 мест",
            "created_at": "2018-09-13 16:15:54",
            "updated_at": "2018-09-13 16:15:54"
        },
{
    "0": "- Для тех, кто хочет \"оживлять\" дизайны сайтов",
    "1": "- Для тех, кто хочет изучать один из самых популярных языков программирования",
    "2": "- Для тех, кто хочет быть не просто \"верстальщиком\"",
    "3": "- Для тех, кто хочет попасть на высокооплачиваемую работу с постоянным карьерным ростом",
    "id": 2,
    "seats": "11 мест",
    "created_at": "2018-09-14 12:09:01",
    "updated_at": "2018-09-14 12:09:01"
}
]

        */


    render(){
        const {data} = this.state
        const {scrollTo} = this.props
        return(

            <div className="InfoCourses" >
                <div className="InfoCourses-conteiner">
                <p>Когда</p>
                <div>
                    <div className="Courses-conteiner-mounth">
                        <img src={calendar} alt='#'/>
                        <ul>
                            <li className="Courses-conteiner-mounth-1">{data.drationCourses}</li>
                            <li className="Courses-conteiner-mounth-2">{data.monthBeginningCourses}</li>
                        </ul>
                    </div>
                    <div className="Courses-conteiner-mounth-imgclock">
                        <img src={clock} alt='#'/>
                        <ul>
                            <li className="Courses-conteiner-mounth-1">{data.numberOfTimes}</li>
                            <li className="Courses-conteiner-mounth-2">{data.lessonDuration}</li>
                        </ul>
                    </div>
                </div>

                </div>
                <input onClick={() => scrollTo(`form`)} type="button" value="Заявка на курс"/>

            </div>
        )
    }
}

export default Courses;