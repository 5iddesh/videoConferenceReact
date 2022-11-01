import React from 'react'

export default function Links(props) {
  return (
    <div className='footer-flex'>
      <h2>{props.obj.header}</h2>
      {
        props.obj.links.map((link, index) => <a href="#" key={index}>{link}</a>)
      }
    </div>
  )
}
