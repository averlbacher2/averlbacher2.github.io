import ExperienceCard from "../components/ExperienceCard";

export default function ExperienceCardList({ experiences }) {
    return (
        experiences.map((experience, index) => {
            return (
                <ExperienceCard 
                    key={index}
                    expTitle={experience.title}
                    expStart={experience.startDate}
                    expEnd={experience.endDate}
                    expDescription={experience.description}
                />
            )
        })
    )
}