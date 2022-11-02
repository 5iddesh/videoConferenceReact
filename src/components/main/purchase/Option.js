import React from 'react'

export default function Option({data}) {
    let {price,functionalities, isActive} = data;

    const handleClick = (e => {
        const items = document.querySelectorAll(".option");
        items.forEach(item => item.classList.remove("active"));
        if(!e.target.classList.contains("option")){
            let option = e.target.closest("div.option");
            option.classList.add("active");
        }else{
            e.target.classList.add("active")
        }
    })
  return (
    <div className={isActive} onClick={(e) => handleClick(e)} >
        <div className="price">
            <h4>{price.h4}</h4>
            <p>{price.p}</p>
            <h2>{price.h2}</h2>
        </div>
        <div className="functionalities">
            {functionalities.map((element, index) => {
                return <li key={index}>
                <img src={element.img1} alt="check" />
                <img src={element.img2} alt="check" />
                <b>{element.b}</b><span>{element.span}</span>
            </li>
            })}

            <a href='#'><button>Choose Plan</button></a>
        </div>
    </div>
  )
}
