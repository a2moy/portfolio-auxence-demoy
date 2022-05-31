import { useParams } from 'react-router-dom';

import Templates from '../components/Project';

import config from '../config';

const ProjectsPage = (props) => {
    const { projectId } = useParams();

    if (parseInt(projectId) >= config.projects.length) {
        window.location.href = "/404";
    }

    const { templateNumber, ...data } = config.projects[projectId]
    return Templates[`${templateNumber}`]({ ...data, props});
}

export default ProjectsPage;
