import React, { Component } from 'react';
import "../PagesStyle/News.css"
import  photo1 from "../../image/NewsPhoto1.png"
import  photo2 from "../../image/NewsPhoto2.png"
import Slider from "react-slick";


class News extends Component{
    state = {
        newsElement: [{
            id: 1,
            photo1: 1,
            photo2: 1,
            newsTitlle: '1IT-школа Samsung: от обучения до профессионального программирования',
            newsDeskription1: 'В 2018-2019 учебном году учащиеся из 6 городов Украины смогут пройти бесплатное обучение программированию благодаря проекту «IT-школа Samsung», который предусматривает основы разработки приложений под систему Android. Этот проект был создан при поддержке Министерства образования и науки Украины, а также Института модернизации содержания образования, и рассчитан на учащихся старших классов общеобразовательных школ.',
            newsDeskription2: 'Зачисление в программу «IT-школа Samsung» будет осуществляться через вступительное тестирование, которое смогут пройти школьники 9-11 классов в учебных заведениях Киева, Харькова, Днепра, Винницы, Львова и Одессы. Под крылом современных программистов и специалистов Украинского центра разработок и исследованийamsung будут проводиться занятия для тех двухсот учеников, которые получат высокий показатель при отборе.'
        },{
            id: 2,
            photo1: 1,
            photo2: 1,
            newsTitlle: '2IT-школа Samsung: от обучения до профессионального программирования',
            newsDeskription1: 'В 2018-2019 учебном году учащиеся из 6 городов Украины смогут пройти бесплатное обучение программированию благодаря проекту «IT-школа Samsung», который предусматривает основы разработки приложений под систему Android. Этот проект был создан при поддержке Министерства образования и науки Украины, а также Института модернизации содержания образования, и рассчитан на учащихся старших классов общеобразовательных школ.',
            newsDeskription2: 'Зачисление в программу «IT-школа Samsung» будет осуществляться через вступительное тестирование, которое смогут пройти школьники 9-11 классов в учебных заведениях Киева, Харькова, Днепра, Винницы, Львова и Одессы. Под крылом современных программистов и специалистов Украинского центра разработок и исследованийamsung будут проводиться занятия для тех двухсот учеников, которые получат высокий показатель при отборе.'
        },{
            id: 3,
            photo1: 1,
            photo2: 1,
            newsTitlle: '3IT-школа Samsung: от обучения до профессионального программирования',
            newsDeskription1: 'В 2018-2019 учебном году учащиеся из 6 городов Украины смогут пройти бесплатное обучение программированию благодаря проекту «IT-школа Samsung», который предусматривает основы разработки приложений под систему Android. Этот проект был создан при поддержке Министерства образования и науки Украины, а также Института модернизации содержания образования, и рассчитан на учащихся старших классов общеобразовательных школ.',
            newsDeskription2: 'Зачисление в программу «IT-школа Samsung» будет осуществляться через вступительное тестирование, которое смогут пройти школьники 9-11 классов в учебных заведениях Киева, Харькова, Днепра, Винницы, Львова и Одессы. Под крылом современных программистов и специалистов Украинского центра разработок и исследованийamsung будут проводиться занятия для тех двухсот учеников, которые получат высокий показатель при отборе.'
        }],
    }
    render(){

        const {newsElement} = this.state

        const settings = {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            autoplay: true,
            slickPlay: true,
        };
        return(
            <div>
            <Slider {...settings}>
                {
                    newsElement.map(e => (
                <div>
            <div className='News-wrap'>
                <p className='News-wrap-background'>Новости</p>
                <div className="News">
                    <h3>Новости</h3>
                    <div className="News-conteiner">
                        <div className="News-conteiner-img">
                            <img src={photo1} alt='!'/>
                            <img src={photo2} alt='!'/>
                        </div>
                        <div className="News-conteiner-decript">

                                    <div>
                                        <p>{e.newsTitlle}</p>
                                        <span>{e.newsDeskription1}</span>
                                        <span>{e.newsDeskription2}</span>
                                    </div>

                        </div>
                    </div>
                </div>
            </div>

                </div>
                    ))
                }
            </Slider>
            </div>
        )
    }
}

export default News;