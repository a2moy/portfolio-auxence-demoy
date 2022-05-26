import styled from 'styled-components'
import { useEffect } from 'react';
import TitleAnimator from '../components/TitleAnimator';

import {
    Content,
    Array,
    ArrayLine,
    ArrayLineSeparator,
    ArrayTitle,
    IntroContainer,
    PageTitle,
    Paragraph,
} from '../components/Styled';

import config from '../config';

const Split = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ArrayLineSplit = styled(ArrayLine)`
      gap: 25px;
`

const AboutPage = (props) => {

    const mountCallback = props.mountCallback;
    const unmountCallback = props.unmountCallback;

    useEffect(() => {
        mountCallback();
        return unmountCallback;
    }, [mountCallback, unmountCallback]);

    return (
        <Content>
            <IntroContainer className='columns-container'>
                <PageTitle className='column-1'>
                    <TitleAnimator texte="SHORTLY ABOUT"/>
                    <TitleAnimator texte="MY SELF"/>
                </PageTitle>
                <Paragraph className='column-2'>
                    <p>
                        I attach great importance to the process of experimentation. It allows us to discover, compare and define the optimal solutions for our clients' needs.
                    </p>
                    <p>
                        Always on the lookout for new mediums and technologies, I make the most of every opportunity they offer to design projects that make sense.
                    </p>
                    <p>
                        And for basic information, i'm a 22 year old designer experimenting with all aspects of design, from website, 3d, motion, identity to photography.
                    </p>
                </Paragraph>
                <span className='column-3'/>
            </IntroContainer>
            <Array>
                <ArrayTitle>professional experiences</ArrayTitle>
                <ArrayLineSeparator />
                    {config.about.professional_experiences.map((experience, index) => {
                        return (
                        <div key={index}>
                            <ArrayLineSplit className='columns-container'>
                                <Split>
                                    <p>{experience.job}</p>
                                    <p>{experience.date}</p>
                                </Split>
                                <Split>
                                    <p>{experience.company}</p>
                                    <p>{experience.location}</p>
                                </Split>
                            </ArrayLineSplit>
                            <ArrayLineSeparator />
                        </div>
                    )})}
            </Array>
            <Array>
                <ArrayTitle>education</ArrayTitle>
                <ArrayLineSeparator/>
                {config.about.education.map((education, index) => {
                    return (
                        <div key={index}>
                            <ArrayLineSplit className='columns-container'>
                                <Split>
                                    <p>{education.title}</p>
                                </Split>
                                <Split>
                                    <p>{education.location}</p>
                                    <p>{education.date}</p>
                                </Split>
                            </ArrayLineSplit>
                            <ArrayLineSeparator/>
                        </div>
                    )
                })}
            </Array>
            <ArrayLineSplit className='columns-container'>
                <Split>
                    <Array>
                        <ArrayTitle>tools</ArrayTitle>
                        <ArrayLineSeparator/>
                        {config.about.tools.map((tool, index) => {
                            return (
                            <div key={index}>
                                <ArrayLine key={index}>{tool}</ArrayLine>
                                <ArrayLineSeparator />
                            </div>
                        )})}
                    </Array>
                </Split>
                <Split>
                    <Array>
                        <ArrayTitle>skills</ArrayTitle>
                        <ArrayLineSeparator/>
                        {config.about.skills.map((skill, index) => {
                            return (
                            <div key={index}>
                                <ArrayLine key={index}>{skill}</ArrayLine>
                                <ArrayLineSeparator />
                            </div>
                        )})}
                    </Array>
                </Split>
            </ArrayLineSplit>
        </Content >
    );
}

export default AboutPage;