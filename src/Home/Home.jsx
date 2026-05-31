import React from 'react'
import Hero from './Hero'
import BookingSearch from './BookingSearch'
import FeaturedFleet from './FeaturedFleet'
import Testimonials from './Testimonials'
import CTA from './Cta'
import Footer from './Footer'
import VIPMembership from './VipMembership'
import Statistics from './Statics'
import HowItWorks from './HowItWorks'

export default function Home() {
  return (
  <>
  <Hero></Hero>
  <BookingSearch></BookingSearch>
  <FeaturedFleet></FeaturedFleet>
  <HowItWorks></HowItWorks>
  <Testimonials></Testimonials>
  <Statistics></Statistics>
  <VIPMembership></VIPMembership>
  <CTA></CTA>
  <Footer></Footer>
  </>
  )
}
