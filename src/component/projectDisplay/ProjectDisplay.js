import React, { Component } from "react";
import { connect } from "react-redux" 
import ProjectCard from "../projectCard/ProjectCard";


export class ProjectDisplay extends Component{

    combineProjectsPalette = () => {
        const { projectPalettes, projects } = this.props
        let array = projects.map(projects => {
            return {
                name: projects.name,
                id: projects.id,
                palette: projectPalettes.filter(palette => {
                    return palette.projectsId === projects.id
                })
            }
        })
        return array
    }

    render(){
        let display;
        if(this.props.toggleProjectDisplay){
            display = {
                width: "30vw"
            }
        }else{
            display = {
                width: "1px"
            }
        }

        let combineProjects = this.combineProjectsPalette()
        
        let projects = combineProjects.map(project => {
            return (
                <ProjectCard key={project.id} project={project}/>
            )
        })
        return(
            <section style={display} className="project-section">
                <div className="overflow">
                    <div className="project-title">
                        <div>
                            <h2>Projects</h2>
                        </div>
                    </div>
                    <ul>
                        {
                            projects
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

export const mapStateToProps = (state) => ({
    toggleProjectDisplay: state.toggleProjectDisplay,
    projects: state.projects,
    projectPalettes: state.projectPalettes
})

export default connect(mapStateToProps)(ProjectDisplay)