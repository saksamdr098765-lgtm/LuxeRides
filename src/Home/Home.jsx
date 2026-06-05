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
import PersonalData from './PersonalData'
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

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutoRental",
      name: PersonalData.name,
      url: siteUrl,
      logo: `${siteUrl}${PersonalData.logo}`,
      email: PersonalData.email,
      telephone: `+91${PersonalData.phone}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: PersonalData.address,
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+91${PersonalData.phone}`,
        contactType: "customer service",
        areaServed: "IN",
      },
      sameAs: [
        PersonalData.instagram,
        PersonalData.facebook,
        PersonalData.twitter,
        PersonalData.linkdin,
      ].filter(Boolean),
    })}
  </script>

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
