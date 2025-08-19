import { useState } from "react";
import experienceData from "../data/experienceData";
import ExperienceCard from "../components/ExperienceCard";


export default function ExperienceTimeline({ experiences }) {
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);
    const selectedExperience = experienceData.find( (exp) => exp.id ===
      selectedExperienceId);
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      <div className="timeline-points">
        {/* Thumbnails here */}
        {experiences.map((experience) => {
          return (
            <div
              key={experience.id}
              className="experience-card"
              onClick={() => setSelectedExperienceId(experience.id)}
            >
              {experience.title}
            </div>
          );
        })}
      </div>
      
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
  );
}
