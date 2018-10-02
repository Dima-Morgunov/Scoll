import React, { Component } from 'react';
import "../PagesStyle/News.css"
import  photo1 from "../../image/NewsPhoto1.png"
import  photo2 from "../../image/NewsPhoto2.png"
import Slider from "react-slick";
import axios from "axios";


class News extends Component{
    state = {
        newsElement: [],
    }

    getNews = () =>{
        return axios.get(`/news`)
    }
    componentDidMount() {
        this.getNews()
            .then(result => {
                console.log(result)
                this.setState({
                    newsElement: result.data
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
                                                <p>{e.title}</p>
                                                <span>{e.text_1}</span>
                                                <span>{e.text_2}</span>
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