import React from 'react'

export default function FAQ() {
  return (
    <section className="FAQ">
            <h2>Any Question about us ?</h2>

            <div className="questions">
                <div className="question">
                    <div>1. What are some suggestions for a successful video conference?</div>
                    <img src="assets/plus.png" alt="plus" />
                </div>
                <div className="question active">
                    <div>2. What equipment is needed for a virtual meeting?
                        <p>At a bare minimum, you'll need an internet connection and a device with video and audio capabilities, such as a smartphone, tablet, laptop or desktop. Consider your equipment. Sure, you can host virtual meetings on your phone,</p>
                    </div>
                    <img src="assets//Vectorminus.png" alt="minus" />
                </div>
                <div className="question">
                    <div>3. What are the benefits of using video conferencing?
                    </div>
                    <img src="assets/plus.png" alt="plus" />
                </div>
                <div className="question">
                    <div>4. What are the things that you have to consider during audio video ?</div>
                    <img src="assets/plus.png" alt="plus" />
                </div>
                <div className="question">
                    <div>5. How can I improve my video conferencing skills?
                    </div>
                    <img src="assets/plus.png" alt="plus" />
                </div>
            </div>
        </section>
  )
}
