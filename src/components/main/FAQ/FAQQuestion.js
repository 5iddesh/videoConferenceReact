import React from 'react'

export default function FAQQuestion(props) {
  return (
    props.questions.map((question, index) => {
        return (
            <div className="question" id={index+5} key={index}>
                    <div>{question.question.div}
                       {
                        props.active == index+5 && <p>{question.question.p}</p>
                       } 
                    </div>
                    {
                        props.active != index+5 && <img src={question.question.img} alt="plus" />
                    }
                    {
                        props.active == index+5 && <img src={question.question.imgMinus} alt="minus" />
                    }
                </div>
        )
    })
    
  )
}
