// > 
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// > icon 
import { BsArrowUpCircleFill, BsChevronDoubleDown } from "react-icons/bs";



function EctButton(){
    const [scrollY, setScrollY] = useState(0); // * scollY의 값 저장 
    const [buttonState, setButtonState] = useState(false); // * Top button 상태 저장 
    useEffect( () => {
        console.log("scrollY값 : ", scrollY);
    }, [scrollY])

    function buttonHandle(){
        setScrollY(window.scrollY);
        if( scrollY >= 150){
            setButtonState(true) // * scrollY값이 150 이상일 때 Top button이 보이도록 
        } else {
            setButtonState(false) // * scrollY값이 150 이하일 때 Top button이 안보이도록 
        }
    }
    function buttonTopClick(){ // * click시 스크롤이 위로 올라가는 메서드 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setScrollY(0);
        setButtonState(false);
    }
    useEffect( () => {
        const watch = () => {
            window.addEventListener("scroll", buttonHandle)
        }
        watch();
        return() => {
            window.removeEventListener("scroll", buttonHandle);
        }
    })

    return(
        <>
            <Wrapper>
                <BsArrowUpCircleFill 
                    className={buttonState === true ? "setButton acitve" : "setButton" }
                    onClick={buttonTopClick} />
                <ButtonWrapper>
                    <BsChevronDoubleDown className={buttonState === true ? "hide" : "icon"} />
                </ButtonWrapper>
            </Wrapper>
        </>
    )
}

export default  EctButton;

const Wrapper = styled.div`
width: 50px;
height: 50px;
position: fixed;
bottom: 0;
right: 40px;
bottom: 40px;

BsArrowUpCircleFill {
    outline: none;
    border: none;
}

.setButton {
    width: 100%;
    height: 100%;
    color: #eee;
    opacity: 0; 
    z-index: 10;
    border-radius: 50%;
    border: 0 none;
    cursor: pointer;
    transition: opacity 0.3s ease-in;
}
.acitve {
    opacity: 1;
    z-index: 10;
}
.setButton:hover,
.setButton:focus,
.setButton:active { 
    opacity: 0.7;
}
`;

const ButtonAnimation = keyframes`
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
`;
const ButtonWrapper = styled.button`
display: block;
background-color: inherit;
outline: none;
border: none;
animation: ${ButtonAnimation} 2s linear Infinite;
position: fixed;
left: 50%;
bottom: 0;
transform: translate(-50% -50%);
font-size: 100px;
color: #eee;

.icon {
    opacity: 1;
}

.hide {
    opacity: 0;
}
`;