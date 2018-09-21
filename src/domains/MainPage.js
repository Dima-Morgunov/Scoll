import React, { Component } from 'react';
import {Route} from "react-router-dom";
import HeaderNavigation from './pages/HeaderNavigation'
import Header from './pages/Header'
import AboutAs from './pages/AboutAs'
import Courses from "./pages/Courses";
import News from "./pages/News";
import ProgramCours from "./pages/ProgramCours";
import StartCourses from "./pages/StartCourses";
import Footer from './pages/Footer'
import Commidoncours from './pages/Commidoncours'
import FormPage from './pages/Form'





import scrollToComponent from 'react-scroll-to-component';


class MainPage extends Component{

    scrollFunc = (type) => {
        switch(type) {
            case `about`:
                scrollToComponent(this.AboutAs, { offset: 0, align: 'top', duration: 1500})
                break;
            case `course`:
                scrollToComponent(this.Courses, { offset: 0, align: 'top', duration: 1500})
                break;
            case `news`:
                scrollToComponent(this.News, { offset: 0, align: 'top', duration: 1500})
                break;
            case `contacts`:
                scrollToComponent(this.Contacts, { offset: 0, align: 'top', duration: 1500})
                break;
            case `form`:
                scrollToComponent(this.FormPage, { offset: 0, align: 'top', duration: 1500})
                break;
            case `header`:
                scrollToComponent(this.Header, { offset: 0, align: 'top', duration: 1500})
                break;
            default:
                return
        }
    }
    render(){
        return(
            <div>
                <HeaderNavigation  scrollTo ={this.scrollFunc} />
                <Header ref={(section) => { this.Header = section; }} scrollTo ={this.scrollFunc} />
                <AboutAs  scrollTo ={this.scrollFunc} ref={(section) => { this.AboutAs = section; }}/>
                <Commidoncours/>
                <Courses scrollTo ={this.scrollFunc} ref={(section) => { this.Courses = section; }}/>
                <ProgramCours scrollTo ={this.scrollFunc}/>
                <StartCourses scrollTo ={this.scrollFunc}/>
                <FormPage ref={(section) => { this.FormPage = section; }}/>
                <News ref={(section) => { this.News = section; }}/>
                <Footer scrollTo ={this.scrollFunc} ref={(section) => { this.Contacts = section; }}/>
            </div>


        )
}
}

export default MainPage