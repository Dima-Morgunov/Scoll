import React, { Component } from 'react';
import '../PagesStyle/Form.css'
import axios from "axios";

class  FormPage extends Component{
    state ={
        data:{
            name:'',
            email:'',
            number:'',
        }
    }

    onChange = e =>{
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        })};

    onSubmit(data){
        axios.post(`url`, this.state.data)
            .then(result => console.log('123'))
        }

    render(){

        const {data} = this.state

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
                        value={data.name}
                        onChange={this.onChange}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        name='email'
                        value={data.email}
                        onChange={this.onChange}
                    />
                    <input
                        type="tel"
                        placeholder="Телефон"
                        name='number'
                        value={data.number}
                        onChange={this.onChange}
                    />
                </div>
                <input className="Form-conteiner-button" type="button" value="Отправить" onClick={this.onSubmit}/>
            </form>
            </div>
        )
    }
}

export default FormPage;