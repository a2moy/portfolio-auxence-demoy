import styled from 'styled-components'
import config from '../config';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import {
    Array,
    ArrayTextFirst,
    ArrayText,
    ArrayLineSeparator,
    ArrayTitle,
    Paragraph,
} from './Styled';

const ArrayTextLink = styled.div`
    ${ArrayText};
    text-decoration: none;
`

const ArrayLineColumn1 = styled.div`
    display: flex;
`

const Spoiler = styled.div`
    background-color: ${props => props.theme.mainColor};
    height : 45px;
    width: 100%;
`

const ImageExtended = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
`

const ImageSpoilerContainer = styled.div`
    transform: translateY(calc(-100% + 45px));
    display: flex;
    flex-direction: column;
    transition: 0.5s;
`

const ArrayImageContainer = styled.div`
    overflow: hidden;
    height: 45px;
    transition: 0.5s;
`

const Column1Mask = styled.div`
    height: 45px;
    transition: 0.5s;
    overflow: hidden;
`

const Column1Container = styled.div`
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ArrayLineLink = styled(Link)`
    align-items: flex-start;
    padding: 25px 0px;
    font-size: 36px;
    text-decoration: none;
    @media(max-width: 970px) {
        padding: 0px 0px;
        font-size: 18px;
    }
`

const ArrayLineAnimation = styled(ArrayLineLink)`
    width: 100%;
    &:hover,
    &:focus {
        ${Column1Mask} {
            height: 280px;
        }
        ${ArrayImageContainer} {
            height: 280px;
        }
        ${ImageSpoilerContainer} {
            transform: translateY(0);
        }
        ${ArrayTextLink}  {
            text-decoration: underline;
        }
    };
`

const ProjectInfoMobile = styled.div`
    display: flex;
    margin-bottom: 10px;
    margin-top: 20px;
`

const ColorLineMobile = styled.div`
    width: 100%;
    height: 25px;
    background-color: ${props => props.theme.mainColor};
    margin-bottom: 20px;
`

const ProjectArray = () => {
    const [Width, setWidth] = useState(window.innerWidth);

    const updateDimensions = () => {
        const width = window.innerWidth
        setWidth(width)
    }

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    });

    return (
        <Array>
            <ArrayTitle>selected works</ArrayTitle>
            <ArrayLineSeparator />
            {config.selectedWorks.map((projects, index) => {
                return (
                    Width > 970 ?
                    <div key={index}>
                        <ArrayLineAnimation className='columns-container' to={"/projects/" + index}>
                            <Column1Mask className='column-1'>
                                <Column1Container>
                                    <ArrayLineColumn1>
                                        <ArrayTextFirst>{projects.name}</ArrayTextFirst>
                                        <ArrayText>{projects.year}</ArrayText>
                                        <ArrayText>{projects.type}</ArrayText>
                                    </ArrayLineColumn1>
                                    <Paragraph>
                                        <p>
                                            {projects.description}
                                        </p>
                                    </Paragraph>
                                </Column1Container>
                            </Column1Mask>
                            <ArrayImageContainer className='column-2'>
                                <ImageSpoilerContainer>
                                    <ImageExtended src={projects.thumbnail}/>
                                    <Spoiler/>
                                </ImageSpoilerContainer>
                            </ArrayImageContainer>
                            <div className='column-3'>
                                <ArrayTextLink>view</ArrayTextLink>
                            </div>
                        </ArrayLineAnimation>
                        <ArrayLineSeparator />
                    </div>
                    :
                    <div key={index}>
                        <ArrayLineLink  to={"/projects/" + index}>
                            <ProjectInfoMobile>
                                <ArrayTextFirst>{projects.name}</ArrayTextFirst>
                                <ArrayText>{projects.type}</ArrayText>
                                <ArrayText>view</ArrayText>
                            </ProjectInfoMobile>
                            <ColorLineMobile/>
                        </ArrayLineLink>
                        <ArrayLineSeparator />
                    </div>
                )
            })}
            </Array>
    )
}

export default ProjectArray;