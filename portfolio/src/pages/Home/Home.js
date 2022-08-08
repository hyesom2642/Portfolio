// > 
import { useState, useEffect } from 'react';

// > 
import { Wrapper, Title } from './HomeELement'; 

const Home = () => {
    const [scrollY] = useState(0);

    function scrollHandle(){
        const leftText = document.querySelector('.left');
        const rightText = document.querySelector('.right');

        leftText.style.marginLeft = window.scrollY * -4 + 'px';
        rightText.style.marginRight = window.scrollY * -4 + 'px';
    }
    useEffect( () => {
        window.addEventListener('scroll', scrollHandle);

        return () => {
            window.removeEventListener('scroll', scrollHandle);
        }
    }, [scrollY])

    return(
        <>
            <Wrapper>
                <Title>
                    <h1 className="left">FrontEnd Developer</h1>
                    <h1 className="right">KIM HYEON JU</h1>                        
                </Title>
            </Wrapper>
        </>
    )
}
export default Home;