import React from 'react';
import '../App.css'
// import { withRouter } from "react-router-dom";   

import swal from 'sweetalert';

import * as firebase from 'firebase';



class Button extends React.Component {
    
    Login() {
    
        this.props.history.push('/login');
          }



    render() {
        return (
            <div>
               
              <button className="btnl" onClick={this.Login.bind(this)}> <strong> <h1 >{this.props.naam}</h1></strong></button>
                
            </div>
        )
    }
}


export default Button



 

