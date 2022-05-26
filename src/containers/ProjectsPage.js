import { useEffect } from 'react'
import ProjectArray from '../components/ProjectArray';

import {
    Content,
    IntroContainer,
    PageTitle,
    Paragraph,
} from '../components/Styled';

const ProjectsPage = (props) => {

    const mountCallback = props.mountCallback;
    const unmountCallback = props.unmountCallback;

    useEffect(() => {
        mountCallback();
        return unmountCallback;
    }, [mountCallback, unmountCallback]);

    return (
        <Content>
            <IntroContainer className='columns-container'>
                <PageTitle className='column-1'>SELECTED <br/> PROJECT</PageTitle>
                <Paragraph className='column-2'>
                    <p>
                        Details and feelings focus, there is a selection of project i&#39;ve done across my experiences with brand and people.
                    </p>
                    <p>
                        More project <a href="https://a2moy.fr/Portfolio_A2_EN.pdf" target="_blank" rel="noreferrer">here</a>
                    </p>
                </Paragraph>
                <span className='column-3'/>
            </IntroContainer>
            <ProjectArray/>
        </Content >
    );
}

export default ProjectsPage;
