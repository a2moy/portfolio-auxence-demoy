import styled from 'styled-components';
import {
    Content,
    StyledHead,
    StyledHeadTitle,
    StyledHeadLeft,
    StyledHeadRight,
    StyledHeadDescription,
} from '../components/Styled';

const ContactContent = styled(Content)`
    margin-bottom: 0;
`

const Contact = styled(StyledHeadDescription)`
    text-align: center;
    text-decoration: underline;

    &:hover {
        cursor: pointer;
    }
`

const ContactPage = () => {
    return (
        <ContactContent>
            <StyledHead>
                <StyledHeadLeft>
                    <StyledHeadTitle>WANT TO TALK ?</StyledHeadTitle>
                </StyledHeadLeft>
                <StyledHeadRight>
                    <StyledHeadDescription>
                    I’m always thrilled to hear about freelance inquiries, collaboration proposals or any worldwide cool opportunity.
                    </StyledHeadDescription>
                </StyledHeadRight>
                <StyledHeadRight onClick={() => window.open('mailto:2moy.auxence@gmail.com')}>
                    <Contact>
                    contact
                    </Contact>
                </StyledHeadRight>
            </StyledHead>
        </ContactContent>
    );
}

export default ContactPage;
