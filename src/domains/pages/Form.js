import React, { Component } from 'react';
import '../PagesStyle/Form.css'
import axios from "axios";
import PreloaderIcon from 'react-preloader-icon';
import TailSpin from 'react-preloader-icon/loaders/Oval';

class  FormPage extends Component{
    state ={
        isLoading: false,
        formError: {
            email:'',
            phone:'',
        },
        emailValid: false,
        phoneValid: false,
        formValid: false,
        name:'',
        email:'',
        text:'',

    }


    onChangeText = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        const re = /^[0-9\b]+$/;
        // if value is not blank, then test the regex
        if (e.target.value == '' || re.test(e.target.value)) {
            this.setState({text: e.target.value},
                () => { this.validateField(name, value)}
            )
        }
    }
    onChange = e =>{
            const name = e.target.name;
            const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });

        // if value is not blank, then test the regex

    };


    validateField(fieldName, value){
        let fieldvalidationError = this.state.formError;
        let emailValid = this.state.emailValid;
        let phoneValid = this.state.phoneValid;
        console.log(phoneValid + ' ' + emailValid)
        switch(fieldName){
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldvalidationError.email = emailValid? '': 'Некоректный E-mail';
                break;
            case 'phone':
                phoneValid = value.length >= 5;
                fieldvalidationError.phone = phoneValid? '': 'Телефон должен содержать как минимум 5 цифр';
                break;
            default:
                break
        }
        this.setState({
            formErrors: fieldvalidationError,
            emailValid: emailValid,
            phoneValid: phoneValid
        },this.validateForm);
    }
    validateForm(){
        this.setState({formValid: this.state.emailValid && this.state.phoneValid})
    }
    static errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    onSubmit= () =>{
        this.setState({
            isLoading: true
        })
        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.text
        }
        console.log(data)
        axios.post(`/email`, data)
            .then(result => console.log(result))
            .then(result => this.setState({isLoading: false, name:'', email:'',text:''}))
            .catch(errror => {})
        }

    render(){

        const {data, formErrors} = this.state

        return(
            <div className='Form-wrap'>
                <p className='Form-wrap-background'>Записаться на курс</p>
            <form className='Form'>
                <h3>
                    записаться на курс
                </h3>
                <div className='Form-conteiner'>
                    <input
                        type="text"
                        placeholder="Имя и Фамилия"
                        name='name'
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        name='email'
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    <input
                        type="tel"
                        placeholder="Телефон"
                        pattern="[0-9]*"
                        name='phone'
                        value={this.state.text}
                        onChange={this.onChangeText}
                    />
                    {formErrors?
                        <div className='Error-wrap'>
                            <p className='Form-error'>
                                {formErrors.email || formErrors.phone}
                            </p>
                        </div>
                        :
                        null
                    }
                </div>
                {this.state.isLoading?
                    <PreloaderIcon
                        className="Form-conteiner-loader"
                        loader={TailSpin}
                        size={60}
                        strokeWidth={8} // min: 1, max: 50
                        strokeColor="#006064"
                        duration={800}>
                    </PreloaderIcon>
                    :
                    <input disabled={!this.state.formValid} className="Form-conteiner-button" type="submit" value="Отправить" onClick={this.onSubmit}/>
                }

            </form>
            </div>
        )
    }
}

export default FormPage;