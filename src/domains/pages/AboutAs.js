import React, { Component } from 'react';
import "../PagesStyle/AboutAs.css"
import aboutasimg from "../../image/AboutAslogo.png"



class AboutAs extends Component{
    render(){

        const {scrollTo} = this.props

        return(
            <div className='AboutAs-wrap'>
                <p className='AboutAs-wrap-background'>О нас</p>
            <div className="AboutAs-conteiner">
                <h3>Идет набор</h3>
                <div className="AboutAs-conteiner-wrap">
                <div>
                    <img src={aboutasimg} alt='img'/>
                </div>
                <div>
                    <span>
                        Мы ЭТО! Быстро растущая ИТ-компания, специализирующаяся на
                        профессиональном развитии сайтов и приложений с использованием
                        современных технологий. Мы работаем с каждым клиентом с учетом его
                        особенностей и пожеланий, а также гарантируем получение высококачественного
                        готового продукта.
                    </span>
                </div>
                </div>
                <input onClick={() => scrollTo(`form`)} type="button" value="Заявка на курс"/>
            </div>
            </div>
        )
    }
}

export default AboutAs;