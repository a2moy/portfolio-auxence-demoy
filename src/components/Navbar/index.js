import { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { A2LogoBlack } from '../Icons';
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
`

const BottomNavbar = styled.div`
    padding: 0px 25px;
    height: 25px;
    width: inherit;
    display: flex;
    background-color: #ffffff;
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

const SquareWhite = styled.div`
    background-color: #FAFAFA;
    flex-grow: 0;
    margin: 0px 0px;
    width: 25px;
    height: 25px;
`

const SquareBlack = styled.div`
    background-color: #040205;
    flex-grow: 0;
    margin: 0px 0px;
    width: 25px;
    height: 25px;
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
    @media(max-width: 767px) {
        margin: 4.5px;
    }
    &:hover {
        cursor: pointer;
    }
`

const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled(TexteBold)`
    @media(max-width: 767px) {
        display: none;
    }
`

const ColorChooserContainer = styled.div`
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
    &:hover {
        cursor: pointer;
        transform: scale(110%);
        transition: 0.2s;
        border: 2px solid ${props => props.selected ? COLORS.black : '#A6A4AB'};
    }
`

const StyledButton = styled.a`
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

const TopNavbarContext = styled.div`
    display: flex;
    justify-content: space-between;
`

const ColorSelector = ({ setCurrentTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState("red");
    return (
        <StyledColorSelector className='column-2'>
            <StyledButton href="/">the lab</StyledButton>
            <ColorChooserContainer isOpen={isOpen}>
                <StyledButton onClick={() => { setIsOpen(!isOpen) }}>change color</StyledButton>
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
            </ColorChooserContainer>
        </StyledColorSelector>
    )
}

const Navbar = ({ setCurrentTheme }) => {
    return (
        <NavbarContainer id="nav">
            <TopNavbar className='columns-container'>
                <TopNavbarContext className='column-1'>
                    <Title>AUXENCE DEMOY</Title>
                    <Title>DIGITAL DESIGNER &#38; ART DIRECTOR</Title>
                    <span/>
                </TopNavbarContext>
                <NavigationContainer className='column-2'>
                    <NavigationButton to='/'>HOME</NavigationButton>
                    <NavigationButton to='/projects'>PROJECT</NavigationButton>
                    <NavigationButton to='/about'>ABOUT</NavigationButton>
                    <NavigationButton to='/contact'>CONTACT</NavigationButton>
                </NavigationContainer>
                <Logo className='column-3'>
                    <A2LogoBlack width='18px' height='18px' />
                </Logo>
            </TopNavbar>
            <BottomNavbar className='columns-container'>
                <SquareContainer className='column-1'>
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

export default Navbar