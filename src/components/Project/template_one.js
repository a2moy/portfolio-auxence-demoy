import styled from 'styled-components'
import TmplHeader from './template_header'
import { Content } from "../Styled"
import { useParams } from 'react-router-dom';
import config from '../../config';

const NextProject = styled.div`
    font-size: 24px;
    text-align: right;
    padding: 0px 14%;
`

const Hero = styled.img`
    width: 100%;
`

const ImageList = styled.div`
    display: flex;
    gap: 13.5vw;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 7vw 0px;
`

const ImageVertical = styled.img`
    width: 75%;
`

const LineContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.5vw;
`

const ImageLineLong = styled.img`
    width: 54.5vw;
`

const ImageLineSmall = styled.img`
    width: 30.5vw;
`

const PortraitsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.5vw;
`

const ImagePortrait = styled.img`
    width: 47.5vw;
`

const TmplOne = (data) => {
    const { projectId } = useParams();
    let NextID = Number.parseInt(projectId) + 1
    let nextProjectCatch = "back to first project"
    if (NextID < config.projects.length)
    {
        nextProjectCatch = "next project"
    }
    else
    {
        NextID = 0
    }
    const nextProjectName = config.projects[NextID].name

    return (
        <>
            <TmplHeader data={data} />
            <Hero src='https://via.placeholder.com/1440x600'/>
            <ImageList>
                <ImageVertical src='https://via.placeholder.com/1080x500'/>
                <LineContainer>
                    <ImageLineLong src='https://via.placeholder.com/780x450'/>
                    <ImageLineSmall src='https://via.placeholder.com/440x450'/>
                </LineContainer>
                <PortraitsContainer>
                    <ImagePortrait src='https://via.placeholder.com/685x925'/>
                    <ImagePortrait src='https://via.placeholder.com/685x925'/>
                </PortraitsContainer>
                <ImageVertical src='https://via.placeholder.com/1080x500'/>
            </ImageList>
            <Content>
                <NextProject>{nextProjectCatch} - <a href={NextID}>{nextProjectName}</a></NextProject>
            </Content>
        </>
    )
}

export default TmplOne
