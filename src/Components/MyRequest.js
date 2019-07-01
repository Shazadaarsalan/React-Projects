import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Pending from '../Components/Pending'
import InProgress from '../Components/InProgress'
import Delivered from '../Components/Delivered'

import Login from '../config/firebase';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs(e) {
  const classes = useStyles();
 
  const [value, setValue] = React.useState(0);

 
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  

  return (
    <div className={classes.root}>

    
      <AppBar position="static">
     
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
       
          <LinkTab label="PENDING" href="../Pending.js" />
          <LinkTab label="IN PROGRESS" href="/trash" />
          <LinkTab label="DELIVERED" href="/spam" />
          <LinkTab label="Log-Out" />
         
        </Tabs>
      </AppBar>
      {value === 3 && <Login/>}
      {value === 2 && <Delivered/>}
      {value === 1 && <InProgress/>}
     {value === 0 && <Pending/>}
     
     
    </div>
  );
}
