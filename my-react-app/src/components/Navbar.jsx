const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ light, setLight, menuOpen, setMenuOpen }) {
  return (
    <header className="navbar" id="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo" aria-label="Madhan portfolio home">
          <span className="logo-badge">M</span>
          <span>Madhan S.</span>
        </a>

        <nav>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={item.href === "#home" ? "nav-link active" : "nav-link"}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            id="themeBtn"
            aria-label="Toggle theme"
            title="Toggle theme"
            onClick={() => setLight(v => !v)}
          >
            {light ? "☀" : "☾"}
          </button>
          <button
            className="icon-btn menu-btn"
            id="menuBtn"
            aria-label="Toggle menu"
            title="Menu"
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
