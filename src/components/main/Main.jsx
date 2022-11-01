import React from 'react'
import Cards from './cards/Cards'
import Email from './email/Email'
import FAQ from './FAQ/FAQ'
import Purchase from './purchase/Purchase'
import SystemFeatures from './systemFeatures/SystemFeatures'

export default function Main() {
  return (
    <div>
      <SystemFeatures />
      <Cards />
      <Purchase />
      <FAQ />
      <Email />
    </div>
  )
}
