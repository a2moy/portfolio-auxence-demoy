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
    width: 96.5%;
`

const ImageFinal = styled.img`
    width: 75%;
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
                <ImageVertical src='https://via.placeholder.com/1400x500'/>
                <Hero src='https://via.placeholder.com/1440x600'/>
                <ImageFinal src='https://via.placeholder.com/1080x850'/>
            </ImageList>
            <Content>
                <NextProject>{nextProjectCatch} - <a href={NextID}>{nextProjectName}</a></NextProject>
            </Content>
        </>
    )
}

export default TmplOne
