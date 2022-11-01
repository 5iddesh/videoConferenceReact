import React from 'react'
import Links from './Links'

export default function Flex1() {
  let obj = {
    header: "Products",
    links: [
      "Phone system",
      "video conferncing",
      "Could Contact Center",
      "Virtual Contact center",
      "Enterprise Phones & Devices"
    ]
  }

  return (
    <Links obj={obj} />
    // <div>
    //             <h2>Products</h2>
    //             <a href="#">Phone system</a>
    //             <a href="#">video conferncing</a>
    //             <a href="#">Could Contact Center</a>
    //             <a href="#">Virtual Contact center</a>
    //             <a href="#">Enterprise Phones & Devices</a>
    //         </div>
  )
}

