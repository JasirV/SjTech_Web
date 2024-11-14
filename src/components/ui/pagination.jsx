import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Pagination = () => {
    return (
        <div className="pt-30 bor-top mt-65">
            <a className="blog-pegi" href="#0">01</a>
            <a className="blog-pegi active" href="#0">02</a>
            <a className="blog-pegi" href="#0">03</a>
            <a href="#0"><i className="fa-solid blog_pegi_arrow"><FaArrowRightLong/></i></a>
        </div>
    )
}

export default Pagination