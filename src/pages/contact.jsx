import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ContactForm from '../components/sections/contactForm'
import GoogleMap from '../components/sections/googleMap'

const Contact = () => {
  return (
    <main>
      <PageBanner breadcrumbTitle={"Contact Us"} />
      <ContactForm/>
      <GoogleMap/>
    </main>
  )
}

export default Contact