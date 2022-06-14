import styled from 'styled-components'
import { useEffect, useState } from 'react';
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
    CatchLine,
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
    @media(max-width: 970px) {
        flex-direction: row;
        justify-content: space-between;
        font-size: 16px;
    }
`

const Col = styled.p`
    flex: 1;
    text-align: center;
    &:first-of-type {
        flex: 1.25;
        text-align: left;
    }
    &:last-of-type {
        text-align: right;
    }
`


const AboutPage = (props) => {
    const mountCallback = props.mountCallback;
    const unmountCallback = props.unmountCallback;
    const [Width, setWidth] = useState(window.innerWidth);

    const updateDimensions = () => {
        const width = window.innerWidth
        setWidth(width)
    }

    useEffect(() => {
        mountCallback();
        window.addEventListener('resize', updateDimensions);
        return () => {
            unmountCallback();
            window.removeEventListener('resize', updateDimensions);
        };
    }, [mountCallback, unmountCallback]);

    return (
        <Content>
            <IntroContainer className='columns-container'>
                <div className='column-1'>
                    <PageTitle className='column-1'>
                        <TitleAnimator texte="SHORTLY ABOUT"/>
                        <TitleAnimator texte="MY SELF"/>
                    </PageTitle>
                    <CatchLine>
                        Always open for new project!
                    </CatchLine>
                </div>
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
                            Width > 970 ?
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
                        :
                        <div key={index}>
                            <ArrayLineSplit className='columns-container'>
                                <Col>{experience.job}</Col>
                                <Col>{experience.date}</Col>
                                <Col>{experience.company}</Col>
                                <Col>{experience.location}</Col>
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
            { Width > 970 ?
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
            :
            <div>
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
            </div>
            }
        </Content >
    );
}

export default AboutPage;