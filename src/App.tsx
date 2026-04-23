import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import { profile } from "./data/profile";
import "./styles/app.scss";

const navigationItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const THEME_STORAGE_KEY = "portfolio-theme";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const scrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app-shell">
      <Helmet>
        <title>{`${profile.fullName} | Frontend Developer Portfolio`}</title>
        <meta
          name="description"
          content="Frontend Developer portfolio of Julius Odref Czar Cabangon featuring React, Vue.js, and TypeScript projects and experience."
        />
      </Helmet>

      <div aria-hidden className="ambient ambient-one" />
      <div aria-hidden className="ambient ambient-two" />
      <div aria-hidden className="ambient ambient-three" />

      <Navbar
        brand={profile.shortName}
        items={navigationItems}
        onNavigate={scrollTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <section className="section section-home" id="home">
          <div className="container">
            <Hero onNavigate={scrollTo} />
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <About />
          </div>
        </section>

        <section className="section section-soft" id="experience">
          <div className="container">
            <Experience />
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <Projects />
          </div>
        </section>

        <section className="section section-soft" id="contact">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
