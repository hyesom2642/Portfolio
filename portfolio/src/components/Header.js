// >
import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// > icons 
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { ImFileText2 } from "react-icons/im";

function Header(){
    const [scrollY, setScrollY] = useState(0);

    // * 
    function headerHandle(){
        setScrollY(window.scrollY);
    }

    useEffect( () => {
        console.log("scrollY값 : ", scrollY);
        window.addEventListener('scroll', headerHandle);
    }, [scrollY]);

    return(
        <>
            <Wrapper className={scrollY > 150 ? "hide" : "show"}>
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
            </Wrapper>
        </>
    )
}

export default Header;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 30px 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;
    transition: opacity 1s ease-in-out;

    &.hide {
        opacity: 0;
    }
    &.show {
        opacity: 1;
    }
`;
const IconWrapper = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
        
    li {
        font-size: 40px;
        margin-right: 20px;
        transition: all 0.3s ease-in-out;

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
const MenuWrapper = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    li {
        font-size: 35px;
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