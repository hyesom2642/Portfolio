// > styled-components 
import styled from 'styled-components';

const MenuIcon= styled.div`
    display: none;
    color: #fff;
    cursor: pointer;
    z-index: 100;

    @media screen and ${props => props.theme.tablet} {
        display: block;
        justify-contetn: center;
        align-items: center;
        position: absolute;
        top: 30px;
        left: 40px;
        width: 50px;
        height: 50px;
        font-size: 50px;

    }
    @media screen and ${props => props.theme.mobile} {
        display: flex;
        justify-contetn: center;
        align-items: center;
        position: absolute;
        top: 15px;
        left: 20px;
        font-size: 45px;
    }
`;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;
    transition: all 0.5s ease-in-out;

    &.hide {
        top: -100%;
    }
    &.show {
        top: 0;
    }

    @media screen and ${props => props.theme.tablet} {
        height: 100%;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-itmes: center;
    }
    @media screen and ${props => props.theme.mobile} {
    }
`;

const NavbarLeftList = styled.ul`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.5s ease-in-out;
        
    li {
        font-size: 40px;
        margin-right: 20px;

        a {
            color: #fff;
        }
    
        &:last-child {
            margin-right: 0;
        }
        &:hover {
            opacity: 0.7;
        }
    }

    @media screen and ${props => props.theme.tablet} {
        width: 100%;
        height: auto;
        justify-content: center;
        text-align: center;
    }
`;

const NavbarRightList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    li {
        cursor: pointer;
        font-size: 35px;
        font-weight: bold;
        margin-right: 20px;
        -webkit-text-stroke-color: #fff;
        -webkit-text-stroke-width: 0.02px;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-repeat: no-repeat;
        transition: background-size 0.7s cubic-bezier(0.67, 0.01, 0.15, 0.98);
        background-image: linear-gradient(90deg, #fff 0%, #fff 50%, transparent 50%);
        background-size: 0% 100%;
        text-transform: uppercase;
    }
    li:last-child {
        margin-right: 0;
    }
    li:hover {
        background-size: 200% 100%;
    }

    @media screen and ${props => props.theme.tablet} {
        flex-direction: column;
        justify-content: center;
        height: auto;

        li {
            width: 100%;
            font-size: 40px;
            margin-right: 0;
            text-align: center;
        }
    }
`;

export { Nav, MenuIcon, NavbarLeftList, NavbarRightList };