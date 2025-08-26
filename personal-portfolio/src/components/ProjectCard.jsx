import '../styles/main.css';

export default function ProjectCard({
    projectId,
    name,
    startDate,
    endDate,
    description,
    skills,
    projectImage
}) {
    return (
        <div className="project-card" key={projectId}>
            <h2>{name}</h2>
            <div className="project-dates">{startDate} &#149; {endDate}</div>
            <p className="project-description">{description}</p>
            {
                skills.map((skill, index) => {
                    <span key={index} className="project-skill-tag">
                        {skill}
                    </span>
                })
            }
            <button>View on GitHub</button>
        </div>
    );
}