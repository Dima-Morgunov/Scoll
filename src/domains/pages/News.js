import React, { Component } from 'react';
import "../PagesStyle/News.css"
import  photo1 from "../../image/NewsPhoto1.png"
import  photo2 from "../../image/NewsPhoto2.png"
import Slider from "react-slick";
import axios from "axios";


class News extends Component{
    state = {
        newsElement:[
            {
                id: 1,
                title: "IT-школа Samsung: от обучения до профессионального программирования",
                text_1: "В 2018-2019 учебном году учащиеся из 6 городов Украины смогут пройти бесплатное обучение программированию благодаря проекту «IT-школа Samsung», который предусматривает основы разработки приложений под систему Android.\nЭтот проект был создан при поддержке Министерства образования и науки Украины, а также Института модернизации содержания образования, и рассчитан на учащихся старших классов общеобразовательных школ.",
                text_2: "Зачисление в программу «IT-школа Samsung» будет осуществляться через вступительное тестирование, которое смогут пройти школьники 9-11 классов в учебных заведениях Киева, Харькова, Днепра, Винницы, Львова и Одессы. Под крылом современных программистов и специалистов Украинского центра разработок и исследований Samsung будут проводиться занятия для тех двухсот учеников, которые получат высокий показатель при отборе.",
                created_at: "2018-09-21 08:20:27",
                updated_at: "2018-09-21 08:20:27",
                images: [
                    {
                        id: 1,
                        image: "Картинка 1",
                        new_id: 1,
                        created_at: "2018-09-21 08:20:27",
                        updated_at: "2018-09-21 08:20:27"
                    },
                    {
                        id: 2,
                        image: "Картинка 2",
                        new_id: 1,
                        created_at: "2018-09-21 08:20:27",
                        updated_at: "2018-09-21 08:20:27"
                    }
                ]
            },
            {
                id: 2,
                title: "IT-школа Samsung: от обучения до профессионального программирования",
                text_1: "В 2018-2019 учебном году учащиеся из 6 городов Украины смогут пройти бесплатное обучение программированию благодаря проекту «IT-школа Samsung», который предусматривает основы разработки приложений под систему Android.\nЭтот проект был создан при поддержке Министерства образования и науки Украины, а также Института модернизации содержания образования, и рассчитан на учащихся старших классов общеобразовательных школ.",
                text_2: "Зачисление в программу «IT-школа Samsung» будет осуществляться через вступительное тестирование, которое смогут пройти школьники 9-11 классов в учебных заведениях Киева, Харькова, Днепра, Винницы, Львова и Одессы. Под крылом современных программистов и специалистов Украинского центра разработок и исследований Samsung будут проводиться занятия для тех двухсот учеников, которые получат высокий показатель при отборе.",
                created_at: "2018-09-21 10:15:16",
                updated_at: "2018-09-21 10:15:16",
                images: [
                    {
                        id: 3,
                        image: "Картинка 1",
                        new_id: 2,
                        created_at: "2018-09-21 10:15:16",
                        updated_at: "2018-09-21 10:15:16"
                    },
                    {
                        id: 4,
                        image: "Картинка 2",
                        new_id: 2,
                        created_at: "2018-09-21 10:15:16",
                        updated_at: "2018-09-21 10:15:16"
                    }
                ]
            }
        ],
    }

    getNews = () =>{
        return axios.get(`/news`)
    }
    componentDidMount() {
        this.getNews()
            .then(result => {
                console.log(result.data[0])
                this.setState({

                })
            })
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