import React, { useEffect } from 'react'

const useStickyHeader = () => {
    useEffect(() => {
        const handleScroll = () => {
            const fixedTop = document.querySelector('.header-section');
            if (window.scrollY > 300) {
                fixedTop.classList.add('menu-fixed', 'animated', 'fadeInDown');
                fixedTop.classList.remove('slideInUp');
                document.body.classList.add('body-padding');
            } else {
                fixedTop.classList.remove('menu-fixed', 'fadeInDown');
                fixedTop.classList.add('slideInUp');
                document.body.classList.remove('body-padding');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
}

export default useStickyHeader