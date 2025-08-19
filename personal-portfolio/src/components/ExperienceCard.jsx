import "../styles/main.css";
import React from "react";

export default function ExperienceCard({
    expId,
  expTitle,
  expCompany,
  expStart,
  expEnd,
  expDescription,
}) {
  return (
    <div className="experience-card" key={expId}>
      <h2>{expTitle}</h2>
      <div className="experience-card-details">
        <div className="experience-card-company">{expCompany}</div>
        <div className="experience-card-dates">
            {expStart && <p>{expStart}</p>}
            <p>--</p>
            {expEnd && <p>{expEnd}</p>}
        </div>
      </div>
      <ul>
        {expDescription.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
