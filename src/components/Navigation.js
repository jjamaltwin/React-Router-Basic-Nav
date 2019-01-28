import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <a > <Link to="/"></Link>  Home</a>    
        </div>
        <div>
          <a> <Link to="/About"></Link>  About</a>
        </div>
        <div>
          <a > <Link to="/Contact"></Link>   Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
