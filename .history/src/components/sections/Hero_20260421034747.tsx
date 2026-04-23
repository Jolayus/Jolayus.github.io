import type { CSSProperties } from "react";
import heroPhoto from "../../assets/portfolio/my_photo.jpg";
import { profile } from "../../data/profile";

type HeroProps = {
  onNavigate: (sectionId: string) => void;
};

function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="hero-grid">
      <div className="hero-photo-wrap reveal" style={{ "--delay": "0.1s" } as CSSProperties}>
        <img src={heroPhoto} alt={`${profile.fullName} portrait`} loading="eager" />
      </div>

      <div className="hero-content">
        <p className="hero-greeting reveal" style={{ "--delay": "0.15s" } as CSSProperties}>
          Hello, I am
        </p>
        <h1 className="reveal" style={{ "--delay": "0.2s" } as CSSProperties}>
          Julius Odref Czar
          <br />
          Cabangon
        </h1>
        <p className="hero-role reveal" style={{ "--delay": "0.25s" } as CSSProperties}>
          {profile.title} focused on React, Vue.js, and TypeScript
        </p>
        <p className="hero-summary reveal" style={{ "--delay": "0.3s" } as CSSProperties}>
          {profile.summary}
        </p>

        <div className="hero-actions reveal" style={{ "--delay": "0.35s" } as CSSProperties}>
          <a className="button button--primary" href={profile.resumeFile} download>
            Download Resume
          </a>
          <button className="button button--ghost" onClick={() => onNavigate("contact")} type="button">
            Contact Me
          </button>
        </div>

        <div className="hero-links reveal" style={{ "--delay": "0.4s" } as CSSProperties}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.legacyCvFile} download>
            Legacy CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
