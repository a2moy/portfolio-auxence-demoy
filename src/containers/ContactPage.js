import styled from 'styled-components';
import { useEffect } from 'react';
import {
    Content,
    IntroContainer,
    PageTitle,
    Paragraph,
} from '../components/Styled';

const PageTitleAbout = styled(PageTitle)`
    flex: 3.25;
`

const MailLink = styled.a`
    text-align: center;
    flex: 1.58;
    cursor: pointer;
    text-decoration: underline;
`

const ContactPage = (props) => {

    const mountCallback = props.mountCallback;
    const unmountCallback = props.unmountCallback;

    useEffect(() => {
        mountCallback();
        return unmountCallback;
    }, [mountCallback, unmountCallback]);

    return (
        <Content>
            <IntroContainer className='columns-container'>
                <PageTitleAbout className='column-1'>WANT TO TALK ?</PageTitleAbout>
                <Paragraph className='column-2'>
                    <p>
                        I&#39;m always thrilled to hear about freelance inquiries, collaboration proposals or any worldwide cool opportunity.
                    </p>
                </Paragraph>
                <MailLink className='column-3' onClick={() => window.open('mailto:2moy.auxence@gmail.com')}>
                    contact
                </MailLink>
            </IntroContainer>
        </Content>
    );
}

export default ContactPage;
