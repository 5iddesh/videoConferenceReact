import React from 'react'
import Intro from './Intro'
import IntroClients from './IntroClients'
import IntroImage from './IntroImage'

export default function Introduction() {
  return (
    <div className="introduction">
      <Intro />
      <IntroImage />
      <IntroClients />
    </div>
  )
}
