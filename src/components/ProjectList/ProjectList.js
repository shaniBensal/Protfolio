import React from 'react';
import ProjectPreview from '../ProjectPreview/ProjectPreview'
import './ProjectList.css'
import { Link } from 'react-router-dom';
//280

const ProjectList = (props) => {
    const projectPreview = props.projects.map(project => {
        return (
            <li key={project._id} className="list-item">
                <Link to={`/ProjectDetails/${project._id}`}>
                    <ProjectPreview project={project} />
                </Link>
            </li>
        )
    });


    return (
        <div className="project-list">
            <ul className="flex flex-wrap justify-center">
                {projectPreview}
            </ul>
        </div>
    );
}

export default ProjectList;