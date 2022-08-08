// > css 
import styled from 'styled-components';

// > components 
import Content from '../components/Content/Content';

const Project = () => {

    return(
        <>
            <Wrapper>
                <Content />
            </Wrapper>
        </>
    )
}
export default Project;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 40px;
`;