// > styled-components 
import { Wrapper, DownArrow, TotopButton } from './EtcElement';

// > icons 
import { BsChevronDoubleDown, BsArrowUpCircleFill } from "react-icons/bs";

// > 
import { useState, useEffect } from 'react';

const Etc = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showButton, setShowButton] = useState(false); // * button의 초기 상태(false) 

    const currentButtonState = () => {
        setScrollY(window.scrollY);
        if( scrollY >= 100 ){
            setShowButton(false);
        } else {
            setShowButton(true);
        }
    };
    const toTopClick = () => {
        window.scrollTo({
            top: 0
        });
        setShowButton(false);
        setScrollY(0);
    };

    useEffect( () => {
        window.addEventListener('scroll', currentButtonState);

        return () => {
            window.removeEventListener('scroll', currentButtonState)
        }
    });

    return(
        <>
            <Wrapper>
                {
                    showButton === true
                    ? 
                    <>
                        <DownArrow>
                            <BsChevronDoubleDown aria-label='down arrow' />
                        </DownArrow>
                    </>
                    : null
                }
                {
                    showButton === false
                    ?
                    <>
                        <TotopButton onClick={ toTopClick }>
                            <BsArrowUpCircleFill aria-label='to top button' />
                        </TotopButton>
                    </>
                    : null
                }
            </Wrapper>
        </>
    )
}
export default Etc;
