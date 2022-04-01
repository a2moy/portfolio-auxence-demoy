import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

import {
    Content,
    StyledContainer,
    StyledLine,
    StyledText,
    StyledTitle,
    StyledSeparator,
    StyledHead,
    StyledHeadTitle,
    StyledHeadLeft,
    StyledHeadRight,
    StyledHeadDescription,
} from '../components/Styled';

import config from '../config';

const StyledSpoiler = styled(StyledText)`
    background-color: ${props => props.theme.mainColor};
    width: 25vw;

    &:hover {
        cursor: pointer;
    }
`

const StyledButton = styled(Link)`
    padding-right: 25px;
    margin: 25px 0px;
    font-size: 36px;
    text-decoration: none;
    color: #040205;
`

const StyledImage = styled.img`
    width: 25vw;
    margin: 25px 0px;
    &:hover {
        cursor: pointer;
    }
`

const StyledTextProject = styled(StyledText)`
    flex: 1;
`

const StyledDescription = styled.div`
    font-size: 18px;
    width: 45vw;
    padding-bottom: 25px;
    position: relative;
`

const ProjectsPage = () => {
    const [isOpen, setIsOpen] = useState(null);
    const navigate = useNavigate()

    const onEnter = (index) => setIsOpen(index)

    const onLeave = () => setIsOpen(null)

    return (
        <Content>
            <StyledHead>
                <StyledHeadLeft>
                    <StyledHeadTitle>SELECTED PROJECTS</StyledHeadTitle>
                </StyledHeadLeft>
                <StyledHeadRight>
                    <StyledHeadDescription>
                        details and feelings focus, there is a selection of project i've done across my experiences with brand and people.
                    </StyledHeadDescription>
                    {/* TODO: add link to 'more projects here */}
                    <StyledHeadDescription>
                        more project here
                    </StyledHeadDescription>
                </StyledHeadRight>
            </StyledHead>
            <StyledContainer>
                <StyledTitle>selected works</StyledTitle>
                <StyledSeparator />
                {config.selectedWorks.map((projects, index) => {
                    return (
                        <>
                            <StyledLine>
                                <StyledTextProject>{projects.name}</StyledTextProject>
                                <StyledTextProject>{projects.year}</StyledTextProject>
                                <StyledTextProject>{projects.type}</StyledTextProject>
                                {isOpen === index ? (
                                    <StyledImage
                                        src={projects.thumbnail}
                                        onMouseLeave={onLeave}
                                        onClick={() => navigate(`${index}`)}
                                    />
                                ) : (
                                    <StyledSpoiler
                                        onMouseEnter={() => onEnter(index)}
                                    />
                                )}
                                <StyledButton to={`${index}`}>view</StyledButton>
                            </StyledLine>
                            {isOpen === index && (
                                <StyledDescription>{projects.description}</StyledDescription>
                            )}
                            <StyledSeparator />
                        </>
                    )
                })}
            </StyledContainer>
        </Content >
    );
}

export default ProjectsPage;
