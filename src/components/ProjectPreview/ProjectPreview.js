import React from 'react';

import './ProjectPreview.css'

const ProjectPreview = (props) => {
    const project = props.project;
    return (
        <div className="project-preview item-preview" >
            <div className="flex justify-space-between">
                <ul className='margin-zero padding-zero'>
                    <li className="list-item title">
                        {project.name}
                    </li>
                    <li className="list-item">
                        <img src={require('../../assets/images/imagesOnWeb/' + project.appImg + '.jpg')} alt="img" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProjectPreview;
