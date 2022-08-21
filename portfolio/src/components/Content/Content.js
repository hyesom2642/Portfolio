// > 
import { useState } from 'react';

// > 
import { Container, Wrapper, Title, Skills, Explanation, ButtonWrapper, ImageWrapper } from './ContentElement';

// > data 
import data from './data.js';

const Content = () => {
    const [contentData] = useState(data);

    return(
        <>
            {
                contentData.map( (content) => 
                    <Container key={content.id}>
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
                        <ImageWrapper>
                            <img src={content.images} alt="project" />
                        </ImageWrapper>
                    </Container>
                )
            }
        </>
    )
}
export default Content;