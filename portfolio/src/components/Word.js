// > css 
import styled from 'styled-components';

// > 
import { useMediaQuery } from 'react-responsive';

function Word(){
    const Mobile = useMediaQuery(
        { maxWidth: 767 }
    );

    return(
        <>
            {
                Mobile 
                ? <MobileWodrWrapper>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </MobileWodrWrapper>
                : <WordWrapper>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </WordWrapper>
            }
        </>
    )
}

export default Word;

const WordWrapper = styled.div`
    width: 800px;
    padding: 30px 50px;
    
    p {
        width: 100%;
    }
`;

const MobileWodrWrapper = styled.div`
    width: 400px;
`;