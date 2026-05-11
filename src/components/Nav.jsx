// =============================================================
// Nav — masthead. Sticky, minimal, editorial.
// =============================================================
import { Link, NavLink, useLocation } from 'react-router-dom';

function Leaf({ size = 22 }) {
  return (
    <svg width={size} height={size * 1.33} viewBox="0 0 72 96" fill="none" aria-hidden="true">
      <g stroke="var(--saffron)" strokeWidth="3.5" strokeLinecap="round">
        <path d="M36 88 L36 40" />
        <path d="M36 40 Q 11 24 11 10" />
        <path d="M36 40 Q 22 20 19 8" />
        <path d="M36 40 Q 30 18 30 6" />
        <path d="M36 40 L 36 8" />
        <path d="M36 40 Q 42 18 42 6" />
        <path d="M36 40 Q 50 20 53 8" />
        <path d="M36 40 Q 61 24 61 10" />
        <circle cx="36" cy="40" r="3.5" fill="var(--saffron)" />
      </g>
    </svg>
  );
}

export default function Nav() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <header className={`nav ${isHome ? 'nav-home' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="VIJAYA home">
          <Leaf />
          <span className="brand-name">VIJAYA</span>
          <span className="brand-vers mono">v2</span>
        </Link>

        <nav className="nav-links mono">
          <NavLink to="/timeline" className={({ isActive }) => isActive ? 'active' : ''}>Timeline</NavLink>
          <NavLink to="/research" className={({ isActive }) => isActive ? 'active' : ''}>Research</NavLink>
          <NavLink to="/directory" className={({ isActive }) => isActive ? 'active' : ''}>Directory</NavLink>
          <NavLink to="/archetype" className={({ isActive }) => isActive ? 'active' : ''}>Archetype</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Saved</NavLink>
          <NavLink to="/petition" className={({ isActive }) => isActive ? 'active petition-link' : 'petition-link'}>
            Act ↗
          </NavLink>
        </nav>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(250, 246, 236, 0.92);
          backdrop-filter: saturate(180%) blur(10px);
          -webkit-backdrop-filter: saturate(180%) blur(10px);
          border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }
        .brand {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .brand svg { transform: translateY(4px); }
        .brand-name {
          font-family: var(--serif);
          font-variation-settings: "opsz" 144, "SOFT" 0;
          font-weight: 600;
          font-size: 26px;
          letter-spacing: 0.04em;
        }
        .brand-vers {
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--ink-quiet);
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 26px;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .nav-links a {
          color: var(--ink-quiet);
          padding: 4px 0;
          border-bottom: 1.5px solid transparent;
          transition: color 0.15s var(--ease-out), border-color 0.15s var(--ease-out);
        }
        .nav-links a:hover { color: var(--ink); }
        .nav-links a.active {
          color: var(--ink);
          border-color: var(--saffron);
        }
        .nav-links .petition-link {
          color: var(--saffron);
          font-weight: 700;
        }
        .nav-links .petition-link:hover {
          color: var(--saffron-deep);
        }

        @media (max-width: 920px) {
          .nav-links { gap: 14px; font-size: 10px; }
        }
        @media (max-width: 720px) {
          .nav-links a:not(.petition-link) { display: none; }
          .nav-inner { height: 60px; }
          .brand-name { font-size: 22px; }
        }
      `}</style>
    </header>
  );
}
