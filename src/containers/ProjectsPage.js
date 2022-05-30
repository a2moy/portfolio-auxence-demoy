import { useEffect } from 'react'
import styled from 'styled-components'
import ProjectArray from '../components/ProjectArray';
import TitleAnimator from '../components/TitleAnimator';

import {
    Content,
    IntroContainer,
    PageTitle,
    Paragraph,
} from '../components/Styled';

const ParagraphProjects = styled(Paragraph)`
    @media(max-width: 970px) {
        margin-top: 0px;
    }
`

const IntroContainerProjects = styled(IntroContainer)`
    margin-bottom: 0px;
`

const ProjectsPage = (props) => {

    const mountCallback = props.mountCallback;
    const unmountCallback = props.unmountCallback;

    useEffect(() => {
        mountCallback();
        return unmountCallback;
    }, [mountCallback, unmountCallback]);

    return (
        <Content>
            <IntroContainerProjects className='columns-container'>
                <PageTitle className='column-1'>
                    <TitleAnimator texte="SELECTED"/>
                    <TitleAnimator texte="PROJECT"/>
                </PageTitle>
                <ParagraphProjects className='column-2'>
                    <p>
                        Details and feelings focus, there is a selection of project i&#39;ve done across my experiences with brand and people.
                    </p>
                    <p>
                        More project <a href="https://a2moy.fr/Portfolio_A2_EN.pdf" target="_blank" rel="noreferrer">here</a>
                    </p>
                </ParagraphProjects>
                <span className='column-3'/>
            </IntroContainerProjects>
            <ProjectArray/>
        </Content >
    );
}

export default ProjectsPage;
