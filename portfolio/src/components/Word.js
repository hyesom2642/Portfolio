// > css 
import styled from 'styled-components';

function Word(){
    return(
        <>
            <Wrapper>
                <WordWrapper>
                    <strong>주니어 개발자 김현주 입니다!</strong>
                    <p>
                        배움에는 끝이 없습니다.<br />
                        항상 배우는 자세로 겸손하게 변화에 맞춰 발전하는 프론트엔드 개발자가 되겠습니다.
                    </p>
                </WordWrapper>
            </Wrapper>
        </>
    )
}

export default Word;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 0 3%;

    @media screen and ${(props) => props.theme.mobile} {
        padding: 0 5%;
    }
`;

const WordWrapper = styled.div`
    width: 100%;
    text-align: center;

    strong {
        display: block;
        font-size: 30px;
        font-weight: bold;
        margin: 15px 0;
    }
    p {
        width: 100%;
        font-size: 18px;
    }

    @media screen and ${(props) => props.theme.mobile} {
        strong {
            font-size: 20px;
        }
        p {
            font-size: 16px;
        }
    }
`;
