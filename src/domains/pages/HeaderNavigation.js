import React, { Component } from 'react';
import logo from  '../../image/logo.png'
import scalelogo from '../../image/scalelogo.png'
import '../PagesStyle/PagesStyle.css'


class HeaderNavigation extends Component{
    state ={
        showModal: false
    }
    toggle =() => {
        this.setState({
            showModal: true
        });
        this.setState({ showModal: true }, () => {
            document.addEventListener('click', this.closeMenu);
            });
        }
    closeMenu = () => {
        this.setState({ showModal: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
        document.addEventListener("touchstart", function(){}, true);
    }

    render(){
        let bar1 = 'bar1';
        let bar2 = 'bar2';
        let bar3 = 'bar3';
        const { scrollTo } = this.props

        return(
            <div className='backgraund'>
                <div className='conteiner-backgraund'>
                    <div className="conteiner">
                        <img src={logo} alt='£' onClick={() => scrollTo(`header`)}/>
                            <div className="wrapper, toggleMenu"  onClick={this.toggle}>
                                <div className="btn">
                                    <div className={bar1}></div>
                                    <div className={bar2}></div>
                                    <div className={bar3}></div>
                                </div>
                            </div>
                        {this.state.showModal ?
                            (
                                <ul className="openToggleMenu">
                                <li onClick={() => scrollTo(`contacts`)} className='openToggleMenu-item'><span>Контакт</span>ы</li>
                                <li onClick={() => scrollTo(`news`)} className='openToggleMenu-item'><span>Новост</span>и</li>
                                <li onClick={() => scrollTo(`course`)} className='openToggleMenu-item'><span>Курс</span>ы</li>
                                <li onClick={() => scrollTo(`about`)} className='openToggleMenu-item'><span>О на</span>с</li>
                            </ul>
                            ) : (null)}
                        <ul>
                            <li onClick={() => scrollTo(`about`)} ><span>О на</span>с</li>
                            <li onClick={() => scrollTo(`course`)}><span>Курс</span>ы</li>
                            <li onClick={() => scrollTo(`news`)}><span>Новост</span>и</li>
                            <li onClick={() => scrollTo(`contacts`)}><span>Контакт</span>ы</li>
                            <li><img src={scalelogo} alt='£'/></li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default HeaderNavigation;
