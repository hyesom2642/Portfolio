// > 
import { useState } from 'react';

// > 
import { Container, Wrapper, Title, Skills, Explanation, ButtonWrapper, ProjectImgWrapper } from './ContentElement';

// > data 
import data from './data.js';

// > 
import Slider from "react-slick";

const Content = () => {
    const [contentData] = useState(data);
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return(
        <>
            {
                contentData.map( (content) => 
                    <Container>
                        <Wrapper>
                            <Title>
                                { content.title }
                            </Title>
                            <Skills>
                                {
                                    content.skills.map( (skill) => {
                                        return(
                                            <li>{ skill }</li>
                                        )
                                    })
                                }
                            </Skills>
                            <Explanation>
                                { content.explanation }
                            </Explanation>
                            <ButtonWrapper>
                                <a href={ content.demo } target="blank">DEMO</a>
                                <a href={ content.github } target="blank">CODE</a>
                            </ButtonWrapper>
                        </Wrapper>
                        
                        <ProjectImgWrapper>
                            <Slider {...settings}>
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
                    </Container>
                )
            }
        </>
    )
}
export default Content;