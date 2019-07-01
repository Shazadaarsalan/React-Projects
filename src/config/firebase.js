import React from 'react'
import swal from 'sweetalert';

import * as firebase from 'firebase';
  
const Config = {
    apiKey: "AIzaSyDOlvK3RvD0BPiZZUskAJS03fc2ZYIL4H0",
    authDomain: "food-panda-bcffd.firebaseapp.com",
    databaseURL: "https://food-panda-bcffd.firebaseio.com",
    projectId: "food-panda-bcffd",
    storageBucket: "food-panda-bcffd.appspot.com",
    messagingSenderId: "463279057163",
    appId: "1:463279057163:web:9a58ca0874000520"
  };
// Initialize Firebase
firebase.initializeApp(Config);



class Login extends React.Component {
    constructor(){
      super();
      this.state = {
     
  
      }
  
      this.Auth = this.Auth.bind(this);
   
    }

    
    Auth() {
   
        var email = document.getElementById("email1").value;
        var password = document.getElementById("password1").value;
    
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((success) => {   
                localStorage.setItem("user",JSON.stringify(success))
                localStorage.setItem("email",JSON.stringify(email))
    
                swal({
                    title: "Welcome",
                    text: "You can use this email to procceed more features",
                    icon: "success",
                    button: "Done",
                })
                .then(() => {
                 
    
                this.props.history.push('/Dashboard');
                  
                })
            })
        
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                swal({
                    title: "Error",
                    text: errorMessage,
                    icon: "error",
                    button: "Ok",
                });
           
            });

          
        }
    

    render() {
        return (
            <div className="parent-box">
                <br/><br/><br/>
                <h2 className="h2">Sign In</h2>
              
               <div className="white-box">
                   <div className='signup-childs'>
                      <strong>Email</strong><br/>
                      <input id="email1" placeholder='Enter email'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>Password</strong><br/>
                      <input id="password1" type="password" placeholder='Enter password'/>
                   </div>

                  

                   <div className='signup-textline'>
                       <br/>
                       <button  type="submit" className="SignIn"  onClick={this.Auth }><h2>Sign In</h2></button>
                   </div>

                   <br/><br/>
               </div>

            </div>
        )
    }
}

export default Login
   



            
    function UserForm() {

        let email = document.getElementById("email2").value;
        let fullName = document.getElementById("fullName1").value;
        
        let age = document.getElementById("age").value;
 
        let password = document.getElementById("password2").value; 
       
        let cpassword =document.getElementById("password3").value; 
        let country =document.getElementById("country").value;
        let city =document.getElementById("city").value;
        // let gm =document.getElementById("gender").value;
    
       
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            let userObj = {
                fullName,
                email,
                   age,
                   password,
                   cpassword,
                   country,
                   city,
            }   


           
            let userUid = firebase.auth().currentUser.uid;
            firebase.database().ref('Users/' + userUid).set(userObj)


            .then(() => {   
           
                swal({
                    title: "Welcome",
                    text: "You can use this email to procceed more features",
                    icon: "success",
                    button: "Done",
                })
                .then(() => {
                
                        window.location.assign("/");
                })
            })
        })
                .catch((error) => {
                    // var errorCode = error.code;
                    var errorMessage = error.message;
                    swal({
                        title: "Error",
                        text: errorMessage,
                        icon: "error",
                        button: "Ok",
                    });
               
                });
            }







    export {Login,UserForm}

           
