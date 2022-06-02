// > css 
import styled from 'styled-components';

// > 
import { useMediaQuery } from 'react-responsive';

function Info(){
    const Mobile = useMediaQuery(
        { maxWidth: 767 }
    );   

    return(
        <>
        {
            Mobile 
            ? <MobileProfileWrapper>
                <ImgWrapper>
                    <img src="/profile.png" alt="" />
                    <figcaption>
                        <p>
                            김현주 <br />
                            1994. 01. 28 <br />
                            82+010-9425-6834 <br />
                        </p>
                    </figcaption>
                </ImgWrapper>
                <ButtonWrapper>
                    <button>E-MAIL</button>
                    <button>BLOG</button>
                    <button>GITHUB</button>
                </ButtonWrapper>
            </MobileProfileWrapper>
            : <ProfileWrapper>
                <ImgWrapper>
                    <img src="/profile.png" alt="" />
                    <figcaption>
                        <p>
                            김현주 <br />
                            1994. 01. 28 <br />
                            82+010-9425-6834 <br />
                        </p>
                    </figcaption>
                </ImgWrapper>
                <ButtonWrapper>
                    <button>E-MAIL</button>
                    <button>BLOG</button>
                    <button>GITHUB</button>
                </ButtonWrapper>
            </ProfileWrapper>
        }
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
const MobileProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    padding-bottom: 30px;

    ButtonWrapper {
        width: 150px;
    }

`;
const ImgWrapper = styled.figure`
    position: relative;
    width: 200px;
    margin-right: 5vw;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #eee;

        &:hover {
            opacity: 0.2;
            cursor: pointer;
        }
        &:hover figcation
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