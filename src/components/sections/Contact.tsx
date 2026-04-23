import type { CSSProperties } from "react";
import { profile } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";

function Contact() {
  return (
    <div className="contact-wrap">
      <SectionHeader
        eyebrow="Get In Touch"
        title="Contact Me"
        description="I am open to frontend development opportunities, collaboration, and project discussions."
      />

      <div className="contact-grid">
        <article className="contact-card reveal" style={{ "--delay": "0.05s" } as CSSProperties}>
          <h3>Direct Contact</h3>
          <ul>
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href="tel:+639474626020">{profile.phone}</a>
            </li>
            <li>
              <span>Location</span>
              <p>{profile.location}</p>
            </li>
          </ul>
        </article>

        <article className="contact-card reveal" style={{ "--delay": "0.14s" } as CSSProperties}>
          <h3>Professional Links</h3>
          <div className="contact-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.resumeFile} download>
              Resume PDF
            </a>
          </div>
          <p className="availability-note">
            Available for frontend roles and freelance collaboration.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Contact;
