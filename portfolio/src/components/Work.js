// > carousel library 
import Slider from "react-slick";

// > css 
import styled from 'styled-components';

// > 
import { useMediaQuery } from 'react-responsive';

function Work(){
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    const Mobile = useMediaQuery(
        { maxWidth: 767 }
    );

    return(
        <>
        {   Mobile
            ? <MobileWrapper>
                <MobileProjectWrapper>
                    <h1>
                        Project Name
                    </h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT</li>
                    </ul>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <MobileButtonWrapper>
                        <button>DEMO</button>
                        <button>CODE</button>
                    </MobileButtonWrapper>
                </MobileProjectWrapper>
                <MobileProjectImgWrapper>
                    <Slider {...settings} className="slider">
                        <div>
                            <img src="/Animation.gif" alt="" />
                        </div>
                        <div>
                            <img src="/Animation1.gif" alt="" />
                        </div>
                        <div>
                            <img src="/Animation2.gif" alt="" />
                        </div>
                        <div>
                            <img src="/Animation3.gif" alt="" />
                        </div>
                    </Slider>
                </MobileProjectImgWrapper>
            </MobileWrapper>
            :<Wrapper>
                <ProjectWrapper>
                    <h1>
                        Project Name
                    </h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT</li>
                    </ul>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <ButtonWrapper>
                        <button>DEMO</button>
                        <button>CODE</button>
                    </ButtonWrapper>
                </ProjectWrapper>

                <ProjectImgWrapper>
                    <Slider {...settings} className="slider">
                        <div>
                            <img src="/Animation.gif" alt="" />
                        </div>
                        <div>
                            <img src="/Animation1.gif" alt="" />
                        </div>
                        <div>
                            <img src="/Animation2.gif" alt="" />
                        </div>
                        <div>
                            <img src="/Animation3.gif" alt="" />
                        </div>
                    </Slider>
                </ProjectImgWrapper>
            </Wrapper>
        }
        </>
    )
}

export default Work;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 5% 7%;
`;

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 50%;
    height: 500px;
    color: #fff;
    margin-right: 50px;

    h1 {
        font-size: 80px;
        margin-bottom: 30px;
    }
    ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 20px;
    }
    li {
        margin-right: 10px;

        &:last-child {
            margin-right: 0;
        }
    }
    p {
        width: 100%;
        padding-right: 30px;
        margin-bottom: 30px;
    }
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
        width: 200px;
        height: 50px;
        border: 1px solid #fff;
        border-radius: 20px;
        background-color: inherit;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        margin-right: 20px;
    
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

const ProjectImgWrapper = styled.div`
width: 30%;
min-height: 500px;

img {
    display: block;
    width: 100%;
    height: 100%;
}
`;


// * Mobile 
const MobileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 7% 5%;
`;
const MobileProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    color: #fff;

    h1 {
        font-size: 35px;
        margin-bottom: 30px;
    }
    ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 20px;
    }
    li {
        margin-right: 10px;

        &:last-child {
            margin-right: 0;
        }
    }
    p {
        width: 100%;
        margin-bottom: 20px;
    }
`;
const MobileButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
        width: 130px;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 20px;
        background-color: inherit;
        font-size: 15px;
        font-weight: bold;
        color: #fff;
        margin-right: 20px;
    
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
const MobileProjectImgWrapper = styled.div`
width: 40%;

img {
    display: block;
    width: 100%;
    height: 100%;
}
`;