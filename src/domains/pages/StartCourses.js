import React, { Component } from 'react';
import computer from "../../image/StartCoursComputer.png"
import "../PagesStyle/StartCours.css"
import axios from "axios";

class StartCourses extends Component{
    state = {
        startCoursesDescript: [],
        freePlacesCount: '',
    }

    getStartCoursesData = () =>{
        return axios.get(`/clients`)
    }
    componentDidMount() {
        this.getStartCoursesData()
            .then(result => {
                this.setState({
                    startCoursesDescript: result.data[1],
                    freePlacesCount: result.data[0][0].text
                })
            })
    }

    render(){
        const {freePlacesCount, startCoursesDescript} = this.state
        const {scrollTo} = this.props
        return(
            <div className='startCourses-wrap'>
                <p className='startCourses-wrap-background'>До начала курса осталось</p>
            <div className="StartCours">

            <div className="StartCours-conteiner">
                <h3>До начала курса осталось</h3>
                <div className="StartCours-conteiner-wrap">
                    <div className="StartCours-conteiner-wrap-item">
                        <p><span>Дл</span>я кого</p>
                        <ul>
                            {startCoursesDescript
                                ?
                                startCoursesDescript.map(e =>
                                    <li>{e.text}</li>
                                ):null
                            }
                        </ul>
                    </div>
                    <div className="StartCours-conteiner-wrap-item">
                    <span className="StartCours-conteiner-wrap-counter">{freePlacesCount}</span>
                        <img src={computer} alt="#"/>
                    </div>
                </div>
                <input onClick={() => scrollTo(`form`)} type="button" value="Заявка на курс"/>
            </div>
            </div>
            </div>
        )
    }
}

export default StartCourses;