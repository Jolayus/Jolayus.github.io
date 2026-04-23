import type { CSSProperties } from "react";
import profilePhotoAlt from "../../assets/portfolio/my_photo_3.jpg";
import { aboutHighlights, education, profile } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";

function About() {
  return (
    <div className="about-grid">
      <div className="about-visual reveal" style={{ "--delay": "0.05s" } as CSSProperties}>
        <img src={profilePhotoAlt} alt={`${profile.fullName} profile`} loading="lazy" />
      </div>

      <div className="about-content">
        <SectionHeader
          eyebrow="Get To Know More"
          title="About Me"
          description="Detail-oriented developer who enjoys building maintainable, user-focused products with collaborative teams."
        />

        <ul className="about-highlights">
          {aboutHighlights.map((highlight, index) => (
            <li
              className="reveal"
              key={highlight}
              style={{ "--delay": `${0.1 + index * 0.08}s` } as CSSProperties}
            >
              {highlight}
            </li>
          ))}
        </ul>

        <div className="education-cards">
          {education.map((entry, index) => (
            <article
              className="education-card reveal"
              key={entry.institution}
              style={{ "--delay": `${0.2 + index * 0.1}s` } as CSSProperties}
            >
              <p className="education-period">{entry.period}</p>
              <h3>{entry.institution}</h3>
              <p>{entry.degree}</p>
              <p className="education-location">{entry.location}</p>
              {entry.notes?.length ? (
                <ul>
                  {entry.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
