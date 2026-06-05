import React from 'react'
import Hero from './Hero'

import FeaturedFleet from './FeaturedFleet'
import Testimonials from './Testimonials'
import CTA from './Cta'
import Footer from './Footer'
import VIPMembership from './VipMembership'
import Statistics from './Statics'
import HowItWorks from './HowItWorks'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  const siteUrl = import.meta.env.VITE_SITE_URL;

  return (
  <>
  <Helmet>
        <title>LuxeRides | Premium Car Rental Services</title>

        <meta
          name="description"
          content="Rent luxury cars with LuxeRides. Premium vehicles, professional service, airport transfers, weddings, and corporate travel."
        />

        <meta
          name="keywords"
          content="car rental, luxury car rental, premium cars, airport transfer, wedding cars"
        />
        const siteUrl = import.meta.env.VITE_SITE_URL;

<link
  rel="canonical"
  href={`${siteUrl}`}
/>

  <meta property="og:type" content="website" />
  <meta property="og:title" content="LuxeRides | Premium Car Rental Services" />
  <meta
    property="og:description"
    content="Book premium and luxury cars with LuxeRides."
  />
  <meta property="og:url" content={siteUrl} />
  <meta
    property="og:image"
    content={`${siteUrl}logo.webp`}
  />
      </Helmet>
  <Hero></Hero>

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
