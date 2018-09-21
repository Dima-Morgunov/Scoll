import React, { Component } from 'react';
import '../PagesStyle/Commidoncours.css'
import CoursesData from "../../image/CoursesData.png"
import imageFrontEnd from "../../image/imageFrontEnd.png"
import imagePHP from "../../image/imagePHP.png"
import imageStar from "../../image/imageStar.png"
import axios from "axios";


class Commidoncours extends Component{

    state ={
        data:{
            startFistCours: null,
            levelFirstCours: null,
            descriptFirstTittleCours: null,
            descriptFirstCours:null,

            startSecondCours:null,
            levelSecondCours: null,
            descriptSecondTittleCours:null,
            descriptSecondCours:null,
        }
    }

    starsCount = count => {

        var stars = [];
        for (var i = 0; i < count; i++) {
            stars.push(<img key={i} src={imageStar} alt="#"/>);
        }
        return stars
    }


    getFrontEndData = () =>{
        return axios.get(`/front-end`)
    }
    getBackEndData = () =>{
        return axios.get(`/php`)
    }
    componentDidMount() {
        this.getBackEndData()
            .then(result => {
                this.setState({
                    data: {...this.state.data,
                        startFistCours:  result.data[0].data,
                        levelFirstCours: result.data[0].complication,
                        descriptFirstTittleCours: result.data[0].title,
                        descriptFirstCours: result.data[0].text,
                        }

                })
            })
        this.getFrontEndData()
            .then(result => {
                console.log(result)
                this.setState({

                    data: {...this.state.data,
                        startSecondCours:  result.data[0].data,
                        levelSecondCourst: result.data[0].complication,
                        descriptSecondTittleCours: result.data[0].title,
                        descriptSecondCours: result.data[0].text,
                    }

                })
            })
    }

    render(){


        const {data} = this.state;




        return(
            <div className='Courses-wrap'>
                <p className='Courses-wrap-background'>Курсы</p>
            <div className="Courses-conteiner">
                <h3>Идет набор</h3>
                <div className="Courses-conteiner-wrap">
                    <div className="Courses-conteiner-wrap-PHP">
                        <p className="Courses-conteiner-wrap-PHP-Data">
                            Старт<br/>
                            {data.startFistCours}
                        </p>
                        <img className='Courses-conteiner-wrap-PHP-imageData' src={CoursesData} alt="#"/>
                        <img className="Courses-conteiner-wrap-PHP-img" src={imagePHP} alt="#"/>
                        <div className="Courses-conteiner-wrap-PHP-star">
                            Сложность
                            {
                                this.starsCount(data.levelFirstCours)
                            }
                        </div>
                        <p className="Courses-conteiner-wrap-FrontEnd-Descript">
                            <span className="Courses-conteiner-wrap-FrontEnd-Descript-title">{data.descriptFirstTittleCours}</span><br/>
                            {data.descriptFirstCours}
                        </p>
                    </div>

                    <div className="Courses-conteiner-wrap-FrontEnd">
                        <p className="Courses-conteiner-wrap-FrontEnd-Data">
                            Старт<br/>
                            {data.startSecondCours}
                        </p>
                        <img src={CoursesData} className="Courses-conteiner-wrap-FrontEnd-CoursesData" alt="#"/>
                        <img className='Courses-conteiner-wrap-FrontEnd-img' src={imageFrontEnd} alt="#"/>
                        <div className="Courses-conteiner-wrap-FrontEnd-star">
                            Сложность
                            {
                                this.starsCount(data.levelSecondCours)
                            }
                        </div>
                        <p className="Courses-conteiner-wrap-FrontEnd-Descript">
                            <span className="Courses-conteiner-wrap-FrontEnd-Descript-title">{data.descriptSecondTittleCours}</span><br/>
                            {data.descriptSecondCours}
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Commidoncours;