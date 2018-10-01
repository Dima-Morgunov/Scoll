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