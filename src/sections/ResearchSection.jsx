import researchData from "../data/researchData";

export default function ResearchSection() {
    return (
        <section
            id="research"
            className="research-section"
            aria-labelledby="research-heading"
        >
            <div className="research-container">
                {researchData.map((research) => {
                    const [focus, ...contributions] =
                        research.descriptionFull;

                    return (
                        <article
                            key={research.id}
                            className="research-card"
                            aria-labelledby={`research-title-${research.id}`}
                        >
                            <h3
                                id={`research-title-${research.id}`}
                                className="research-card-title"
                            >
                                {research.name}
                            </h3>

                            <div className="research-card-details">
                                <p className="research-card-organization">
                                    {research.organization}
                                </p>

                                <div className="research-card-meta">
                                    <span>{research.date}</span>
                                    <span>{research.location}</span>
                                </div>
                            </div>

                            <div className="research-card-body">
                                <div className="research-card-focus">
                                    <h4 className="research-card-label">
                                        Research focus
                                    </h4>

                                    <p className="research-card-description">
                                        {focus}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="research-card-label">
                                        My work
                                    </h4>

                                    <ul className="research-card-contributions">
                                        {contributions.map((description) => (
                                            <li key={description}>
                                                {description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}