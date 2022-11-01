import React from 'react'

export default function Email() {
  return (
    <section className="email">
            <h2>Let's start your new  video conference</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt </p>
            <div className='input'>
                <input type="email" required placeholder="Enter your Email address..." />
                <button type="submit" value="Subscribe now" >Subscribe now</button>
            </div>
        </section>
  )
}
