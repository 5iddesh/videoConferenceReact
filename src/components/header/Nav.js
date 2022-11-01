import React from 'react'

export default function Nav() {
  return (
    <nav className="nav">
        <div className="logo">
            <img src="assets/msg1021876028-2481-removebg-preview(1) 1logo.png" alt="logo" className="logo-image" />
        </div>
        <div className="nav-menu">
            <span>Pricing</span>
            <span>deviceSolutions</span>
            <span>Resources</span>
        </div>
        <div className="login">
            <button>signIn</button>
        </div>
        <img src='assets/menu-01_generated.jpg' alt="hamburger-logo" className='hamburger-menu'/>
    </nav>
  )
}
