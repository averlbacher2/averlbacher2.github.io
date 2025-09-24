import { useState } from "react";
import experienceData from "../data/experienceData";
import ExperienceCard from "../components/ExperienceCard";


export default function ExperiencesContainer({ experiences }) {
  const [selectedExperienceId, setSelectedExperienceId] = useState(1);
    const selectedExperience = experienceData.find( (exp) => exp.id ===
      selectedExperienceId);
  return (
    <div className="experiences-container">
      <div className="experience-thumbnails">
        {/* Thumbnails here */}
        {experiences.map((experience) => {
          return (
            <h3
              key={experience.id}
              className="experience-card experience-card-thumbnail"
              onClick={() => setSelectedExperienceId(experience.id)}
            >
              {experience.title}
            </h3>
          );
        })}
      </div>
      <div className="experiences-expanded">
      {selectedExperience && (
        <ExperienceCard
          key={selectedExperience.id}
          expId={selectedExperience.id}
          expTitle={selectedExperience.title}
          expCompany={selectedExperience.company}
          expStart={selectedExperience.startDate}
          expEnd={selectedExperience.endDate}
          expDescription={selectedExperience.description}
        />
      )}
      </div>
    </div>
  );
}
