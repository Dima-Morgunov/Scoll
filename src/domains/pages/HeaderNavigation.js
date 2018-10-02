import React, { Component } from 'react';
import logo from  '../../image/logo.png'
import scalelogo from '../../image/scalelogo.png'
import '../PagesStyle/PagesStyle.css'


class HeaderNavigation extends Component{
    state ={
        showModal: false
    }
    toggle = () =>{
        this.setState({
        showModal: !this.state.showModal
    })
    }

    func = (str) => {
        this.toggle()
        this.props.scrollTo(str)
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
                                    <li onClick={this.toggle} className='openToggleMenu-closeButton'>x</li>
                                <li className='openToggleMenu-item'><span onClick={() => this.func(`contacts`)}>Контакт</span>ы</li>
                                <li className='openToggleMenu-item'><span onClick={() => this.func(`news`)}>Новост</span>и</li>
                                <li className='openToggleMenu-item'><span onClick={() => this.func(`course`)}>Курс</span>ы</li>
                                <li className='openToggleMenu-item'><span onClick={() => this.func(`about`)}>О на</span>с</li>
                            </ul>
                            ) : (null)}
                        <ul>
                            <li ><span onClick={() => scrollTo(`about`)}>О на</span>с</li>
                            <li ><span onClick={() => scrollTo(`course`)}>Курс</span>ы</li>
                            <li ><span onClick={() => scrollTo(`news`)}>Новост</span>и</li>
                            <li ><span onClick={() => scrollTo(`contacts`)}>Контакт</span>ы</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default HeaderNavigation;
