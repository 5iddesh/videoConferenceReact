import React, { useState } from 'react'
import FAQQuestion from './FAQQuestion';

export default function FAQ() {
    const [active, setActive] = useState(1);

    const questions = [
        {
            div: "6. kdsf",
            p: "lksdjflkdafs",
            img: "assets/plus.png",
            imgMinus: "assets//Vectorminus.png"
        },
        {
            div: "7. kdsf",
            p: "lksdjflkdafs",
            img: "assets/plus.png",
            imgMinus: "assets//Vectorminus.png"
        }
       
    ]

    const handleClick = (e) => {
        if(e.target.closest("div.question")){

            const questions = document.querySelectorAll(".questions .question");
            questions.forEach((question, index) => question.classList.remove("active"))
    
            let temp = e.target;
            if(!e.target.classList.contains("question")){
                temp = e.target.closest("div.question");
            }
            setActive(temp.id);
            
            questions[temp.id].classList.add("active");
        }
        
    }
  return (
    <section className="FAQ">
            <h2>Any Question about us ?</h2>

            <div className="questions" onClick={handleClick}>
                <div className="question" id="0">
                    <div className='0'>1. What are some suggestions for a successful video conference?
                       
                    </div>
                    <img src="assets/plus.png" alt="plus" />
                </div>
                <div className="question active" id="1">
                    <div>2. What equipment is needed for a virtual meeting?
                        <p>At a bare minimum, you'll need an internet connection and a device with video and audio capabilities, such as a smartphone, tablet, laptop or desktop. Consider your equipment. Sure, you can host virtual meetings on your phone,</p>
                    </div>
                    <img src="assets//Vectorminus.png" alt="minus" />
                </div>
                <div className="question" id='2'>
                    <div>3. What are the benefits of using video conferencing?
                    </div>
                    <img src="assets/plus.png" alt="plus" />
                </div>
                <div className="question" id='3'>
                    <div>4. What are the things that you have to consider during audio video ?</div>
                    <img src="assets/plus.png" alt="plus" />
                </div>
                <div className="question" id='4'>
                    <div>5. How can I improve my video conferencing skills?
                    </div>
                    <img src="assets/plus.png" alt="plus" />
                </div>

                <FAQQuestion questions={questions} active={active} />
            </div>
        </section>
  )
}
