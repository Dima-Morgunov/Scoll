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
                            <li><span className='Footer-conteiner-item-contacts-img1'></span><a href="+380(93)-708-8232"><span>+380(93)-708-8232</span></a></li>
                            <li><span className='Footer-conteiner-item-contacts-img2'></span><a href="mailto:"><span>itant.house@gmail.com</span></a></li>
                            <li><span className='Footer-conteiner-item-contacts-img3'></span><a href="skype:itan.house"><span>itant.house</span></a></li>
                            <li><span className='Footer-conteiner-item-contacts-img4'></span><a href="https://goo.gl/maps/MDmRWBU56hN2" target="_blank" ><span>Ukraine, Kharkiv</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="Footer-conteiner-social">
                    <ul>
                        <li><a href="https://www.facebook.com/itant.house" target="_blank"><img src={facebook} alt='£'/></a></li>
                        <li><a href="https://www.linkedin.com/in/sergei-g/" target="_blank"><img src={linkedin} alt='£'/></a></li>
                        <li><a href="https://www.upwork.com/o/companies/~01c70cdbbf75ef9f0f/" target="_blank"><img src={upwork} alt='£'/></a></li>
                    </ul>
                    <span>2018 ANTHOUSE, Inc. All Rights Reserved</span>
                </div>
                </div>
            </div>
        )
    }
}

export default Footer;