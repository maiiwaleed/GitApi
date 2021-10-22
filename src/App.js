import React, { useState ,useEffect} from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router'
import Home from './components/Pages/Home/Home';


function App() {
  



  return (
   
     <>   
        

        <div className="container">
          <Home />
        </div>
    </>
    
  );
}

export default App;
