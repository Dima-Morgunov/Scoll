import React, { Component } from 'react';
import "../PagesStyle/ProgramCours.css"
import axios from "axios";

class ProgramCours extends Component{
    state = {
        secondParagraph:null,
        firstParagraph:null,
    }
    getProgramOne = () =>{
        return axios.get(`/program-one`)
    }
    getProgramTwo = () =>{
        return axios.get(`/program-two`)
    }
    componentDidMount() {
        this.getProgramOne()
            .then(result => {
                let randerArray = []
                for (var key in result.data[0]){
                    if(key !== 'id' && key !== 'created_at'  && key !== 'updated_at')
                        randerArray.push(result.data[0][key])
                }
                this.setState({
                    secondParagraph: randerArray,

                })
            })
        this.getProgramTwo()
            .then(result => {
                let randerArray = []
                for (var key in result.data[0]){
                    if(key !== 'id' && key !== 'created_at'  && key !== 'updated_at')
                        randerArray.push(result.data[0][key])
                }
                this.setState({
                    firstParagraph: randerArray,

                })
            })
     }

    render(){
        const {firstParagraph, secondParagraph} = this.state
        const {scrollTo} = this.props
        return(
            <div className='ProgramCours'>
                <p className='ProgramCours-background'>Программа курса</p>
                <div className="ProgramCours-conteiner">

                    <h3>Программа курса</h3>
                    <div className="ProgramCours-conteiner-wrap">
                        <div className="ProgramCours-conteiner-wrap-item">
                            <p><span>1 </span>Модуль</p>
                            <ul>
                                {firstParagraph
                                    ?
                                    firstParagraph.map(e =>
                                            <li>{e}</li>
                                        )
                                    : null
                                }
                            </ul>
                        </div>
                        <div className="ProgramCours-conteiner-wrap-item">
                            <p><span>2 </span>Модуль</p>
                            <ul>
                                {secondParagraph
                                    ?
                                    secondParagraph.map((e) =>
                                            <li>{e}</li>)
                                    : null
                                }
                            </ul>
                        </div>
                    </div>
                    <input onClick={() => scrollTo(`form`)} type="button" value="Заявка на курс"/>
                </div>
            </div>
        )
    }
}

export default ProgramCours;