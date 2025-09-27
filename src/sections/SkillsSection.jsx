export default function SkillsContainer({ skills }) {
    // Group skills by category
    const grouped = skills.reduce((acc, s) => {
        const cat = s.category || 'uncategorized';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(s);
        return acc;
    }, {});

    const categories = Object.keys(grouped);

    return (
        <div className="skills-section-container">
            <div className="skills-grid">
                {categories.map((cat) => (
                    <div key={cat} className="skill-category">
                        <h3>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>
                        <div className="skills-list">
                            {grouped[cat].map((skill) => (
                                <div key={skill.id} className="skill-tag">
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}