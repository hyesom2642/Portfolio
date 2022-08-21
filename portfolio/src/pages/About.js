// > css 
import styled from 'styled-components';

// > components 
import Carousel from '../components/Carousel';
import Info from '../components/Info';
import Word from '../components/Word';

function About(){
    return(
        <>
            <Wrapper>
                <Container>
                    <Carousel />
                    <Info />
                    <Word />
                </Container>
            </Wrapper>
        </>
    )
}

export default About;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 40px;

    @media screen and ${props => props.theme.tablet} {
        padding: 10% 5%;
    }

    @media screen and ${((props) => props.theme.mobile)} {
        
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 30px 0;
    background-color: #fff;
    border-radius: 30px;
    text-align: center;

    @media screen and ${((props) => props.theme.mobile)} {
        padding: 0;
    }
`;
