import styled from 'styled-components'

const Header = styled.div`
    background-color: ${props => props.theme.mainColor};
    margin-top: -30px;
    padding-top: 84px;
    padding-bottom: 62px;
    z-index: 1;
`

const Title = styled.div`
    font-size: 48px;
    padding: 0px 25px;
`

const ProjectName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`

const ProjectSpec = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Texte = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 40px;
`

const Description = styled.div`
    width: 50%;
`

const DescriptionTitle = styled.p`
    font-size: 24px;
    margin-bottom: 15px;
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
