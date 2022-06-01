// >
import styled from 'styled-components';

import { useState } from 'react';
import { Link } from 'react-router-dom';

// > icons 
import { AiFillGithub, AiOutlineMail, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // 
import { ImFileText2 } from "react-icons/im";

function Header(){
    const [menuButton, setMenuButton] = useState(false);
    function openMenuButton(){
        setMenuButton(true);
    }
    function closeMenuButton(){
        setMenuButton(false);
    }

    return(
        <>
            <Wrapper>
                <HambergerMenuWrapper onClick={openMenuButton} >
                    <AiOutlineMenu />
                </HambergerMenuWrapper>
                <SidebarWrapper className={menuButton ? "is-open" : "is-close"}>
                    <AiOutlineClose onClick={closeMenuButton} className="close" />
                    <IconWrapper>
                        <li>
                            <Link to="https://github.com/hyesom2642">
                            <AiFillGithub />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://github.com/hyesom2642">
                            <ImFileText2 />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://github.com/hyesom2642">
                            <AiOutlineMail />
                            </Link>
                        </li>
                    </IconWrapper>
                    <MenuWrapper>
                        <li className="is-active">
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>Project</li>
                        <li>Contact</li>
                    </MenuWrapper>
                </SidebarWrapper>
            </Wrapper>
        </>
    )
}

export default Header;

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    padding: 0;
    display: flex;
    background-color: inherit;
`;
const SidebarWrapper = styled.div`
    background-color: #000;
    width: 40vw;
    height: 100vh;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #eee;
    transition: transform 1s ease-in-out;

    &.is-open {
        transform: translateX(0);
    }
    &.is-close {
        transform: translateX(-40vw);
    }

    .close {
        position: absolute;
        top: 5vw;
        right: 5vw;
        font-size: 50px;
        color: #fff;

        &:hover {
            cursor: pointer;
        }
    }
`;

const IconWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        
    li {
        font-size: 40px;
        margin-bottom: 20px;
        transition: all 0.3s ease-in-out;

        a {
            color: #fff;
        }
    
        &:last-child {
            margin-bottom: 0;
        }
        &:hover {
            opacity: 0.7;
        }
    }
`;
const MenuWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
        font-size: 25px;
        font-weight: bold;
        padding: 10px 20px;
        cursor: pointer;
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
    li.is-active {
        color: #fff;
        font-weight: bold;
    }
    li:hover {
        background-size: 200% 100%;
    }
`;

const HambergerMenuWrapper = styled.div`
    display: block;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #fff;
    padding: 10px;

    &:hover {
        cursor: pointer;
    }
`;