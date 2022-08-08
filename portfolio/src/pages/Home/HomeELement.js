// > styled-components 
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 80px;
        font-weight: bold;
        color: #fff;
        font-family: 'Kanit', sans-serif;
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    @media screen and ${ props => props.theme.tablet } {
        h1 {
            font-size: 60px;
        }
    }

    @media screen and ${ props => props.theme.mobile } {
        h1 {
            font-size: 40px;
        }
    }
`;
export { Wrapper, Title };