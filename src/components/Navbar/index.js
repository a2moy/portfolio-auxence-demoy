import { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { A2LogoBlack } from '../Icons';
import COLORS from '../../colors';
import themes from '../../theme';

const StyledNavbarContainer = styled.nav`
    margin-bottom: 90px;
    @media(max-width: 767px) {
        margin-bottom: 40px;
    }
    display: flex;
    flex-direction: column;
`

const StyledTopNavbar = styled.div`
    background-color: ${props => props.theme.mainColor};
    height: 68px;
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    @media(max-width: 767px) {
        flex-direction: row-reverse;
    }
`

const StyledBottomNavbar = styled.div`
    height: 25px;
    width: inherit;
    display: flex;
    justify-content: space-between;
`

const StyledElementSquareContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-basis: 60%;
`

const StyledElementSquareWhite = styled.div`
    background-color: #FAFAFA;
    flex-grow: 0;
    margin: 0px 0px;
    width: 25px;
    height: 25px;
`

const StyledElementSquareBlack = styled.div`
    background-color: #040205;
    flex-grow: 0;
    margin: 0px 0px;
    width: 25px;
    height: 25px;
`

const StyledText = styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #040205;
`

const StyledNavigationButton = styled(Link)`
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #040205;
    margin: 15.5px;

    @media(max-width: 767px) {
        margin: 4.5px;
    }

    &:hover {
        cursor: pointer;
    }
`

const StyledNavigationContainer = styled.div`
    display: flex;
    max-width: 327px;
    align-items: center;
    justify-content: space-between;
`

const StyledTitle = styled(StyledText)`
    @media(max-width: 767px) {
        display: none;
    }
`

const ColorElementsContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-right: 90px;
`

const ColorElement = styled.span`
    background-color: ${props => props.color};
    border-radius: 50%;
    border: 1px solid ${props => props.selected ? COLORS.black : 'transparent'};
    width: 12px;
    height: 12px;

    &:hover {
        cursor: pointer;
    }
`

const StyledButton = styled.span`
    align-self: center;
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #040205;

    @media(max-width: 767px) {
        margin: 4.5px;
    }

    &:hover {
        cursor: pointer;
    }
`

const StyledColorSelector = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
`

const StyledTheLab = styled.div`
    align-self: center;
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #040205;

    @media(max-width: 767px) {
        margin: 4.5px;
    }

    &:hover {
        cursor: pointer;
    }
    margin-right: 90px;
`

const ColorSelector = ({ setCurrentTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState("red");
    return (
        <StyledColorSelector>
            <StyledTheLab to="/">the lab</StyledTheLab>
            <ColorElementsContainer>
                <StyledButton onClick={() => { setIsOpen(!isOpen) }}>change color</StyledButton>
                <ColorElement selected={isActive === "red"} onClick={() => {
                    setCurrentTheme(themes.red);
                    setIsActive("red")
                }} hidden={!isOpen} color={COLORS.red} />
                <ColorElement selected={isActive === "blue"} onClick={() => {
                    setCurrentTheme(themes.blue);
                    setIsActive("blue")
                }} hidden={!isOpen} color={COLORS.blue} />
                <ColorElement selected={isActive === "orange"} onClick={() => {
                    setCurrentTheme(themes.orange);
                    setIsActive("orange")
                }} hidden={!isOpen} color={COLORS.orange} />
                <ColorElement selected={isActive === "green"} onClick={() => {
                    setCurrentTheme(themes.green);
                    setIsActive("green")
                }} hidden={!isOpen} color={COLORS.green} />
                <ColorElement selected={isActive === "purple"} onClick={() => {
                    setCurrentTheme(themes.purple);
                    setIsActive("purple")
                }} hidden={!isOpen} color={COLORS.purple} />
            </ColorElementsContainer>
        </StyledColorSelector>
    )
}

const Navbar = ({ setCurrentTheme }) => {
    return (
        <StyledNavbarContainer>
            <StyledTopNavbar>
                <StyledTitle>AUXENCE DEMOY</StyledTitle>
                <StyledTitle>DIGITAL DESIGNER & ART DIRECTOR</StyledTitle>
                <StyledNavigationContainer>
                    <StyledNavigationButton to='/'>HOME</StyledNavigationButton>
                    <StyledNavigationButton to='/projects'>PROJECT</StyledNavigationButton>
                    <StyledNavigationButton to='/about'>ABOUT</StyledNavigationButton>
                    <StyledNavigationButton to='/contact'>CONTACT</StyledNavigationButton>
                </StyledNavigationContainer>
                <A2LogoBlack width='18px' height='18px' />
            </StyledTopNavbar>
            <StyledBottomNavbar>
                <StyledElementSquareContainer>
                    <StyledElementSquareWhite />
                    <StyledElementSquareBlack />
                    <StyledElementSquareWhite />
                    <StyledElementSquareBlack />
                    <StyledElementSquareWhite />
                    <StyledElementSquareBlack />
                </StyledElementSquareContainer>
                <ColorSelector setCurrentTheme={setCurrentTheme} />
            </StyledBottomNavbar>
        </StyledNavbarContainer>
    )
}

export default Navbar
