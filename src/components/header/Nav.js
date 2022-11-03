import React, { useEffect, useRef, useState } from 'react'

export default function Nav() {
  const pricing = useRef()
  const Resources = useRef()
 

  function temp(e) {
    const navMenu = document.querySelector(".nav-menu");
    const login = document.querySelector(".login");

    if(navMenu.style.height == "0"){
      navMenu.style.height = "auto";
      login.style.height = "auto";
    }else{
      navMenu.style.height = "0";
      login.style.height = "0";
    }
  }

  const handleClick = (e) => {
    const navMenu = document.querySelector(".nav-menu");
    const login = document.querySelector(".login");

    if(navMenu.style.display !== "flex"){
      navMenu.style.display = "flex";
      login.style.display = "inline-block";
    }else{
      navMenu.style.display = "none";
      login.style.display = "none";
    }
   
  }

  function handleNavigation(e) {
    window.history.pop()
  }

  return (
    <nav className="nav">
        <div className="logo">
            <img src="assets/msg1021876028-2481-removebg-preview(1) 1logo.png" alt="logo" className="logo-image" />
        </div>
        
        <div className="nav-menu">
            <a href='#pricing' onClick={handleNavigation}>Pricing</a>
         
            <a href='#deviceSolutions'>deviceSolutions</a>

            <a href='resources'>Resources</a>
        </div>
        <div className="login">
            <button>signIn</button>
        </div>
        <img onClick={(e) => handleClick(e)} src='assets/menu-01_generated.jpg' alt="hamburger-logo" className='hamburger-menu'/>

        {/* <div className='mobile-view'>
          <a href='#pricing'>Pricing</a>
          
          <a href='#deviceSolutions'>deviceSolutions</a>

          <a href='resources'>Resources</a>
          <button>signIn</button>
        </div> */}
    </nav>
  )
}


  // <useReference.Provider value={deviceSolutions} > 
  // <span onClick={() => deviceSolutions.current.scrollIntoView() }>deviceSolutions</span>
  // </useReference.Provider> 