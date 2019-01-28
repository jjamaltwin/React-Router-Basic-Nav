import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
           <Link to="/"></Link>  Home   
        </div>
        <div>
          <Link to="/About"></Link>  About
        </div>
        <div>
         <Link to="/Contact"></Link>   Contact
        </div>
      </div>
    </div>
  );
};

export default Navigation;
