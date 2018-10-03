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


    onChangeText = (text) =>{
        console.log(text)
        let newText = '';
        let numbers = '0123456789-+';

        for (var i = 0; i < text.length; i++) {
            if ( numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
        }
        this.setState({text: newText})
    }
    onChange = e =>{
        const text = (e.target.validity.valid) ? e.target.value : this.state.text;
            const name = e.target.name;
            const value = e.target.value;
        this.setState({[name]: value, text: text},
            () => { this.validateField(name, value) });
    };


    validateField(fieldName, value){
        let fieldvalidationError = this.state.formError;
        let emailValid = this.state.emailValid;
        let phoneValid = this.state.phoneValid;

        switch(fieldName){
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldvalidationError.email = emailValid? '': 'is invalid';
                break;
            case 'phone':
                phoneValid = value.length >= 5;
                fieldvalidationError.phone = phoneValid? '': 'is too short';
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
    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    onSubmit= () =>{
        this.setState({
            isLoading: true
        })
        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        }
        console.log(data)
        axios.post(`/email`, data)
            .then(result => console.log(result))
            .then(result => this.setState({isLoading: false}))
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
                        value={this.state.phone}
                        onChange={this.onChange}
                    />
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