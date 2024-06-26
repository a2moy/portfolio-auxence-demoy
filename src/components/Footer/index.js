import styled from 'styled-components';

const StyledFooterContainer = styled.footer`
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    background-color: ${props => props.theme.mainColor};
    padding-top: 58px;
    padding-bottom: 58px;

    @media(max-width: 970px) {
        padding: 25px 15px;
        flex-direction: column;
        gap: 25px;
        justify-content: flex-start;
    }
`
const StyledFooterContainerText = styled.div`
    display: flex;
    justify-content: space-between;
    width: 72%;
    margin-right: 55px;
    flex-direction: row;

    @media(max-width: 970px) {
        flex-direction: column;
        gap: 25px;
    }
`

const StyledFooterContainerItemIcon = styled.div`
    margin-left: 44px;
    &:hover {
        cursor: pointer;
    }
    @media(max-width: 970px) {
        margin-left: 0px;
    }
`
const StyledFooterContainerItemContacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media(max-width: 970px) {
        margin-left: 0px;
    }
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
    @media(max-width: 970px) {
        gap: 25px;
    }
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

const A2LogoBlack = styled.svg`
    width: 114.59px;
    @media(max-width: 970px) {
        width: 15.2vw;
    }
`

const Footer = () => {
    return (
        <StyledFooterContainer>
            <StyledFooterContainerItemIcon onClick={() => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }}>
                <A2LogoBlack viewBox="0 0 482 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M394.109 175.242C376.779 175.242 359.838 170.103 345.429 160.476C331.02 150.848 319.789 137.163 313.158 121.152C306.526 105.142 304.79 87.524 308.171 70.5272C311.552 53.5303 319.897 37.9177 332.151 25.6637C344.405 13.4096 360.018 5.06454 377.015 1.68366C394.012 -1.69723 411.629 0.0379652 427.64 6.6698C443.651 13.3016 457.335 24.5323 466.963 38.9415C476.591 53.3507 481.73 70.2914 481.73 87.6212C481.704 110.852 472.465 133.124 456.038 149.55C439.612 165.977 417.34 175.217 394.109 175.242ZM394.109 25.2563C381.771 25.2563 369.711 28.9149 359.453 35.7695C349.195 42.6242 341.2 52.3668 336.479 63.7655C331.758 75.1641 330.524 87.7067 332.931 99.807C335.339 111.907 341.281 123.022 350.006 131.745C358.731 140.468 369.846 146.408 381.947 148.813C394.048 151.219 406.59 149.982 417.988 145.259C429.386 140.536 439.127 132.539 445.979 122.279C452.832 112.02 456.488 99.9587 456.486 87.6212C456.467 71.0848 449.888 55.2314 438.194 43.5395C426.5 31.8476 410.645 25.2723 394.109 25.2563ZM303.839 59.843C299.262 74.7533 298.436 90.6139 301.502 106.001C305.151 124.315 314.148 141.136 327.356 154.338C340.564 167.539 357.39 176.527 375.706 180.166C381.585 181.334 387.532 181.934 393.468 181.974C393.868 187.492 394.068 193.189 394.068 199.068V385.467V494.812H274.334C274.334 492.013 274.352 488.463 274.372 484.563C274.419 475.482 274.475 464.5 274.334 456.676C258.264 481.57 230.392 500 151.974 500C45.0912 500 0 440 0 371.253C0 270.265 81.0934 223.659 211.078 223.659H263.579C266.432 223.659 269.169 222.526 271.188 220.509C273.207 218.493 274.343 215.757 274.347 212.904V196.569C274.347 166.23 274.347 150.616 266.543 142.58C258.267 134.057 241.215 134.057 206.079 134.057C172.371 134.057 155.209 134.057 146.471 142.637C137.407 151.536 137.407 169.667 137.407 206.604H21.9649C21.9649 96.8682 71.6384 46.412 210.712 46.412C246.873 46.412 278.014 50.7831 303.839 59.843ZM274.448 308.943C274.448 303.568 274.448 300.879 273.103 299.534C271.758 298.188 269.066 298.188 263.68 298.188H263.68H224.433C176.77 298.188 155.211 298.188 145.46 308.918C137.407 317.78 137.407 333.96 137.407 363.502C137.407 394.824 137.407 409.554 144.759 416.481C151.286 422.63 163.607 422.63 186.866 422.63C274.448 422.63 274.448 422.631 274.448 309.827V308.943ZM363.189 130.403V131.618H425.429V115.627H386.146C387.649 111.642 391.951 106.623 402.86 98.9679C419.065 87.57 424.592 81.3486 424.592 68.4926C424.592 51.6753 416.847 41.7599 394.218 41.7599C374.061 41.7599 362.789 51.736 362.789 73.6082H381.273C381.273 56.791 381.273 56.6937 394.218 56.6937C399.64 56.6937 402.417 56.6937 403.839 58.0819C405.333 59.5392 405.333 62.5266 405.333 68.6506C405.333 76.3544 401.575 79.5137 389.139 88.615C370.086 102.528 363.189 115.032 363.189 130.403Z" fill="black"/>
                </A2LogoBlack>
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
                        <StyledText>developers: <StyledLink target='_blank'  href='https://linktr.ee/quentinjeanningros'>quentin jeanningros</StyledLink> - <StyledLink target='_blank'  href='https://linktr.ee/spaniernathan'>nathan spanier</StyledLink></StyledText>
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
