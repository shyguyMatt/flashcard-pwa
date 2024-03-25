import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";


export default function Nav() {
  function slideNav() {
    let temp = document.querySelector('#side-nav-back')
    temp.classList.contains('side-nav-translate')
      ? temp.classList.remove('side-nav-translate')
      : temp.classList.add('side-nav-translate')
  }

  return(
    <div id='nav'>
      <div id='nav-bars-div' onClick={slideNav}>
        <FontAwesomeIcon id='nav-bars' icon={faBars} />        
      </div>

      <div id='top-nav'>
        <Link className="nav-link" to='/home'>Back Home</Link>
        <Link className="nav-link" to='/edit'>Create/Edit</Link>
        <Link className="nav-link" to ='/quiz_select'>Quiz Select</Link>        
      </div>

      <div id='side-nav-back' className="side-nav-translate">
        <div onClick={slideNav} id='side-nav-void'></div>
        <div id='side-nav'>
          <Link onClick={slideNav} className="side-nav-link" to='/edit'>Create/Edit</Link>
          <Link onClick={slideNav} className="side-nav-link" to ='/quiz_select'>Quiz Select</Link> 
          <Link onClick={slideNav} className="side-nav-link" to='/signin'>Login/Signup</Link>
        </div>
   
      </div>

    </div>
  )
}