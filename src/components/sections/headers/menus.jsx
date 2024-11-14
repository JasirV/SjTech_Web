import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import { menuList } from "../../../utils/fackData/menuList"

const Menus = () => {
    const pathName = useLocation().pathname
    const [openIndex, setOpenIndex] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setOpenIndex(null); 
    }, [pathName])
    

    const handleMenuClick = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); 
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <>
            {
                menuList.map(({ dropdownMenu, id, name, path }) => {
                    return (
                        <li key={id} className={`${openIndex === id ? 'open' : ''}`}>
                            <Link to={path} onClick={() => { if (windowWidth <= 1200) { handleMenuClick(id) } }}>
                                {name}
                                {dropdownMenu.length && <FaChevronDown style={{ fontSize: "12px", marginLeft: "7px" }} />}
                            </Link>
                            {
                                dropdownMenu.length &&
                                <ul className="sub-menu" style={{ display: openIndex === id ? 'block' : '' }}>
                                    {
                                        dropdownMenu.map(({ id, name, path, subdropdownMenu }) => {
                                            return (
                                                <Fragment key={id}>
                                                    <li className={`sub_menu_wrp ${subdropdownMenu.length ? "d-xl-block d-none" : ""}`}>
                                                        <Link to={path} className='d-flex align-items-center justify-content-between'>{name} {subdropdownMenu.length && <i ><FaChevronRight /></i>}</Link>
                                                        {
                                                            subdropdownMenu.length &&
                                                            <ul className="sub_sub_menu">
                                                                {
                                                                    subdropdownMenu.map(({ id, name, path }) => <li key={id}><Link to={path}>{name}</Link></li>)
                                                                }
                                                            </ul>
                                                        }
                                                    </li>
                                                    {/* for small devices */}
                                                    {subdropdownMenu.length && subdropdownMenu.map(({ id, name, mobile_name, path }) => <li key={id} className="d-block d-xl-none"><Link to={path}>{mobile_name ? mobile_name : name}</Link></li>)}
                                                    {/* for small devices */}
                                                </Fragment>
                                            )
                                        })}
                                </ul>
                            }
                        </li>
                    )
                })
            }
        </>
    )
}
export default Menus