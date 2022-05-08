import styled from 'styled-components';

import { A2LogoBlack } from '../Icons'

const StyledFooterContainer = styled.footer`
    min-height: 192px;
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    background-color: ${props => props.theme.mainColor};
    padding-top: 58px;
`
const StyledFooterContainerText = styled.div`
    display: flex;
    justify-content: space-between;
    width: 72%;
    margin-right: 55px;
    flex-direction: row;
`

const StyledFooterContainerItemIcon = styled.div`
    margin-left: 44px;
    &:hover {
        cursor: pointer;
    }
`
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
    gap: 88px;
`

const StyledFooterContainerItemDevs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledLink = styled.a`
    font-size: 15px;
    text-decoration: none;
    color: #040205;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

const StyledText = styled.span`
    font-size: 15px;
`

const StyledCopyrights = styled.span`
    font-size: 12px;
`

const Footer = () => {
    return (
        <StyledFooterContainer>
            <StyledFooterContainerItemIcon onClick={() => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }}>
                <A2LogoBlack width='114.59px' height='119px' />
            </StyledFooterContainerItemIcon>
            <StyledFooterContainerText>
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
                        <StyledText>developers: <StyledLink href='https://www.instagram.com/quentinjeanningros/'>quentin jeanningros</StyledLink> - <StyledLink href='https://github.com/spaniernathan'>nathan spanier</StyledLink></StyledText>
                    </StyledFooterContainerItemDevs>
                    <div>
                        <StyledCopyrights>© 2022 - A2MOY - ALL RIGHTS RESERVED</StyledCopyrights>
                    </div>
                </StyledFooterContainerItemDevsCopyrights>
            </StyledFooterContainerText>
        </StyledFooterContainer>
    )
}

export default Footer
