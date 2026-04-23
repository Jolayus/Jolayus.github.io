import type { CSSProperties } from "react";
import logoImage from "../../assets/portfolio/logo.png";

type NavItem = {
  id: string;
  label: string;
};

type NavbarProps = {
  brand: string;
  items: NavItem[];
  onNavigate: (sectionId: string) => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

function Navbar({ brand, items, onNavigate, theme, onToggleTheme }: NavbarProps) {
  const nextTheme = theme === "light" ? "dark" : "light";
  const nextThemeLabel = `Switch to ${nextTheme} mode`;

  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-shell reveal" style={{ "--delay": "0.05s" } as CSSProperties}>
          <button className="brand-mark" onClick={() => onNavigate("home")} type="button">
            <span className="brand-logo" aria-hidden>
              <img src={logoImage} alt="" loading="eager" />
            </span>
            <span className="brand-text">{brand}</span>
          </button>
          <div className="nav-actions">
            <nav aria-label="Primary">
              <ul className="nav-list">
                {items.map((item) => (
                  <li key={item.id}>
                    <button type="button" onClick={() => onNavigate(item.id)}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              aria-label={nextThemeLabel}
              className="theme-toggle"
              onClick={onToggleTheme}
              title={nextThemeLabel}
              type="button"
            >
              <span aria-hidden className="theme-toggle__icon">
                {theme === "light" ? (
                  <svg viewBox="0 0 24 24" fill="none" role="presentation">
                    <path
                      d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" role="presentation">
                    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                    <path
                      d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                )}
              </span>
              <span className="sr-only">{nextThemeLabel}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
