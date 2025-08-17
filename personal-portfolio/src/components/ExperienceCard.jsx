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
            <div className="justify-between-dates">
                {expStart && (
                    <p>{expStart}</p>
                )}
                {expEnd && (
                    <p>{expEnd}</p>
                )}
            </div>
            <p>{expDescription}</p>
        </div>
    )
}