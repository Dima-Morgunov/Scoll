import React, { Component } from 'react';
import "../PagesStyle/Header.css"

class Header extends Component{

    render(){

        const {scrollTo} = this.props
        return(
            <div className="Header-conteiner">
                <h2>Добро пожаловать в it-школу в харькове</h2>
                <input onClick={() => scrollTo(`form`)} type="button" value="Заявка на курс"/>
            </div>
        )
    }
}

export default Header;