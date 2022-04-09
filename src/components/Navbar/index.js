import { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { A2LogoBlack } from '../Icons';
import COLORS from '../../colors';
import themes from '../../theme';

const StyledNavbarContainer = styled.nav`
    display: flex;
    flex-direction: column;
`

const StyledTopNavbar = styled.div`
    background-color: ${props => props.theme.mainColor};
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
    background-color: #ffffff;
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
    font-size: 15px;
    line-height: 18px;
    color: #040205;
    font-style: normal;
    font-weight: bold;
    @media(max-width: 767px) {
        margin: 4.5px;
    }
    &:hover {
        cursor: pointer;
    }
`

const StyledNavigationContainer = styled.div`
    display: flex;
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
    align-items: center;
    gap: ${props => props.isOpen ? '8px' : '0px'};
    transition: 0.1s;
`

const ColorElement = styled.span`
    background-color: ${props => props.color};
    border-radius: 50%;
    border: ${props => props.isOpen ? '2px' : '0px'} solid ${props => props.selected ? COLORS.black : 'transparent'};
    width: ${props => props.isOpen ? '12px' : '0px'};
    height: ${props => props.isOpen ? '12px' : '0px'};
    transition: 0.1s;
    &:hover {
        cursor: pointer;
        transform: scale(110%);
        transition: 0.2s;
        border: 2px solid ${props => props.selected ? COLORS.black : '#A6A4AB'};
    }
`

const StyledButton = styled.span`
    align-self: center;
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #A6A4AB;
    transition: 0.1s;
    @media(max-width: 767px) {
        margin: 4.5px;
    }
    &:hover {
        cursor: pointer;
        color: #040205;
        transition: 0.2s;
    }
`

const StyledColorSelector = styled.div`
    display: flex;
    justify-content: space-between;
    height: 25px;
`

const EmptyBox = styled.div`
    width: 22.7%;
    height: 10px;
    min-width: 285px;
`

const ColorSelector = ({ setCurrentTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState("red");
    return (
        <StyledColorSelector className='the-column' >
            <StyledButton to="/">the lab</StyledButton>
            <ColorElementsContainer isOpen={isOpen}>
                <StyledButton onClick={() => { setIsOpen(!isOpen) }}>change color</StyledButton>
                <ColorElement selected={isActive === "red"} onClick={() => {
                    setCurrentTheme(themes.red);
                    setIsActive("red")
                }} isOpen={isOpen} color={COLORS.red} />
                <ColorElement selected={isActive === "blue"} onClick={() => {
                    setCurrentTheme(themes.blue);
                    setIsActive("blue")
                }} isOpen={isOpen} color={COLORS.blue} />
                <ColorElement selected={isActive === "orange"} onClick={() => {
                    setCurrentTheme(themes.orange);
                    setIsActive("orange")
                }} isOpen={isOpen} color={COLORS.orange} />
                <ColorElement selected={isActive === "green"} onClick={() => {
                    setCurrentTheme(themes.green);
                    setIsActive("green")
                }} isOpen={isOpen} color={COLORS.green} />
                <ColorElement selected={isActive === "purple"} onClick={() => {
                    setCurrentTheme(themes.purple);
                    setIsActive("purple")
                }} isOpen={isOpen} color={COLORS.purple} />
            </ColorElementsContainer>
        </StyledColorSelector>
    )
}

const Navbar = ({ setCurrentTheme }) => {
    return (
        <StyledNavbarContainer>
            <StyledTopNavbar className="neue-montreal-bold">
                <StyledTitle>AUXENCE DEMOY</StyledTitle>
                <StyledTitle>DIGITAL DESIGNER & ART DIRECTOR</StyledTitle>
                <EmptyBox/>
                <StyledNavigationContainer className='the-column'>
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
                <ColorSelector setCurrentTheme={setCurrentTheme}/>
            </StyledBottomNavbar>
        </StyledNavbarContainer>
    )
}

export default Navbar