import React from 'react'
import Option from './Option'

export default function Option2() {
    const data = {
        price: {
            h4: "iodsjf",
            p: "For 1x Project",
            h2: "Free"
        },
        functionalities: [
            {
                img1: "assets/checkblue tick.png",
                img2: "assets/checkwhite tick.png",
                b: "100",
                span: "Participants"
            },
            {
                img1: "assets/checkblue tick.png",
                img2: "assets/checkwhite tick.png",
                b: "100",
                span: "Participants"
            },
            {
                img1: "assets/checkblue tick.png",
                img2: "assets/checkwhite tick.png",
                b: "100",
                span: "Participants"
            },
            {
                img1: "assets/checkblue tick.png",
                img2: "assets/checkwhite tick.png",
                b: "100",
                span: "Participants"
            },
            {
                img1: "assets/checkblue tick.png",
                img2: "assets/checkwhite tick.png",
                b: "100",
                span: "Participants"
            },
            {
                img1: "assets/checkblue tick.png",
                img2: "assets/checkwhite tick.png",
                b: "100",
                span: "Participants"
            }
        ],
        isActive: `option active`,
    }
  return (

    <Option data={data} />

//     <div className="active option">
//     <div className="price">
//         <h4>Pro</h4>
//         <p>For small team needs</p>
//         <h2>$44.99</h2>
//     </div>
//     <div className="functionalities">
//         <li>
//             <img src="assets/checkwhite tick.png" alt="check" />
//             <span>Unlimited Participant</span>
//         </li>
//         <li>
//             <img src="assets/checkwhite tick.png" alt="check" />
//             <span>Unlimited Time limit</span>
//         </li>
//         <li>
//             <img src="assets/checkwhite tick.png" alt="check" />
//            <span>Yes Private & Grop Chat </span>
//         </li>
//         <li>
//             <img src="assets/checkwhite tick.png" alt="check" />
//             <span>Unlimited Bandwidth</span>
//         </li><li>
//             <img src="assets/checkwhite tick.png" alt="check" />
//             <span>Participants</span>
//         </li>
//         <li>
//             <img src="assets/checkwhite tick.png" alt="check" />
//             <span>Participants</span>
//         </li>
//         <button>Choose Plan</button>
//     </div>
// </div>
  )
}
