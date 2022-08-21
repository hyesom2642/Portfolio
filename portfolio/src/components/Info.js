// > css 
import styled from 'styled-components';

function Info(){

    return(
        <>
            <Profile>
                <ImgWrapper>
                    <img src="/profile.png" alt="김현주 프로필 사진" />
                    {/* <figcaption>
                        <p>
                            김현주 <br />
                            1994. 01. 28 <br />
                            82+010-9425-6834 <br />
                        </p>
                    </figcaption> */}
                </ImgWrapper>
                <ButtonWrapper>
                    <a href="mailto:kimhyesom@naver.com" className="email">E-MAIL</a>
                    <a href="https://velog.io/@hyesom" target="blank" className="blog">BLOG</a>
                    <a href="https://github.com/hyesom2642" target="blank" className="github">GITHUB</a>
                </ButtonWrapper>
            </Profile>
        </>
    )
}

export default Info;

const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px 0;

    @media screen and ${(props) => props.theme.mobile} {
        padding: 5%;
    }
`;
const ImgWrapper = styled.figure`
    position: relative;
    width: 200px;
    margin-right: 5vw;
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        border: 1px solid #eee;
        object-fit: contain;
        transition: all 0.3s ease-in-out;

        &:hover {
            opacity: 0.4;
            cursor: pointer;
        }
    }
    figcaption {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        box-sizing: border-box;
        opacity: 0;
        transition: all 0.3s ease-in-out;

        p {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
        }
    }
    
    &:hover figcaption {
        opacity: 1;
    }

`;
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 50px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 20px;
        margin-bottom: 10px;
        background-color: #000;
        color: #fff;
        transition: all 0.3s ease-in-out;

        &:last-child {
            margin-bottom: 0;
        }
        &:hover {
            opacity: 0.7;
            background-color: #ffa000;
            border: none;
            cursor: pointer;
            font-style: italic;
        }
    }
    @media screen and ${(props) => props.theme.mobile} {
        a {
            width: 150px;
        }
    }
`;