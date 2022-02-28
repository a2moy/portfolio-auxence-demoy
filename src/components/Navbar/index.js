import { useState } from 'react'
import styled from 'styled-components';

import { A2LogoBlack } from '../Icons';

const StyledNavbarContainer = styled.nav`
    margin-bottom: 90px;
    @media(max-width: 767px) {
        margin-bottom: 40px;
    }
    display: flex;
    flex-direction: column;
`

const StyledTopNavbar = styled.div`
    background-color: #F92607;
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
`

const StyledElementSquareContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 152.59px;
    height: 25px;
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
    font-family: Neue Montreal;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #040205;
`

const StyledNavigationButton = styled.div`
    font-family: Neue Montreal;
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

const StyledIcon = styled.img`
    color: #040205;
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

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null)
    return (
        <StyledNavbarContainer>
            <StyledTopNavbar>
                <StyledTitle>AUXENCE DEMOY</StyledTitle>
                <StyledTitle>DIGITAL DESIGNER & ART DIRECTOR</StyledTitle>
                <StyledNavigationContainer>
                    <StyledNavigationButton>HOME</StyledNavigationButton>
                    <StyledNavigationButton>PROJECT</StyledNavigationButton>
                    <StyledNavigationButton>ABOUT</StyledNavigationButton>
                    <StyledNavigationButton>CONTACT</StyledNavigationButton>
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
            </StyledBottomNavbar>
        </StyledNavbarContainer>
    )
}

export default Navbar
