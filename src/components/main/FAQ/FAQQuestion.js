import React from 'react'

export default function FAQQuestion(props) {
  console.log(props)
  return (
    props.questions.map((question, index) => {
        return (
            <div className="question" id={index+5} key={index+5}>
                    <div>{question.div}
                       {
                        props.active == index+5 && <p>{question.p}</p>
                       } 
                    </div>
                    {
                        props.active != index+5 && <img src={question.img} alt="plus" />
                    }
                    {
                        props.active == index+5 && <img src={question.imgMinus} alt="minus" />
                    }
                </div>
        )
    })
    
  )
}
