import React from 'react';
import './App.css';
import { store, persistor } from '../src/Store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Navigations from '../src/config/router'









class App extends React.Component {
    constructor(){
      super();
      this.state = {
        login : false,
  
      }
  
      // this.Login = this.Login.bind(this);
   
    }





render() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <header className="App-header">
            
             {/* <Dashboard Tab1="Restaurants"
 Tab2="MyRequest"/>  */}

{/* 
 <NavTab Tab1="Pending"
 Tab2="Progress"
 Tab3s="Delivered"/> */}

            <div className="display">
   
              <Navigations />
            </div>


          </header>
        </div>
      </PersistGate>
    </Provider>
  );
}
}

export default App;
