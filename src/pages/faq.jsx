import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import FaqOne from '../components/sections/faqs/faqOne'
import FaqTwo from '../components/sections/faqs/faqTwo'

const Faq = () => {
  return (
    <main>
      <PageBanner breadcrumbTitle={"Frequently Asked Questions"} />
      <FaqOne/>
      <FaqTwo/>
    </main>
  )
}

export default Faq