import React from 'react'
import swal from 'sweetalert';

import * as firebase from 'firebase';



class SignIn extends React.Component {
    constructor(){
      super();
      this.state = {
     
  
      }
  
    //   this.Auth = this.Auth.bind(this);
   
    }

    
    Auth1() {
   
        var email = document.getElementById("email1").value;
        var password = document.getElementById("password1").value;
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        
//       .then((success) => {
//         console.log(success)
//         var uid = firebase.auth().currentUser.uid;
//         localStorage.setItem("uid", JSON.stringify(uid))
//         // console.log(uid)
//         // if (success.user.emailVerified === false) {
//           db.ref('users/' + uid + '/account').on('value', (user_data) => {
//             var UserData = user_data.val()
//             console.log('==>> data ', UserData.name)
           
//             this.setState({ loading: false })
//             if (UserData.category === "user") {
//               this.props.history.push("/LocationUser")
//             } else {
//               this.props.history.push("/LocationRest")
//             }

//             this.props.store_user(UserData)
//           })
//           alert('Successfully Login!')
//         // }
//         // else{
//         //   alert('Your email is not verified. Check your email for verification.')
//         // }

//       })
//       .catch((error) => {
//         alert(error)
//       })
//   }
            .then((success) => {   
                var uid = firebase.auth().currentUser.uid;
                localStorage.setItem("uid", JSON.stringify(uid))
              
                localStorage.setItem("uid", JSON.stringify(uid))
                        console.log(uid)
                         if (success.user.emailVerified === false) {
                                      db.ref('users/' + uid + '/account').on('value', (user_data) => {
                                        var UserData = user_data.val()
                                        console.log('==>> data ', UserData.name)

                                        
            this.setState({ loading: false })
            if (UserData.category === "user") {
              this.props.history.push("/LocationUser")
            } else {
              this.props.history.push("/LocationRest")
            }

            this.props.store_user(UserData)
          })
    
                swal({
                    title: "Welcome",
                    text: "You can use this email to procceed more features",
                    icon: "success",
                    button: "Done",     
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

export default SignIn






























