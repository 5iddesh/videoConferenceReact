import React from 'react'
import Option from './Option'

export default function Option1() {
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
            }
        ],
        isActive: `option`
    }
  return (


    <Option data={data} />

    // <div>
    //                 <div className="price">
    //                     <h4>Basic</h4>
    //                     <p>For 1x Project</p>
    //                     <h2>Free</h2>
    //                 </div>
    //                 <div className="functionalities">
    //                     <li>
    //                         <img src="assets/checkblue tick.png" alt="check" />
    //                         <b>100</b><span>Participants</span>
    //                     </li>
    //                     <li>
    //                         <img src="assets/checkblue tick.png" alt="check" />
    //                         <b>5hr</b><span>Time Limit</span>
    //                     </li>
    //                     <li>
    //                         <img src="assets/checkblue tick.png" alt="check" />
    //                         <b>yes</b><span>Private and group chat </span>
    //                     </li>
    //                     <li>
    //                         <img src="assets/checkblue tick.png" alt="check" />
    //                         <b>100</b><span>Participants</span>
    //                     </li><li>
    //                         <img src="assets/checkblue tick.png" alt="check" />
    //                         <b>100</b><span>Participants</span>
    //                     </li>
    //                     <li>
    //                         <img src="assets/checkblue tick.png" alt="check" />
    //                         <b>100</b><span>Participants</span>
    //                     </li>
    //                     <button>Choose Plan</button>
    //                 </div>
    //             </div>
  )
}
