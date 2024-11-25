import React from 'react'
import { ScrollRestoration, Outlet } from 'react-router-dom'
import HeaderThree from '../components/sections/headers/headerThree'
import FooterTwo from '../components/sections/footers/footerTwo'
import BackToTop from '../components/ui/backToTop'
import Preloader from '../components/ui/preloader'
import useLoading from '../hooks/useLoading'
import WhatsAppChat from '../components/ui/whatsappIcoun'

const LayoutThree = () => {
    const [loading] = useLoading()
    return (
        <>
            {loading && <Preloader />}
            <HeaderThree />
            <Outlet />
            <FooterTwo />
            <WhatsAppChat/>
            <BackToTop />
            <ScrollRestoration />
        </>
    )
}

export default LayoutThree