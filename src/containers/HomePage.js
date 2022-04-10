import styled from 'styled-components';

const Intro = styled.div`
    padding: 90px 25px;
    width: inherit;
    align-items: flex-start;
`

const Title = styled.div`
    font-size: 72px;
    font-weight: bold;
    color: ${props => props.theme.mainColor};
`

const Paragraph = styled.div`
    font-size: 18px;
    text-align: justify;
`

const TitleContainer = styled.div`
    width: 100%;
`

const HomePage = () => {
    return (
        <div>
            <Intro className='columns-container'>
                <TitleContainer className='column-1'>
                    <Title>DIGITAL DESIGNER &#38; ART DIRECTOR</Title>
                </TitleContainer>
                <Paragraph className='column-2'>
                    focus on digital products, visual identity and art direction, to help companies, brands and entrepreneurs develop and achieve their goals.
                </Paragraph>
                <span className='column-3'/>
            </Intro>
        </div>
    );
}

export default HomePage;
