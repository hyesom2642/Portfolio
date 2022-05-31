// > css 
import styled from 'styled-components';

// > 
import { useEffect } from 'react';

function Home(){
    const scrollY = 0;

    function scrollHandle(){
        const leftText = document.querySelector('.left');
        const rightText = document.querySelector('.right');

        leftText.style.marginLeft = window.scrollY * -4 + 'px';
        rightText.style.marginRight = window.scrollY * -4+ 'px';
    }
    useEffect( () => {
        window.addEventListener('scroll', scrollHandle);
    }, [scrollY])


    return(
        <>
            <Wrapper>
                <TitleWrapper>
                    <h1 className="left">FrontEnd Developer</h1>
                    <h1 className="right">KIM HYEON JU</h1>                        
                </TitleWrapper>
            </Wrapper>
        </>
    )
}

export default Home;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const TitleWrapper = styled.h1`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 100px;
        font-weight: bold;
        color: #fff;
        font-family: 'Kanit', sans-serif;
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;