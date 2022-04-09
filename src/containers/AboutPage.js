import {
    Content,
    StyledContainer,
    StyledLine,
    StyledContainerLeft,
    StyledContainerRight,
    StyledText,
    StyledTitle,
    StyledSeparator,
    StyledToolsSkillsContainer,
    StyledToolsSkillsContainerLeft,
    StyledToolsSkillsContainerRight,
    StyledHead,
    StyledHeadTitle,
    StyledSubtitle,
    StyledHeadLeft,
    StyledHeadRight,
    StyledHeadDescription,
} from '../components/Styled';

import config from '../config';

const AboutPage = () => {
    return (
        <Content>
            <StyledHead>
                <StyledHeadLeft>
                    <StyledHeadTitle>SHORTLY ABOUT<br />MY SELF</StyledHeadTitle>
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
