import React, { Component } from 'react';
import computer from "../../image/StartCoursComputer.png"
import "../PagesStyle/StartCours.css"

class StartCourses extends Component{
    state = {
        startCoursesDescript: [{
            id: 1,
            name: 1,
            text: '- Для тех, кто хочет "оживлять" дизайны сайтов',
        },{
            id: 2,
            name: 2,
            text: '- Для тех, кто хочет изучать один из самых популярных языков программирования',
        },{
            id: 3,
            name: 3,
            text: '- Для тех, кто хочет быть не просто "верстальщиком"',
        },{
            id: 4,
            name: 4,
            text: '- Для тех, кто хочет попасть на высокооплачиваемую работу с постоянным карьерным ростом',
   }],
        data:{
            freePlacesCount: "1",
        },
    }
    render(){
        const {data, startCoursesDescript} = this.state
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
                            {startCoursesDescript.map(e=>
                                <li>{e.text}</li>
                            )}
                        </ul>
                    </div>
                    <div className="StartCours-conteiner-wrap-item">
                    <span className="StartCours-conteiner-wrap-counter">{data.freePlacesCount} место</span>
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