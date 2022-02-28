import { useState } from 'react'
import styled from 'styled-components';

import { A2LogoBlack } from '../Icons'


const StyledFooterContainer = styled.footer`
    height: 250px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    background-color: #F92607;
`

const StyledFooterContainerItemIcon = styled.div``
const StyledFooterContainerItemContacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const StyledFooterContainerItemSocialNetworks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledFooterContainerItemDevsCopyrights = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`

const StyledFooterContainerItemDevs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledLink = styled.a`
    font-size: 15px;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`

const StyledText = styled.span`
    font-size: 15px;
`

const StyledCopyrights = styled.span`
    font-size: 12px;
`

const Footer = () => {
    const [hoveredItem, setHoveredItem] = useState(null)
    // TODO: On icon click scroll to the top of the page
    return (
        <StyledFooterContainer>
            <StyledFooterContainerItemIcon>
                <A2LogoBlack width='114.59px' height='119px' />
            </StyledFooterContainerItemIcon>
            <StyledFooterContainerItemContacts>
                <StyledLink href='mailto:2moy.auxence@gmail.com'>2moy.auxence@gmail.com</StyledLink>
                <StyledLink href='tel:+33605416548'>+33 6 05 41 65 48</StyledLink>
            </StyledFooterContainerItemContacts>
            <StyledFooterContainerItemSocialNetworks>
                <StyledLink target='_blank' href='https://www.instagram.com/a2.lab/'>instagram</StyledLink>
                <StyledLink target='_blank' href='https://dribbble.com/a2moy/'>dribble</StyledLink>
                <StyledLink target='_blank' href='https://fr.linkedin.com/in/auxence-demoy-7baabb166/'>linkedin</StyledLink>
            </StyledFooterContainerItemSocialNetworks>
            <StyledFooterContainerItemDevsCopyrights>
                <StyledFooterContainerItemDevs>
                    <StyledText>designer: auxence demoy</StyledText>
                    <StyledText>developers: <StyledLink href=''>quentin jeaningros</StyledLink> - <StyledLink href=''>nathan spanier</StyledLink></StyledText>
                </StyledFooterContainerItemDevs>
                <div>
                    <StyledCopyrights>© 2022 - A2MOY - ALL RIGHTS RESERVED</StyledCopyrights>
                </div>
            </StyledFooterContainerItemDevsCopyrights>
        </StyledFooterContainer>
    )
}

export default Footer
