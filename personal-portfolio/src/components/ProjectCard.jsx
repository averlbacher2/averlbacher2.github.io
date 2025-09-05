import '../styles/main.css';
import { useState } from 'react';

export default function ProjectCard({
    projectId,
    name,
    startDate,
    endDate,
    descriptionSnippet,
    descriptionFull,
    skills,
    projectImage
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="project-card" key={projectId}>
            <div className="project-card-collapsed"
                onClick={() => setIsExpanded(!isExpanded)}>
                <h2>{name}</h2>
                <div className="project-dates">{startDate} | {endDate}</div>
                <p className="project-description">{descriptionSnippet}</p>
            </div>
            {/* Render all skill tags provided */}
            <div className="skills-container">
                {skills.map((skill, index) => {
                    return (
                        <span key={index} className="project-skill-tag">
                            {skill}
                        </span>
                    );
                })}
            </div>
            {isExpanded &&
                <div>
                    {/* Render full description text */}
                    <div className="project-description">
                        {descriptionFull.map((line, index) => {
                            return (
                                <ul>
                                    <li key={index} className="project-description-full">{line}</li>
                                </ul>
                            );
                        })}
                    </div>
                    {/* Only render image if there is one */}
                    {projectImage && (
                        <div>
                            <img src={projectImage} alt={`Image for ${name}`} className="project-image" />
                        </div>
                    )}
                </div>
            }
            <button class="github-link">View on GitHub</button>
        </div>
    );
}