import React from 'react'
import {Link} from 'react-router-dom';
const navBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <h3 className="nav-item active">
            <Link to="/" className="nav-link">Redux TODO</Link>
          </h3>           
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <Link to="/listSong" className="nav-link">List Song</Link>
            </li>
            <li className="nav-item active">
              <Link to="/addSong" className="nav-link">Add Song</Link>
            </li>    
          </ul>
          </div>
      </nav>
    )
}

export default navBar;