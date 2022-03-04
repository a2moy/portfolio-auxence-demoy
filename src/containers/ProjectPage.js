import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Content = styled.div`
    padding: 0 25px;
    height: 500px;
`

const ProjectsPage = () => {
    const { projectId } = useParams();
    return (
        <Content>
            {projectId}
        </Content>
    );
}

export default ProjectsPage;
