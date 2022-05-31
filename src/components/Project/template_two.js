import styled from 'styled-components'
import TmplHeader from './template_header'
import { Content } from "../Styled"
import { useParams } from 'react-router-dom';
import config from '../../config';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

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
    width: 96.5%;
    @media(max-width: 970px) {
        width: 95%;
    }
`

const ImageFinal = styled.img`
    width: 75%;
    @media(max-width: 970px) {
        width: 95%;
    }
`

const Feed = styled.div`
    display: flex;
    gap: 1.5vw;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

const Grid = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5vw;
    width: 100%;
    justify-content: center;
    @media(max-width: 970px) {
        gap: 1vw;
    }
`

const ImageGrid = styled.img`
    width: 47.5vw;
    @media(max-width: 970px) {
        width: 47vw;
    }
`

const EmptyGridCase = styled.div`
    width: 47.5vw;
    height: 100%;
    @media(max-width: 970px) {
        width: 47vw;
    }
`

const TmplOne = (arg) => {
    const mountCallback = arg.props.mountCallback;
    const unmountCallback = arg.props.unmountCallback;

    useEffect(() => {
        mountCallback();
        return (unmountCallback);
    }, [mountCallback, unmountCallback]);

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
            <TmplHeader data={arg} />
            <Hero src='https://via.placeholder.com/1440x600'/>
            <ImageList>
                <Feed>
                    <ImageVertical src='https://via.placeholder.com/1400x500'/>
                    <Grid>
                        <ImageGrid src='https://via.placeholder.com/685x450'/>
                        <ImageGrid src='https://via.placeholder.com/685x450'/>
                    </Grid>
                    <Grid>
                        <EmptyGridCase/>
                        <ImageGrid src='https://via.placeholder.com/685x450'/>
                    </Grid>
                </Feed>
                <Hero src='https://via.placeholder.com/1440x600'/>
                <ImageFinal src='https://via.placeholder.com/1080x850'/>
            </ImageList>
            <Content>
                <NextProject>{nextProjectCatch} - <Link to={"/projects/" + NextID}>{nextProjectName}</Link></NextProject>
            </Content>
        </>
    )
}

export default TmplOne
