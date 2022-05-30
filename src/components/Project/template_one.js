import styled from 'styled-components'
import TmplHeader from './template_header'
import { Content } from "../Styled"
import { useParams } from 'react-router-dom';
import config from '../../config';
import { Link } from "react-router-dom";

const NextProject = styled.div`
    font-size: 24px;
    text-align: right;
    padding: 0px 14%;
    @media(max-width: 970px) {
        padding: 0px 5%;
        font-size: 18px;
    }
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
    @media(max-width: 970px) {
        gap: 5vw;
    }
`

const ImageVertical = styled.img`
    width: 75%;
    @media(max-width: 970px) {
        width: 95%;
    }
`

const LineContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.5vw;
    @media(max-width: 970px) {
        gap: 1vw;
    }
`

const ImageLineLong = styled.img`
    width: 54.5vw;
    @media(max-width: 970px) {
        width: 60vw;
    }
`

const ImageLineSmall = styled.img`
    width: 30.5vw;
    @media(max-width: 970px) {
        width: 34vw;
    }
`

const PortraitsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.5vw;
    @media(max-width: 970px) {
        gap: 1vw;
    }
`

const ImagePortrait = styled.img`
    width: 47.5vw;
    flex-direction: row;
    @media(max-width: 970px) {
        width: 47vw;
    }
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
                <NextProject>{nextProjectCatch} - <Link to={"/projects/" + NextID}>{nextProjectName}</Link></NextProject>
            </Content>
        </>
    )
}

export default TmplOne
