import styled from 'styled-components';
import COLORS from '../colors';

import config from '../config';

const Content = styled.div`
    padding: 0 25px;
    margin-bottom: 210px;
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`

const StyledLine = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 25px;
`

const StyledContainerLeft = styled.div`
    display: flex;
    justify-content: space-between;
    flex-basis: 50%;
    flex-grow: 1;
`

const StyledContainerRight = styled.div`
    display: flex;
    justify-content: space-between;
    flex-basis: 50%;
    flex-grow: 1;
`

const StyledText = styled.div`
    font-size: 36px;
    padding: 25px 0px;
`

const StyledTitle = styled.span`
    font-size: 24px;
    margin-bottom: 10px;
`

const StyledSeparator = styled.span`
    border: 1px solid #000000;
`

const StyledToolsSkillsContainer = styled.div`
    display: flex;
    gap: 25px;
`

const StyledToolsSkillsContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    flex-grow: 1;
`

const StyledToolsSkillsContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    flex-grow: 1;
`

const StyledHead = styled.div`
    display: flex;
    margin-bottom: 100px;
`
const StyledHeadTitle = styled.div`
    font-size: 72px;
    line-height: 86px;
    margin-bottom: 85px;
    font-weight: bold;
    color: ${props => props.theme.mainColor}
`
const StyledSubtitle = styled.div`
    font-size: 18px;
`

const StyledHeadLeft = styled.div`
    flex-basis: 60%;
`

const StyledHeadRight = styled.div``

const StyledHeadDescription = styled.p`
    margin-bottom: 40px;
    width: 328px;
`

const AboutPage = () => {
    return (
        <Content>
            <StyledHead>
                <StyledHeadLeft>
                    <StyledHeadTitle>SHORTLY ABOUT<br/>MY SELF</StyledHeadTitle>
                    <StyledSubtitle>always open for new project!</StyledSubtitle>
                </StyledHeadLeft>
                <StyledHeadRight>
                    <StyledHeadDescription>
                        I attach great importance to the process of experimentation. It allows us to discover, compare and define the optimal solutions for our clients' needs.
                    </StyledHeadDescription>
                    <StyledHeadDescription>
                        Always on the lookout for new mediums and technologies, I make the most of every opportunity they offer to design projects that make sense.
                    </StyledHeadDescription>
                    <StyledHeadDescription>
                        and for basic information, i'm a 22 year old designer experimenting with all aspects of design, from website, 3d, motion, identity to photography.
                    </StyledHeadDescription>
                </StyledHeadRight>
            </StyledHead>
            <StyledContainer>
                <StyledTitle>professional experiences</StyledTitle>
                <StyledSeparator />
                {config.about.professional_experiences.map((experience, index) => {
                    return (
                        <>
                            <StyledLine>
                                <StyledContainerLeft>
                                    <StyledText>{experience.job}</StyledText>
                                    <StyledText>{experience.date}</StyledText>
                                </StyledContainerLeft>
                                <StyledContainerRight>
                                    <StyledText>{experience.company}</StyledText>
                                    <StyledText>{experience.location}</StyledText>
                                </StyledContainerRight>
                            </StyledLine>
                            <StyledSeparator />
                        </>
                    )
                })}
            </StyledContainer>

            <StyledContainer>
                <StyledTitle>education</StyledTitle>
                <StyledSeparator />
                {config.about.education.map((education, index) => {
                    return (
                        <>
                            <StyledLine>
                                <StyledContainerLeft>
                                    <StyledText>{education.title}</StyledText>
                                </StyledContainerLeft>
                                <StyledContainerRight>
                                    <StyledText>{education.location}</StyledText>
                                    <StyledText>{education.date}</StyledText>
                                </StyledContainerRight>
                            </StyledLine>
                            <StyledSeparator />
                        </>
                    )
                })}
            </StyledContainer>

            <StyledToolsSkillsContainer>
                <StyledToolsSkillsContainerLeft>
                    <StyledTitle>tools</StyledTitle>
                    <StyledSeparator />
                    {config.about.tools.map((tool, index) => {
                        return (
                            <>
                                <StyledText key={index}>{tool}</StyledText>
                                <StyledSeparator />
                            </>
                        )
                    })}
                </StyledToolsSkillsContainerLeft>
                <StyledToolsSkillsContainerRight>
                    <StyledTitle>skills</StyledTitle>
                    <StyledSeparator />
                    {config.about.skills.map((skill, index) => {
                        return (
                            <>
                                <StyledText key={index}>{skill}</StyledText>
                                <StyledSeparator />
                            </>
                        )
                    })}
                </StyledToolsSkillsContainerRight>
            </StyledToolsSkillsContainer>
        </Content>
    );
}

export default AboutPage;
