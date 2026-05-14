// =============================================================
// Nav — masthead. Sticky, minimal, editorial.
// Primary row: brand + 4 main entries + Act CTA.
// Secondary row: deeper pages (Citations, 1894, Practitioners, etc.)
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

const PRIMARY = [
  { to: '/atlas', label: 'Atlas' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/research', label: 'Research' },
  { to: '/ndps', label: 'The Law' },
];

const SECONDARY = [
  { to: '/citations', label: 'Citations' },
  { to: '/hemp-commission', label: '1894 Report' },
  { to: '/practitioners', label: 'Practitioners' },
  { to: '/archetype', label: 'Archetype' },
  { to: '/dashboard', label: 'Saved' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <header className={`nav ${isHome ? 'nav-home' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="VIJAYA home">
          <Leaf />
          <span className="brand-name">VIJAYA</span>
          <span className="brand-vers mono">v3</span>
        </Link>

        <nav className="nav-links primary mono" aria-label="Primary">
          {PRIMARY.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? 'active' : ''}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/petition" className={({ isActive }) => isActive ? 'active petition-link' : 'petition-link'}>
            Act ↗
          </NavLink>
        </nav>
      </div>

      <div className="container sub-row">
        <nav className="nav-links secondary mono" aria-label="Secondary">
          {SECONDARY.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? 'active' : ''}>
              {l.label}
            </NavLink>
          ))}
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
        .brand { display: flex; align-items: baseline; gap: 10px; }
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
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .nav-links.primary { gap: 26px; }
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
        .nav-links .petition-link:hover { color: var(--saffron-deep); }

        .sub-row {
          height: 38px;
          display: flex;
          align-items: center;
          border-top: 1px solid var(--line);
        }
        .nav-links.secondary {
          gap: 22px;
          font-size: 10.5px;
          letter-spacing: 0.16em;
          width: 100%;
          justify-content: flex-end;
        }
        .nav-links.secondary a {
          color: var(--ink-quiet);
          padding: 2px 0;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .nav-links.primary { gap: 18px; font-size: 11px; letter-spacing: 0.12em; }
          .nav-links.secondary { gap: 14px; font-size: 10px; }
        }
        @media (max-width: 820px) {
          .sub-row { display: none; }
          .nav-links.primary a:not(.petition-link) { display: none; }
          .nav-inner { height: 60px; }
          .brand-name { font-size: 22px; }
        }
      `}</style>
    </header>
  );
}
