import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ServiceArtical from '../components/sections/services/serviceArtical'
import ServiceFive from '../components/sections/services/serviceFive'

const ServiceDetails = () => {
    return (
        <main>
            <PageBanner breadcrumbMain={"Our Services"} breadcrumbMainLink={"/service-1"} breadcrumbTitle={"Property Maintenance"} />
            <ServiceArtical/>
            <ServiceFive/>
        </main>
    )
}

export default ServiceDetails