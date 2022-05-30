import styled from 'styled-components'

const Header = styled.div`
    background-color: ${props => props.theme.mainColor};
    margin-top: -30px;
    padding-top: 84px;
    padding-bottom: 62px;
    z-index: 1;
    @media(max-width: 970px) {
        margin-top: -60px;
        padding-top: 60px;
    }
`

const Title = styled.div`
    font-size: 48px;
    padding: 0px 25px;
    @media(max-width: 970px) {
        padding: 0px 15px;
        font-size: 24px;
        gap: 15px;
    }
`

const ProjectName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    @media(max-width: 970px) {
        justify-content: flex-start;
    }
`

const ProjectSpec = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 36px;
    align-items: end;
    @media(max-width: 970px) {
        font-size: 24px;
        justify-content: flex-start;
        gap: 15px;
    }
`

const Texte = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 40px;
    @media(max-width: 970px) {
        padding: 0px 15px;
        width: auto;
    }
`

const Description = styled.div`
    width: 50%;
    text-align: justify;
    @media(max-width: 970px) {
        width: auto;
        font-size: 12px;
    }
`

const DescriptionTitle = styled.p`
    font-size: 24px;
    margin-bottom: 15px;
    @media(max-width: 970px) {
        width: auto;
        font-size: 18px;
    }
`

const TmplHeader = ({ data }) => {
    const { name, description, year, type } = data;
    return (
        <Header>
            <Title className='columns-container'>
                <ProjectName className='column-1'>{name}</ProjectName>
                <ProjectSpec className='column-2'>
                    <div>{year}</div>
                    <div>{type}</div>
                </ProjectSpec>
                <span className='column-3'></span>
            </Title>
            <Texte>
                <Description>
                    <DescriptionTitle>Information</DescriptionTitle>
                    {description}
                </Description>
            </Texte>
        </Header>
    )
}

export default TmplHeader
