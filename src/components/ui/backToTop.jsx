import React, { useEffect } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

const BackToTop = () => {
    useEffect(() => {
        window.addEventListener("scroll", calcScrollValue)
        return () => window.removeEventListener("scroll", calcScrollValue)
    }, [])


    // ------------- bottom back to top circle
    const calcScrollValue = () => {
        let scrollUp = document.getElementById("scroll-up");
        let progressValue = document.getElementById("scroll-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollUp.style.display = "grid";
        } else {
            scrollUp.style.display = "none";
        }
        scrollUp.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
        scrollUp.style.background = `conic-gradient(#312D81 ${scrollValue}%, #d9d9d9 ${scrollValue}%)`;
    };

    return (
        <>
            <div id="scroll-up">
                <span id="scroll-value"><i><FaArrowUpLong /></i></span>
            </div>
        </>
    )
}

export default BackToTop