import React from 'react';

import swal from 'sweetalert';

import * as firebase from 'firebase';


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Login from '../Components/Login'


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignUp(e) {
  
  const classes = useStyles();


  // const [value, setValue] = React.useState('female');

  // function handleChange(event) {
  //   setValue(event.target.value);
  // }

 
    function ShowLoginForm(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      return(
        <Login/>
      )
    }

  

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
    
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <h1 className="AppName2">RESTAURANT REGISTRATION FORM</h1>
        <Typography component="h1" variant="h5">
         {e.Title}
        </Typography><br/>

       
        {/* <form className={classes.form} noValidate> */}
          <Grid container spacing={2}>
            
            
            
            
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email3"
                label="Email Address"
                name="email"
                autoComplete="email"
                // ref={this.emailRef}
              />
            </Grid>
            
            
            
            
            
            
            
            
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="Restaurant Name"
                variant="outlined"
                required
                fullWidth
                id="fullName2"
                label="Restaurant Name"
                autoFocus
              />
            </Grid>
            
          
        

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password5"
                autoComplete="current-password"
              />
            </Grid>
            <br/>
            <br/>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type="password"
                id="password4"
                autoComplete="current-password"
              />
            </Grid>
            <br/>


            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="Restaurant Name"
                variant="outlined"
                required
                fullWidth
                id="country"
                label="Country"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="Restaurant Name"
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                autoFocus
              />
            </Grid>


            <Grid item xs={12}>
              <TextField
               
                  label=""
                variant="outlined"
                required
                fullWidth
                name="Certificate"
            
                type="file"
                id="file"
                autoComplete=""
              />
            </Grid>
            
           
            
            <br/>
            
            <br/>
            
            <br/>
            <FormControl component="fieldset" className={classes.formControl}>
         
            
          <FormControl className={classes.formControl}>
         

      </FormControl>

     
   

      </FormControl>
<br/>
<br/>
<br/>
<br/>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {()=>RestaurauntRegistered()}
           
          >
            Sign Up
          </Button>

  


          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={ShowLoginForm}>
                <strong>Already have an account? Sign in</strong>
              </Link>
            </Grid>
          </Grid>
        {/* </form> */}
      </div>
      <Box mt={5}>
       
      </Box>
    </Container>
  );
}






function RestaurauntRegistered(){
          

  let email = document.getElementById("email3").value;
     let password3 = document.getElementById("password5").value;
     let fullName = document.getElementById("fullName2").value; 

     let cfpassword =document.getElementById("password4").value; 
     let country =document.getElementById("country").value;
     let city =document.getElementById("city").value;


     let file = document.getElementById("file").files[0];
    firebase.auth().createUserWithEmailAndPassword(email, password3)
         .then(() => {
             let userObj = {
                 fullName,
                             email,
                             password3,
                             cfpassword,
                             country,
                             city,              
                 createTime: firebase.database.ServerValue.TIMESTAMP
             }
             let userId = firebase.auth().currentUser.uid;
             let storageRef = firebase.storage().ref().child(`RestaurantCertificates/${file.name}`)
             storageRef.put(file)
                 .then((snapshot) => {
                     snapshot.ref.getDownloadURL().then((sanpUrl) => {
                         userObj.img = sanpUrl
                         console.log(userObj)
                         firebase.database().ref('Restaurants/' + userId).set(userObj)
                         console.log(sanpUrl)
          
                     })
 
                 })
         })
      
  .then(() => {   
     swal({
         title: "Welcome",
         text: "You can use this email to procceed more features",
         icon: "success",
         button: "Done",
     })
     .then(() => {
       


      var db = firebase.database().ref('Restaurants/');
      db.on('value', function(snapshot) {
      
      
      var ProductsData = Object.values(snapshot.val());
      console.log("Restaurants;111;",snapshot);
      localStorage.setItem("Resturants", JSON.stringify(ProductsData));
      
                
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






