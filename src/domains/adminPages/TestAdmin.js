import React, {Component} from 'react';
import axios from  "axios"
import AdminPanel from  '../adminPages/AdminPanel'
import LoginAdminPage from "./LoginAdminPage";

 class TestAdmin extends Component{

     state = {
          isLogin: false,
     };

     onSubmit = (data) => {
         axios.post(`/api/auth/login`, data)
             .then(result => localStorage.setItem("token", result.data.access_token))
             .then(() => this.setState({isLogin : true}))
     }

     render(){
         const { isLogin } = this.state;

         return(
             <div>
                 {localStorage.getItem(`token`) ?
                     <AdminPanel />
                     :
                     <LoginAdminPage submit={this.onSubmit}/>}
             </div>
         )

     }
 }

export default TestAdmin

