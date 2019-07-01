import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Login from '../Components/Login'
import {UserForm} from '../config/firebase'



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


  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

 
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
        <h1 className="AppName2">USER REGISTRATION FORM</h1>
        <Typography component="h1" variant="h5">
         {e.Title}
        </Typography><br/>
        {/* <form className={classes.form} noValidate> */}
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName1"
                label="Full Name"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email2"
                label="Email Address"
                name="email"
                autoComplete="email"
                // ref={this.emailRef}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                InputProps={{ inputProps: { min: 15, max: 70 } }}
                label="Age"
                name="age"
                autoComplete="age"
                type = "age"
                // ref={this.emailRef}
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
                id="password2"
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Confirmpassword"
                label="Confirm Password"
                type="password"
                id="password3"
                autoComplete="current-password"
              />
            </Grid>
            
            <br/>
            <FormControl component="fieldset"    className={classes.formControl}>
             {/* <FormLabel component="legend">Gender</FormLabel> */}
              <RadioGroup
                aria-label="Gender"
                name="gender1"
                className={classes.group}
                value={value}
                onChange={handleChange}
              >
          <FormControlLabel  value="male" control={<Radio />} label="Male" />     
          <FormControlLabel value="female" control={<Radio />} label="Female" />
    
          </RadioGroup>
         
          <FormControl className={classes.formControl}>
         
      
           <div >
            
             <label >
                    <span>Country:</span></label>

                    <select id="country">
                            
                             <option value="Pakistan">Pakistan  </option>
                             <option value="Turkey">Turkey</option>
                             <option value="Dubai">Dubai</option>
                             <option value="America">America</option>
                             <option value="Iran">Iran</option>
                        
                           </select>
      
         </div>

         <br/>  
          <div >
            
             <label >
                     <span>City:</span></label>

                    <select id="city">
                           <option value="Karachi">Karachi  </option>
                           <option value="Islamabad">Islamabad</option>
                           <option value="Lahore">Lahore</option>
                           <option value="Sharjah">Sharjah</option>
                           <option value="Los-Angeles">Los-Angeles</option>
                        
                          </select>
          </div> 
        </FormControl>

        
      </FormControl>
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
            onClick = {()=>UserForm()}
           
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={ShowLoginForm}>
              <strong>Already have an account? Sign in  </strong>
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

