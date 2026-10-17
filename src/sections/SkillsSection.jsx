import { useEffect, useState } from "react";
import strengthsData from "../data/strengthsData";

export default function SkillsContainer({ skills, cliftonStrengths }) {
    // Group skills by category
    const grouped = skills.reduce((acc, s) => {
        const cat = s.category || 'uncategorized';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(s);
        return acc;
    }, {});

    const categories = Object.keys(grouped);

    const [activeStrengthIndex, setActiveStrengthIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const activeStrength = strengthsData[activeStrengthIndex];

    useEffect(() => {
        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (preference.matches) setIsPaused(true);
    }, []);

    useEffect(() => {
        if (isPaused || isHovered || isFocused || strengthsData.length < 2) return;

        const timer = window.setInterval(() => {
            setActiveStrengthIndex((index) => (index + 1) % strengthsData.length);
        }, 5000);

        return () => window.clearInterval(timer);
    }, [isPaused, isHovered, isFocused, activeStrengthIndex]);

    function changeStrength(direction) {
        setActiveStrengthIndex((index) =>
            (index + direction + strengthsData.length) % strengthsData.length
        );
    }

    return (
        <div className="skills-section-container">
            <section
                className="strengths-section"
                aria-labelledby="strengths-heading"
            >
                <h3 id="strengths-heading" className="strengths-heading">
                    CliftonStrengths
                </h3>

                <p className="strengths-intro">
                    The unique combination of strengths that I bring to teams and projects.
                </p>

                <div
                    className="strength-carousel"
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="My top five CliftonStrengths"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onFocusCapture={() => setIsFocused(true)}
                    onBlurCapture={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) {
                            setIsFocused(false);
                        }
                    }}
                >
                    <div
                        className="strength-slide-space"
                        aria-live={isPaused || isHovered || isFocused ? "polite" : "off"}
                        aria-atomic="true"
                    >
                        <div
                            key={activeStrength.id}
                            className="strength-slide"
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${activeStrengthIndex + 1} of ${strengthsData.length}`}
                        >
                            <span className="strength-carousel-number" aria-hidden="true">
                                {String(activeStrengthIndex + 1).padStart(2, "0")}
                            </span>

                            <h4 className="strength-carousel-name">
                                {activeStrength.name}
                            </h4>

                            <p className="strength-carousel-description">
                                {activeStrength.description}
                            </p>
                        </div>
                    </div>

                    <div className="strength-carousel-controls">
                        <button
                            type="button"
                            className="strength-control"
                            onClick={() => changeStrength(-1)}
                            aria-label="Previous strength"
                        >
                            ←
                        </button>

                        <div className="strength-dots">
                            {strengthsData.map((strength, index) => (
                                <button
                                    key={strength.id}
                                    type="button"
                                    className={`strength-dot ${index === activeStrengthIndex ? "is-active" : ""
                                        }`}
                                    onClick={() => setActiveStrengthIndex(index)}
                                    aria-label={`Show ${strength.name}`}
                                    aria-current={
                                        index === activeStrengthIndex ? "true" : undefined
                                    }
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            className="strength-control"
                            onClick={() => changeStrength(1)}
                            aria-label="Next strength"
                        >
                            →
                        </button>

                        <button
                            type="button"
                            className="strength-control strength-pause"
                            onClick={() => setIsPaused((paused) => !paused)}
                            aria-label={
                                isPaused ? "Resume automatic cycling" : "Pause automatic cycling"
                            }
                        >
                            {isPaused ? "Play" : "Pause"}
                        </button>
                    </div>
                </div>
            </section>
            <div className="skills-grid">
                <h3>Other Skills</h3>
                <div></div>
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
        </div >
    );
}