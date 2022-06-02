// > css 
import styled from 'styled-components';

// > components 
import Carousel from '../../components/Carousel';
import Info from '../../components/Info';
import Word from '../../components/Word';

function MobileAbout(){
    return(
        <>
            <WrapperFlex>
                <Wrapper>
                    <Carousel />
                    <Info />
                    <Word />
                </Wrapper>
            </WrapperFlex>
        </>
    )
}

export default MobileAbout;

const WrapperFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 85vw;
    height: 90vh;
    padding: 30px 0;
    background-color: #fff;
    border-radius: 30px;
`;
