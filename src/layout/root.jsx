import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import HeaderOne from '../components/sections/headers/headerOne'
import FooterOne from '../components/sections/footers/footerOne'
import BackToTop from '../components/ui/backToTop'
import useLoading from '../hooks/useLoading'
import Preloader from '../components/ui/preloader'
import WhatsAppChat from '../components/ui/whatsappIcoun'

const RootLayout = () => {
    const [loading] = useLoading()
    return (
        <>
            {loading && <Preloader />}
            <HeaderOne />
            <Outlet />
            <FooterOne />
            <WhatsAppChat/>
            <BackToTop />
            <ScrollRestoration />
        </>
    )
}

export default RootLayout