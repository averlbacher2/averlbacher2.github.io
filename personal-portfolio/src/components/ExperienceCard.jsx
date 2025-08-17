import '../styles/main.css';

export default function ExperienceCard({
    expTitle,
    expStart,
    expEnd,
    expDescription
}) {
    return (
        <div className="experience-card">
            <h2>{expTitle}</h2>
            {expStart && (
                <p>{expStart}</p>
            )}
            {expEnd && (
                <p>{expEnd}</p>
            )}
            <p>{expDescription}</p>
        </div>
    )
}