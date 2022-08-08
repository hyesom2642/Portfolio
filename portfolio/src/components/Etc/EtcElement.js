// > 
import styled, { keyframes } from 'styled-components';

const Wrapper= styled.div`
width: 100vw;
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
const DownArrow = styled.div`
position: fixed;
left: 50%;
bottom: 5%;
transform: translate(-50%, 0);
display: flex;
justify-content: center;
align-itmes: center;
width: 100px;
height: 100px;
font-size: 100px;
color: #fff;
animation: ${ButtonAnimation} 2s linear Infinite;

@media screen and ${props => props.theme.tablet} {
    width: 80px;
    height: 80px;
    font-size: 80px;
}
@media screen and ${props => props.theme.mobile} {
    width: 60px;
    height: 60px;
    font-size: 60px;
}
`;

const TotopButton = styled.div`
    position: fixed;
    right: 3%;
    bottom: 5%;
    display: flex;
    justify-content: center;
    align-itmes: center;
    width: 60px;
    height: 60px;
    font-size: 60px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 100;

    &:hover {
        opacity: 0.7;
    }

    @media screen and ${props => props.theme.tablet} {
        right: 5%;
        width: 50px;
        height: 50px;
        font-size: 50px;
    }
    @media screen and ${props => props.theme.mobile} {
        width: 40px;
        height: 40px;
        font-size: 40px;
    }
`;
export { Wrapper, DownArrow, TotopButton };