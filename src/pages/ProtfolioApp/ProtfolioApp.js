import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar'

import ProjectList from '../../components/ProjectList/ProjectList.js';
import Header from '../../components/Header/Header'
import AboutMe from '../../components/AboutMe/AboutMe'
import Footer from '../../components/Footer/Footer'
import ProjectService from '../../services/projectService'

export default class ProtfolioApp extends Component {
    constructor(props) {
        super(props)
        this.aboutRef = React.createRef();
        this.projectsRef = React.createRef();
        this.contactRef = React.createRef();
    }

    state = {
        projectList: [],
        showNavBar: false
    }

    componentDidMount() {
        this.setState({
            projectList: ProjectService.getProjects()
        })
    }

    toggelNavBar = (event) => {
        event.preventDefault();
        this.setState({
            showNavBar: !this.state.showNavBar
        })
    }

    setFilterCategory(categoryId) {
        ProjectService.filterProjects(categoryId);
    }

    handleInputChange = (value) => {
        let filterListBy = { ...this.state.filterBy };
        filterListBy = value;
        this.setState({
            filterBy: filterListBy
        });
    }

    scrollToRef = refToScroll => {
        this.setState({
            showNavBar:false
        })
        switch (refToScroll) {
            case 'about':
                window.scrollTo({
                    top: this.aboutRef.current.offsetTop,
                    behavior: "smooth"
                })
                break;
            case 'projects':
                window.scrollTo({
                    top: this.projectsRef.current.offsetTop,
                    behavior: "smooth"
                })
                break;
            case 'contactMe':
                window.scrollTo({
                    top: this.contactRef.current.offsetTop,
                    behavior: "smooth"
                })
                break;
            default:
                return;
        }
    }

    render() {
        let projectList = this.state.projectList
        return (
            <div className="protfolio-app">
                <NavBar showNavBar={this.state.showNavBar} onSrollToRef={refToScroll => this.scrollToRef(refToScroll)} onShowNav={event => this.toggelNavBar(event)} />
                <Header />
                <div ref={this.aboutRef}></div>
                <AboutMe />
                <div className="flex justify-space-around" ref={this.projectsRef}>
                    <h1>My Projects!</h1>
                </div>
                <ProjectList projects={projectList} />
                <footer ref={this.contactRef}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

