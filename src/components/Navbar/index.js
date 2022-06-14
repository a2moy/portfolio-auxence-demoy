import { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import COLORS from '../../colors';
import themes from '../../theme';

const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: column;
`

const TopNavbar = styled.div`
    background-color: ${props => props.theme.mainColor};
    width: inherit;
    align-items: center;
    padding: 25px;

    @media(max-width: 970px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 15px;
        gap: 0px;
    }
`

const BottomNavbar = styled.div`
    padding: 0px 25px;
    height: 25px;
    width: inherit;
    display: flex;

    z-index: 2;
    @media(max-width: 970px) {
        display: block;
        padding: 0px 15px;
        height: auto;
    }
`

const SquareContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 999;
`


const SquareBlack = styled.div`
    background-color: #040205;
    flex-grow: 0;
    margin: 0px 0px;
    width: 25px;
    height: 25px;
    @media(max-width: 970px) {
        width: 15px;
        height: 15px;
    }
`

const SquareWhite = styled(SquareBlack)`
    background-color: #FAFAFA;
`

const SquareWhiteOverExtend = styled(SquareWhite)`
    margin-left: -25px;
    @media(max-width: 970px) {
        margin-left: -15px;
    }
`

const TexteBold = styled.span`
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #040205;
`

const NavigationButton = styled(Link)`
    text-decoration: none;
    font-size: 15px;
    line-height: 18px;
    color: #040205;
    font-weight: bold;
    transition: 0.2s;
    &:hover {
        cursor: pointer;
    }
`

const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 970px) {
        gap: 2.5vw;
    }
`

const Title = styled(TexteBold).attrs({as: "a"})`
    text-decoration: none;
`

const ColorChooserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.isOpen ? '8px' : '0px'};
    @media(max-width: 970px) {
        flex-direction: column;
        align-items: flex-end;
        gap: '8px';
        width: 120px
    }
`

const ColorPastilContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.isOpen ? '8px' : '0px'};
    transition: 0.1s;
`

const ColorPastil = styled.span`
    background-color: ${props => props.color};
    border-radius: 50%;
    border: ${props => props.isOpen ? '2px' : '0px'} solid ${props => props.selected ? COLORS.black : 'transparent'};
    width: ${props => props.isOpen ? '12px' : '0px'};
    height: ${props => props.isOpen ? '12px' : '0px'};
    transition: 0.1s;

    @media(min-width: 971px) {
        &:hover {
            cursor: pointer;
            transform: scale(110%);
            transition: 0.2s;
            border: 2px solid ${props => props.selected ? COLORS.black : '#A6A4AB'};
        }
    }
`

const StyledButton = styled.a`
    text-decoration: none;
    font-size: 15px;
    color: #A6A4AB;
    transition: 0.1s;
    @media(min-width: 971px) {
        &:hover {
            cursor: pointer;
            color: #040205;
            transition: 0.2s;
        }
    }
`

const StyledButtonLink = styled(Link)`
    text-decoration: none;
    font-size: 15px;
    color: #A6A4AB;
    transition: 0.1s;
    @media(min-width: 971px) {
        &:hover {
            cursor: pointer;
            color: #040205;
            transition: 0.2s;
        }
    }
`

const TitleLink = styled(Link)`
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #040205;
    text-decoration: none;
`

const StyledColorSelector = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    @media(max-width: 970px) {
        gap: 75px;
        justify-content: end;
        height: 45px;
        align-items: flex-start;
    }
`

const TopNavbarContext = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 970px) {
        display: none;
    }
`

const ColorSelector = ({ setCurrentTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState("red");
    return (
        <StyledColorSelector className='column-2'>
            <StyledButtonLink to="/lab">the lab</StyledButtonLink>
            <ColorChooserContainer isOpen={isOpen}>
                <StyledButton onClick={() => { setIsOpen(!isOpen) }}>change color</StyledButton>
                <ColorPastilContainer isOpen={isOpen}>
                    <ColorPastil selected={isActive === "red"} onClick={() => {
                        setCurrentTheme(themes.red);
                        setIsActive("red")
                    }} isOpen={isOpen} color={COLORS.red} />
                    <ColorPastil selected={isActive === "blue"} onClick={() => {
                        setCurrentTheme(themes.blue);
                        setIsActive("blue")
                    }} isOpen={isOpen} color={COLORS.blue} />
                    <ColorPastil selected={isActive === "orange"} onClick={() => {
                        setCurrentTheme(themes.orange);
                        setIsActive("orange")
                    }} isOpen={isOpen} color={COLORS.orange} />
                    <ColorPastil selected={isActive === "green"} onClick={() => {
                        setCurrentTheme(themes.green);
                        setIsActive("green")
                    }} isOpen={isOpen} color={COLORS.green} />
                    <ColorPastil selected={isActive === "purple"} onClick={() => {
                        setCurrentTheme(themes.purple);
                        setIsActive("purple")
                    }} isOpen={isOpen} color={COLORS.purple} />
                </ColorPastilContainer>
            </ColorChooserContainer>
        </StyledColorSelector>
    )
}

const Navbar = ({ setCurrentTheme }) => {
    const [selected, setSelected] = useState(null);

    return (
        <NavbarContainer id="nav">
            <TopNavbar className='columns-container'>
                <TopNavbarContext className='column-1'>
                    <TitleLink to="/">AUXENCE DEMOY</TitleLink>
                    <Title>DIGITAL DESIGNER &#38; ART DIRECTOR</Title>
                    <span/>
                </TopNavbarContext>
                <NavigationContainer className='column-2'>
                    <NavButton to='/' texte="HOME"              callback={setSelected} selected={selected}/>
                    <NavButton to='/projects' texte="PROJECT"   callback={setSelected} selected={selected}/>
                    <NavButton to='/about' texte="ABOUT"        callback={setSelected} selected={selected}/>
                    <NavButton to='/contact' texte="CONTACT"    callback={setSelected} selected={selected}/>
                </NavigationContainer>
                <Logo className='column-3'>
                    <svg height="18px" viewBox="0 0 482 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M394.109 175.242C376.779 175.242 359.838 170.103 345.429 160.476C331.02 150.848 319.789 137.163 313.158 121.152C306.526 105.142 304.79 87.524 308.171 70.5272C311.552 53.5303 319.897 37.9177 332.151 25.6637C344.405 13.4096 360.018 5.06454 377.015 1.68366C394.012 -1.69723 411.629 0.0379652 427.64 6.6698C443.651 13.3016 457.335 24.5323 466.963 38.9415C476.591 53.3507 481.73 70.2914 481.73 87.6212C481.704 110.852 472.465 133.124 456.038 149.55C439.612 165.977 417.34 175.217 394.109 175.242ZM394.109 25.2563C381.771 25.2563 369.711 28.9149 359.453 35.7695C349.195 42.6242 341.2 52.3668 336.479 63.7655C331.758 75.1641 330.524 87.7067 332.931 99.807C335.339 111.907 341.281 123.022 350.006 131.745C358.731 140.468 369.846 146.408 381.947 148.813C394.048 151.219 406.59 149.982 417.988 145.259C429.386 140.536 439.127 132.539 445.979 122.279C452.832 112.02 456.488 99.9587 456.486 87.6212C456.467 71.0848 449.888 55.2314 438.194 43.5395C426.5 31.8476 410.645 25.2723 394.109 25.2563ZM303.839 59.843C299.262 74.7533 298.436 90.6139 301.502 106.001C305.151 124.315 314.148 141.136 327.356 154.338C340.564 167.539 357.39 176.527 375.706 180.166C381.585 181.334 387.532 181.934 393.468 181.974C393.868 187.492 394.068 193.189 394.068 199.068V385.467V494.812H274.334C274.334 492.013 274.352 488.463 274.372 484.563C274.419 475.482 274.475 464.5 274.334 456.676C258.264 481.57 230.392 500 151.974 500C45.0912 500 0 440 0 371.253C0 270.265 81.0934 223.659 211.078 223.659H263.579C266.432 223.659 269.169 222.526 271.188 220.509C273.207 218.493 274.343 215.757 274.347 212.904V196.569C274.347 166.23 274.347 150.616 266.543 142.58C258.267 134.057 241.215 134.057 206.079 134.057C172.371 134.057 155.209 134.057 146.471 142.637C137.407 151.536 137.407 169.667 137.407 206.604H21.9649C21.9649 96.8682 71.6384 46.412 210.712 46.412C246.873 46.412 278.014 50.7831 303.839 59.843ZM274.448 308.943C274.448 303.568 274.448 300.879 273.103 299.534C271.758 298.188 269.066 298.188 263.68 298.188H263.68H224.433C176.77 298.188 155.211 298.188 145.46 308.918C137.407 317.78 137.407 333.96 137.407 363.502C137.407 394.824 137.407 409.554 144.759 416.481C151.286 422.63 163.607 422.63 186.866 422.63C274.448 422.63 274.448 422.631 274.448 309.827V308.943ZM363.189 130.403V131.618H425.429V115.627H386.146C387.649 111.642 391.951 106.623 402.86 98.9679C419.065 87.57 424.592 81.3486 424.592 68.4926C424.592 51.6753 416.847 41.7599 394.218 41.7599C374.061 41.7599 362.789 51.736 362.789 73.6082H381.273C381.273 56.791 381.273 56.6937 394.218 56.6937C399.64 56.6937 402.417 56.6937 403.839 58.0819C405.333 59.5392 405.333 62.5266 405.333 68.6506C405.333 76.3544 401.575 79.5137 389.139 88.615C370.086 102.528 363.189 115.032 363.189 130.403Z" fill="black"/>
                    </svg>
                </Logo>
            </TopNavbar>
            <BottomNavbar className='columns-container'>
                <SquareContainer className='column-1'>
                    <SquareWhiteOverExtend/>
                    <SquareBlack/>
                    <SquareWhite/>
                    <SquareBlack/>
                    <SquareWhite/>
                    <SquareBlack/>
                </SquareContainer>
                <ColorSelector setCurrentTheme={setCurrentTheme}/>
                <span className='column-3'/>
            </BottomNavbar>
        </NavbarContainer>
    )
}

const NavButton = (props) => {
    return (
        <NavigationButton to={props.to}
            onMouseEnter=   {() => {props.callback(props.texte)}}
            onMouseLeave=   {() => {props.callback(null)}}
            onFocus=        {() => {props.callback(props.texte)}}
            onBlur=         {() => {props.callback(null)}}
            style={window.innerWidth <= 970 || (props.selected == props.texte || props.selected == null) ? {opacity: '1'} : {opacity: '0.25'}}>
            {props.texte}
        </NavigationButton>
    )
}

export default Navbar