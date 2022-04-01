import { useParams } from 'react-router-dom';

import Templates from '../components/Project';

import config from '../config';

const ProjectsPage = () => {
    const { projectId } = useParams();
    const { templateNumber, ...data } = config.selectedWorks[projectId]
    return Templates[`${templateNumber}`]({ ...data });
}

export default ProjectsPage;
