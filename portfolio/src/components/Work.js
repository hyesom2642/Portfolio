// > carousel library 
// import Slider from "react-slick";

// > css 
import styled from 'styled-components';

import { useState } from 'react';
import data from '../data.js';

function Work(){
    const [projectData] = useState(data);

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 1500,
    //     autoplaySpeed: 3000,
    //     cssEase: "linear"
    // };

    return(
        <>
        <Wrapper>
            <ProjectWrapper>
                {
                    projectData.map( project =>
                        <div className="ex">
                            <h1 className="title">
                                {project.title}
                            </h1>
                            <ul>
                                {
                                    project.skills.map( (skill) => {
                                        return(
                                            <li>{skill}</li>
                                        )
                                    })
                                }
                            </ul>
                            <p>
                                {  project.explanation }
                            </p>
                            <ButtonWrapper>
                                <a href={ project.demo } target="blank">DEMO</a>
                                <a href={ project.github } target="blank">CODE</a>
                            </ButtonWrapper>
                        </div> 
                    )
                }
            </ProjectWrapper>

            {/* <ProjectImgWrapper>
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
            </ProjectImgWrapper> */}
        </Wrapper>
        </>
    )
}
export default Work;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;

    @media screen and ${(props) => props.theme.mobile} {
        height: auto;
        flex-direction: column;
    }
`;

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 60%;
    height: 100%;
    color: #fff;

    .ex {
        height: 100vh;
    }

    h1 {
        font-size: 80px;
    }
    ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    li {
        font-size: 20px;
        margin-right: 10px;

        &:last-child {
            margin-right: 0;
        }
    }
    p {
        width: 100%;
    }

    @media screen and ${(props) => props.theme.mobile} {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        h1 {
            font-size: 40px;
            margin-bottom: 30px;
        }
        ul {
            margin-bottom: 20px;
        }
        p {
            margin-bottom: 20px;
        }
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

    @media screen and ${(props) => props.theme.mobile} {
        margin-bottom: 20px;
        a {
            width: 150px;
            height: 40px;
            font-size: 15px;
        }
    }
`;

// const ProjectImgWrapper = styled.div`
//     width: 30%;
//     max-height: 500px;

//     img {
//         display: block;
//         width: 100%;
//         height: 100%;
//     }

//     @media screen and ${(props) => props.theme.mobile}{
//         width: 70%;
//         max-height: 600px;
//     }

//     img {
//         display: block;
//         width: 100%;
//         height: 100%;
//     }
// `;