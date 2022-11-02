import React, { useContext, useRef } from 'react'
import SFFlexbox from './SFFlexbox'
import SFHeading from './SFHeading'

export default function SystemFeatures() {
  const deviceSolutions = useRef()

  return (
      <section className="system-features" ref={deviceSolutions} id="deviceSolutions">
        <SFHeading />
        <SFFlexbox />
      </section>
  )
}
