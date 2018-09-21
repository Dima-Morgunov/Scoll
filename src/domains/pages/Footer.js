import React, { Component } from 'react';
import "../PagesStyle/Footer.css"


import facebook from '../../image/FooterFaceboockIcon.png'
import linkedin from '../../image/FooterLickedInIcon.png'

import upwork from '../../image/FooterUpworkIcon.png'

class Footer extends Component{
    render(){

        const {scrollTo} = this.props

        return(

            <div className="Footer">
                <div className="Footer-wrap">
                <div className="Footer-conteiner">
                    <div className="Footer-conteiner-item">
                        <ul>
                            <li onClick={() => scrollTo(`about`)}>О нас</li>
                            <li onClick={() => scrollTo(`course`)}>Курсы</li>
                            <li onClick={() => scrollTo(`news`)}>Новости</li>
                            <li onClick={() => scrollTo(`contacts`)}>Контакты</li>
                        </ul>
                    </div>
                    <div className="Footer-conteiner-item-contacts">
                        <ul>
                            <li><span className='Footer-conteiner-item-contacts-img1'></span> <span>+380(93)-708-8232</span></li>
                            <li><span className='Footer-conteiner-item-contacts-img2'></span> <span>itant.house@gmail.com</span></li>
                            <li><span className='Footer-conteiner-item-contacts-img3'></span> <span>itant.house</span></li>
                            <li><span className='Footer-conteiner-item-contacts-img4'></span> <span>Ukraine, Kharkiv</span></li>
                        </ul>
                    </div>

                </div>
                <div className="Footer-conteiner-social">
                    <ul>
                        <li><img src={facebook} alt='£'/></li>
                        <li><img src={linkedin} alt='£'/></li>
                        <li><img src={upwork} alt='£'/></li>
                    </ul>
                    <span>2018 ANTHOUSE, Inc. All Rights Reserved</span>
                </div>
                </div>
            </div>
        )
    }
}

export default Footer;