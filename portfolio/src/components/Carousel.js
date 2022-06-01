// > carousel library 
import Slider from "react-slick";

// > css 
import styled from 'styled-components';

function Carousel(){
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return(
        <>
            <SliderWrapper>
                <Slider {...settings} className="slider">
                    <div>
                        <h1>HTML / CSS</h1>
                    </div>
                    <div>
                        <h1>JAVASCRIPT</h1>
                    </div>
                    <div>
                        <h1>REACT</h1>
                    </div>
                </Slider>
            </SliderWrapper>
        </>
    )
}
export default Carousel;

const SliderWrapper = styled.div`
    display: block;
    width: 700px;
    padding: 30px;

    .slider {
        width: 100%;

        h1 {
            font-size: 50px;
            font-weight: bold;
            font-family: 'Kanit', sans-serif;
            color: #ffa000;
        }
    }
`;