import React, { Component } from 'react';
import ProjectService from '../../services/projectService.js'
import { Link } from 'react-router-dom';
import './ProjectDetails.css'

class ProjectDetails extends Component {
  state = {
    currProj: {}
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillMount() {
    const projectId = this.props.match.params._id;
    this.setState({
      currProj: ProjectService.getProjectById(projectId)

    })
  }

  render() {
    let project = this.state.currProj;
    const labels = this.state.currProj.labels.map((label, idx) => {
      return (
        <li key={idx} className="label list-item">
          {label}
        </li>
      )
    })

    return (
      <div className="project-details flex flex-colom align-items-center">
        <h2> <Link className="back" to={'/'}>
          <i className="fa fa-arrow-left"></i>
        </Link> {project.name} </h2>
        <a href={project.urlWeb}>
          <img className="bigImg" src={require('../../assets/images/imagesOnWeb/' + project.appImg + '.jpg')} alt="img" />
        </a>
        <h3>Short Description:</h3>
        <p>
          {project.description}
        </p>
        <h3>Used Methodes:</h3>
        <ul>
          {labels}
        </ul>
        <div className="link-buttons flex justify-space-between">
          <button><a href={project.urlWeb}>Watch Site</a></button>
          <button><a href={project.urlCode}>Code</a></button>
        </div>
      </div>
    )
  }
}

export default ProjectDetails;
