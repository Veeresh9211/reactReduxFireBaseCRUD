import React from 'react'
import {Link} from 'react-router-dom';
const navBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <h3 className="nav-item active">
            <Link to="/" className="nav-link">Bus Details</Link>
          </h3>           
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <Link to="/listBus" className="nav-link">List Buses</Link>
            </li>
            <li className="nav-item active">
              <Link to="/addBus" className="nav-link">Add Bus</Link>
            </li>    
          </ul>
          </div>
      </nav>
    )
}

export default navBar;