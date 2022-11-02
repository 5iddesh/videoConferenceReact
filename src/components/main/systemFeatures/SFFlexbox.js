import React from 'react'

export default function SFFlexbox() {
    const handleClick = (e) => {
        const items = document.querySelectorAll(".flex-item");
        items.forEach(item => item.classList.remove("active"));
        if(!e.target.classList.contains("flex-item")){
            let item = e.target.closest("div.flex-item");
            item.classList.add("active");
        }else{
            e.target.classList.add("active")
        }
    }
  return (
    <div className="flexbox">
                <div className='flex-item' onClick={handleClick}>
                    <img src="assets/image 24 (Traced)SF1.png" alt="SF logo1" />
                    <h4> HD video calling</h4>
                    <p>HD is a must to enhance immersion and boost employee engagement. They expect to</p>
                </div>
                <div className="flex-item active" onClick={handleClick}>
                    <img src="assets/image 27 (Traced)SF2.png" alt="SF logo1" />
                    <h4>Screen Sharing</h4>
                    <p>HD is a must to enhance immersion and boost employee engagement. They expect to</p>
                </div>
                <div className='flex-item' onClick={handleClick}>
                    <img src="assets//image 25 (Traced)SF3.png" alt="SF logo1" />
                    <h4> Recording</h4>
                    <p>HD is a must to enhance immersion and boost employee engagement. They expect to</p>
                </div>
            </div>
  )
}
