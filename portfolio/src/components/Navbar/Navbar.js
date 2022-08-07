// > styled-components 
import styled from 'styled-components';

// > 
import { useEffect, useState } from 'react';

// > icons 
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { ImFileText2 } from "react-icons/im";

// > data 
import NavbarData from './NavbarData';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [navbarData] = useState(NavbarData);

    function NavbarControl(){
        setScrollY(window.scrollY);
    }

    useEffect( () => {
        window.addEventListener('scroll', NavbarControl)
        return () => {
            window.removeEventListener('scroll', NavbarControl)
        }
    }, []);

    return(
        <>
            <Wrapper className={ scrollY > 130 ? "hide" : "show" }>
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
            </Wrapper>
        </>
    )
}
export default Navbar;

// const MobileWrapper = styled.div`
//     display: none;

//     @media screen and ${(props) => props.theme.mobile}{
//         position: fixed;
//         top: 0;
//         width: 100%;
//         display: flex;
//         color: #fff;
//         width: 80px;
//         height: 80px;
//         margin: 15px;

//         .menubar {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             font-size: 80px;
//             cursor: pointer;
//         }
//         .menuWrapper {
            
//         }
//     }
// `;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;
    transition: all 0.5s ease-in-out;

    &.hide {
        top: -100%;
    }
    &.show {
        top: 0;
    }
`;

const NavbarLeftList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.5s ease-in-out;
        
    li {
        font-size: 40px;
        margin-right: 20px;

        a {
            color: #fff;
        }
    
        &:last-child {
            margin-right: 0;
        }
        &:hover {
            opacity: 0.7;
        }
    }
`;

const NavbarRightList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    li {
        cursor: pointer;
        font-size: 35px;
        font-weight: bold;
        margin-right: 20px;
        -webkit-text-stroke-color: #fff;
        -webkit-text-stroke-width: 0.02px;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-repeat: no-repeat;
        transition: background-size 0.7s cubic-bezier(0.67, 0.01, 0.15, 0.98);
        background-image: linear-gradient(90deg, #fff 0%, #fff 50%, transparent 50%);
        background-size: 0% 100%;
        text-transform: uppercase;
    }
    li:last-child {
        margin-right: 0;
    }
    li:hover {
        background-size: 200% 100%;
    }
`;