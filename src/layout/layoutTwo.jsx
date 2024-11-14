import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import HeaderTwo from '../components/sections/headers/headerTwo'
import FooterTwo from '../components/sections/footers/footerTwo'
import BackToTop from '../components/ui/backToTop'
import useLoading from '../hooks/useLoading'
import Preloader from '../components/ui/preloader'

const LayoutTwo = () => {
    const [loading] = useLoading()
    return (
        <>
            {loading && <Preloader />}
            <HeaderTwo />
            <Outlet />
            <FooterTwo />
            <BackToTop />
            <ScrollRestoration />
        </>
    )
}

export default LayoutTwo