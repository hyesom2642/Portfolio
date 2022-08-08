// > css 
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    color: #fff;
`;

const Title = styled.h1`
    font-size: 80px;
    margin: 50px 0;
`;
const Skills= styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    li {
        font-size: 30px;
        margin-right: 10px;
        border: 1px solid #eee;
        border-radius: 50px;
        padding: 5px 25px;
        margin-bottom: 50px;

        &:last-child {
            margin-right: 0;
        }
    }

`;
const Explanation = styled.p`
    font-size: 30px;
    margin-bottom: 50px;
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 50px;
        border: 1px solid #fff;
        border-radius: 20px;
        background-color: inherit;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        margin-right: 20px;
        transition: all 0.3s ease-in-out;
    
        &:last-child {
            margin-right: 0;
        }
        &:hover {
            cursor: pointer;
            border: 1px solid #000;
            background-color: #fff;
            color: #000;
        }
    }
`;

export { Wrapper, Title, Skills, Explanation, ButtonWrapper };