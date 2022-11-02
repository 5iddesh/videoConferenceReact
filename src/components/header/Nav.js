import React, { useRef } from 'react'

export default function Nav() {
  const pricing = useRef()
  const Resources = useRef()

  const handleClick = (e) => {
    const navMenu = document.querySelector(".mobile-view");

    if(navMenu.style.display !== "flex"){
      navMenu.style.display = "flex";
    }else{
      navMenu.style.display = "none";
    }
  }

  // const handleClick = (e) => {
  //   const navMenu = document.querySelector(".nav-menu");
  //   const login = document.querySelector(".login");

  //   if(navMenu.style.display !== "flex"){
  //     navMenu.style.display = "flex";
  //     login.style.display = "block";
  //   }else{
  //     console.log("not block")
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
            <a href='#pricing'>Pricing</a>
         
            <a href='#deviceSolutions'>deviceSolutions</a>

            <a href='resources'>Resources</a>
        </div>
        <div className="login">
            <button>signIn</button>
        </div>

        <div className='mobile-view'>
        <a href='#pricing'>Pricing</a>
         
         <a href='#deviceSolutions'>deviceSolutions</a>

         <a href='resources'>Resources</a>
         <button>signIn</button>
        </div>
        <img onClick={(e) => handleClick(e)} src='assets/menu-01_generated.jpg' alt="hamburger-logo" className='hamburger-menu'/>
    </nav>
  )
}


  // <useReference.Provider value={deviceSolutions} > 
  // <span onClick={() => deviceSolutions.current.scrollIntoView() }>deviceSolutions</span>
  // </useReference.Provider> 