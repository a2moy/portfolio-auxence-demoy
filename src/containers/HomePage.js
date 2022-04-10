import styled from 'styled-components';

import {
    IntroContainer,
    PageTitle,
    Paragraph,
    Content,
} from '../components/Styled';

const HomePage = () => {
    return (
        <Content>
            <IntroContainer className='columns-container'>
                <PageTitle className='column-1'>DIGITAL DESIGNER &#38; ART DIRECTOR</PageTitle>
                <Paragraph className='column-2'>
                    <p>
                        focus on digital products, visual identity and art direction, to help companies, brands and entrepreneurs develop and achieve their goals.
                    </p>
                </Paragraph>
                <span className='column-3'/>
            </IntroContainer>
        </Content>
    );
}

export default HomePage;
