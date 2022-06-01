import styled from 'styled-components';

function Info(){
    return(
        <>
            <ProfileWrapper>
                <ImgWrapper>
                    <img src="/profile.png" alt="" />
                </ImgWrapper>
                <ButtonWrapper>
                    <button>E-MAIL</button>
                    <button>BLOG</button>
                    <button>GITHUB</button>
                </ButtonWrapper>
            </ProfileWrapper>
        </>
    )
}

export default Info;

const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    padding: 30px 0;
`;
const ImgWrapper = styled.div`
    width: 100%;
    margin-right: 5vw;
    overflow: hidden;

    img {
        border-radius: 50%;
        border: 1px solid #eee;

        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }
    }
`;
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        width: 200px;
        height: 50px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 20px;
        margin-bottom: 10px;
        background-color: #000;
        color: #fff;

        &:last-child {
            margin-bottom: 0;
        }
        &:hover {
            opacity: 0.7;
            background-color: #ffa000;
            border: none;
            cursor: pointer;
        }
    }
`;