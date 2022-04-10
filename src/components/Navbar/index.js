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
    align-items: center;
    padding: 25px;
`

const StyledBottomNavbar = styled.div`
    padding: 0px 25px;
    height: 25px;
    width: inherit;
    display: flex;
    background-color: #ffffff;
`

const StyledElementSquareContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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

const Title = styled.div`
    display: flex;
    justify-content: space-between;
`

const ColorSelector = ({ setCurrentTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState("red");
    return (
        <StyledColorSelector className='column-2'>
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
            <StyledTopNavbar className='columns-container'>
                <Title className='column-1'>
                    <StyledTitle>AUXENCE DEMOY</StyledTitle>
                    <StyledTitle>DIGITAL DESIGNER &#38; ART DIRECTOR</StyledTitle>
                    <span/>
                </Title>
                <StyledNavigationContainer className='column-2'>
                    <StyledNavigationButton to='/'>HOME</StyledNavigationButton>
                    <StyledNavigationButton to='/projects'>PROJECT</StyledNavigationButton>
                    <StyledNavigationButton to='/about'>ABOUT</StyledNavigationButton>
                    <StyledNavigationButton to='/contact'>CONTACT</StyledNavigationButton>
                </StyledNavigationContainer>
                <Logo className='column-3'>
                    <A2LogoBlack width='18px' height='18px' />
                </Logo>
            </StyledTopNavbar>
            <StyledBottomNavbar className='columns-container'>
                <StyledElementSquareContainer className='column-1'>
                    <StyledElementSquareBlack />
                    <StyledElementSquareWhite />
                    <StyledElementSquareBlack />
                    <StyledElementSquareWhite />
                    <StyledElementSquareBlack />
                </StyledElementSquareContainer>
                <ColorSelector setCurrentTheme={setCurrentTheme}/>
                <span className='column-3'/>
            </StyledBottomNavbar>
        </StyledNavbarContainer>
    )
}

export default Navbar