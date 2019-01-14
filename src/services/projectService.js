import projectList from './projectList.js'

const projects = projectList.gProjs;

function getProjects() {
  return projects
}

function getProjectById(projectId) {
  const project = projects.find(project => project._id === projectId);
  return project;
}
function filterProjects() {
  return 'hi'
}
export default {
  getProjects,
  getProjectById,
  filterProjects
}


