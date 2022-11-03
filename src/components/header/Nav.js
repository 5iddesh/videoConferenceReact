import React, { useEffect, useRef, useState } from 'react'

export default function Nav() {
  const pricing = useRef()
  const Resources = useRef()
 
  const scrollToPricing = (e) => {
    let pricing = document.getElementById("pricing")
    let x = pricing.getBoundingClientRect().x
    let y = pricing.getBoundingClientRect().y
    window.scrollTo(x, y-50)
  }
  const scrollToDeviceSolutions = (e) => {
    let pricing = document.getElementById("deviceSolutions")
    let x = pricing.getBoundingClientRect().x
    let y = pricing.getBoundingClientRect().y
    window.scrollTo(x, y-50)
  }
  const scrollToResources = (e) => {
    let pricing = document.getElementById("pricing")
    let x = pricing.getBoundingClientRect().x
    let y = pricing.getBoundingClientRect().y
    window.scrollTo(x, y-50)
  }

  const handleClick = (e) => {
    const navMenu = document.querySelector(".nav-menu");
    const login = document.querySelector(".login");

    if(navMenu.style.opacity != "1"){
      navMenu.style.opacity = "1";
      login.style.opacity = "1";
    }else{
      navMenu.style.opacity = "0";
      login.style.opacity = "0";
    }
  }

  // const handleClick = (e) => {
  //   const navMenu = document.querySelector(".nav-menu");
  //   const login = document.querySelector(".login");

  //   if(navMenu.style.display !== "flex"){
  //     navMenu.style.display = "flex";
  //     login.style.display = "inline-block";
  //   }else{
  //     navMenu.style.display = "none";
  //     login.style.display = "none";
  //   }
  // }

  return (
    <nav className="nav">
        <div className="logo">
            <img src="assets/msg1021876028-2481-removebg-preview(1) 1logo.png" alt="logo" className="logo-image" />
        </div>
        
        <div className="nav-menu">
            <span onClick={scrollToPricing}>Pricing</span>
         
            <span onClick={scrollToDeviceSolutions}>deviceSolutions</span>

            <span onClick={scrollToResources} id="scroller">Resources</span>
        </div>
        <div className="login">
            <button>signIn</button>
        </div>
        <img onClick={(e) => handleClick(e)} src='assets/menu-01_generated.jpg' alt="hamburger-logo" className='hamburger-menu'/>

      
    </nav>
  )
}


