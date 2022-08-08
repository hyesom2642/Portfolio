import { Nav, MenuIcon, NavbarLeftList, NavbarRightList } from './NavbarElement';

// > 
import { useEffect, useState } from 'react';

// > icons 
import { AiFillGithub, AiOutlineMail, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ImFileText2 } from "react-icons/im";

// > data 
import NavbarData from './NavbarData';

const Navbar = ({ toggleMenu, screenWidth, toggleNav }) => {
    const [navbarData] = useState(NavbarData);
    const [scrollY, setScrollY] = useState(0);

    const NavbarControl = () => {
        setScrollY(window.scrollY);
    }

    useEffect( () => {
        window.addEventListener('scroll', NavbarControl);

        return () => {
            window.removeEventListener('scroll', NavbarControl);
        }
    }, []);

    return(
        <>
            <Nav className={ scrollY > 130 ? "hide" : "show" }>
                <MenuIcon onClick={ toggleNav }>
                    {
                        toggleMenu ? <AiOutlineClose /> :<AiOutlineMenu />
                    }
                </MenuIcon>
                { (toggleMenu || screenWidth > 1199) && (
                    <>
                        <NavbarLeftList>
                            <li>
                                <a href="https://github.com/hyesom2642" target='blank'>
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/hyesom2642" target='blank'>
                                    <ImFileText2 />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/hyesom2642" target='blank'>
                                    <AiOutlineMail />
                                </a>
                            </li>
                        </NavbarLeftList>
                        <NavbarRightList>
                            <li>
                                { navbarData[3].name }
                            </li>
                            <li>
                                { navbarData[4].name }
                            </li>
                            <li>
                                { navbarData[5].name }
                            </li>
                            <li>
                                { navbarData[6].name }
                            </li>
                        </NavbarRightList>
                    </>
                )}
            </Nav>
        </>
    )
}
export default Navbar;