import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData"; 

export default function ProjectsContainer({ projects }) {
    
    return (
        <div className="projects-container">
            {projects.map((project)=> {
                return (
                    <ProjectCard 
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        startDate={project.startDate}
                        endDate={project.endDate}
                        descriptionSnippet={project.descriptionSnippet}
                        descriptionFull={project.descriptionFull}
                        skills={project.skills}
                        projectImage={project.projectImage}
                    />
                );
            })}
        </div>
    )
}