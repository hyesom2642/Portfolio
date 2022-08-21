// > css 
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
    color: #fff;

    @media screen and ${props => props.theme.tablet} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    @media screen and ${props => props.theme.mobile} {
        
    }
`;
const Wrapper = styled.div`
    width: 100%;
    padding-right: 20px;

    @media screen and ${props => props.theme.tablet} {
        width: 100%;
    }
    @media screen and ${props => props.theme.mobile} {
        width: 100%;
    }
`;

const Title = styled.h1`
    font-size: 60px;
    margin: 50px 0;

    @media screen and ${props => props.theme.tablet} {
        font-size: 45px;
        margin: 0 0 30px 0;
    }
    @media screen and ${props => props.theme.mobile} {
        font-size: 35px;
    }
`;
const Skills= styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    li {
        font-size: 20px;
        margin-right: 10px;
        border: 1px solid #eee;
        border-radius: 50px;
        padding: 5px 25px;
        margin-bottom: 50px;
        transition: all 0.3s ease-in-out;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            color: #000;
            background-color: #fff;
            cursor: pointer;
        }
    }
    
    @media screen and ${props => props.theme.tablet} {
        justify-content: center;

        li {
            font-size: 20px;
            margin-bottom: 30px;
        }
    }
    @media screen and ${props => props.theme.mobile} {
        flex-direction: column;

        li {
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
`;
const Explanation = styled.p`
    font-size: 30px;
    margin-bottom: 50px;

    @media screen and ${props => props.theme.tablet} {
        font-size: 25px;
        margin-bottom: 30px;
    }
    @media screen and ${props => props.theme.mobile} {
        font-size: 20px;
    }
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

    @media screen and ${props => props.theme.tablet} {
        justify-content: center;
        margin-bottom: 20px;
    }
    @media screen and ${props => props.theme.mobile} {
        margin-bottom: 0;
    }
`;

const ImageWrapper = styled.div`
    width: 500px;
    height: auto;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }

    @media screen and ${props => props.theme.tablet} {

    }
    @media screen and ${props => props.theme.mobile} {
        display: none;
    }
`;

export { Container, Wrapper, Title, Skills, Explanation, ButtonWrapper, ImageWrapper };