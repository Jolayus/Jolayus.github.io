import type { CSSProperties } from "react";
import { experienceRoles, skillGroups } from "../../data/experience";
import SectionHeader from "../ui/SectionHeader";

function Experience() {
  return (
    <div className="experience-wrap">
      <SectionHeader
        eyebrow="Explore My"
        title="Experience"
        description="Hands-on frontend development experience spanning internship work and ongoing production projects."
        align="center"
      />

      <div className="timeline">
        {experienceRoles.map((role, index) => (
          <article
            className="timeline-card reveal"
            key={`${role.company}-${role.title}`}
            style={{ "--delay": `${0.05 + index * 0.12}s` } as CSSProperties}
          >
            <div className="timeline-header">
              <div>
                <p className="timeline-title">{role.title}</p>
                <h3>{role.company}</h3>
              </div>
              <div className="timeline-meta">
                <p>{role.setup}</p>
                <p>{role.period}</p>
              </div>
            </div>
            <p>{role.summary}</p>
            <ul>
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article
            className="skill-card reveal"
            key={group.category}
            style={{ "--delay": `${0.2 + index * 0.08}s` } as CSSProperties}
          >
            <h3>{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Experience;
