// =============================================================
// ConditionSearch — the hero input.
// Big, loud, share-first. This is the screenshot moment of v2.
// =============================================================
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchConditions } from '../data/conditions';

export default function ConditionSearch({ autoFocus = false, size = 'hero' }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const wrapRef = useRef(null);

  const results = searchConditions(q);

  useEffect(() => {
    if (autoFocus && inputRef.current) inputRef.current.focus();
  }, [autoFocus]);

  useEffect(() => {
    function onClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function handleSelect(condition) {
    setOpen(false);
    setQ('');
    navigate(`/condition/${condition.id}`);
  }

  function handleKey(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[activeIdx]) handleSelect(results[activeIdx]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div className={`search-wrap search-${size}`} ref={wrapRef}>
      <div className="search-box">
        <span className="search-prompt mono">→</span>
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          value={q}
          placeholder={size === 'hero' ? 'epilepsy. chronic pain. ptsd. anxiety…' : 'search conditions…'}
          onChange={(e) => { setQ(e.target.value); setOpen(true); setActiveIdx(0); }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKey}
          aria-label="Search conditions"
          autoComplete="off"
          spellCheck="false"
        />
      </div>

      {open && results.length > 0 && (
        <div className="search-results">
          <div className="search-results-meta mono">
            {results.length} match{results.length === 1 ? '' : 'es'}  ·  ↵ to open
          </div>
          {results.map((c, idx) => (
            <button
              key={c.id}
              className={`search-result ${idx === activeIdx ? 'active' : ''}`}
              onClick={() => handleSelect(c)}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <div className="search-result-name">{c.name}</div>
              <div className="search-result-meta mono">{c.category}</div>
            </button>
          ))}
        </div>
      )}

      {open && q.length >= 2 && results.length === 0 && (
        <div className="search-results">
          <div className="search-empty">
            <div className="search-empty-title">No match yet.</div>
            <div className="search-empty-body">
              VIJAYA v2 launches with 30 conditions. More added weekly. Try: <em>epilepsy</em>, <em>chronic pain</em>, <em>PTSD</em>, <em>MS</em>, <em>chemotherapy</em>.
            </div>
          </div>
        </div>
      )}

      <style>{`
        .search-wrap { position: relative; width: 100%; }

        .search-box {
          display: flex;
          align-items: baseline;
          gap: 18px;
          border-bottom: 2px solid var(--ink);
          padding: 18px 4px;
          transition: border-color 0.3s var(--ease-out);
        }
        .search-wrap:focus-within .search-box {
          border-color: var(--saffron);
        }

        .search-prompt {
          color: var(--saffron);
          font-size: 28px;
          font-weight: 700;
        }
        .search-hero .search-prompt { font-size: 48px; line-height: 1; }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-family: var(--serif);
          font-variation-settings: "opsz" 144, "SOFT" 0;
          letter-spacing: -0.02em;
        }
        .search-hero .search-input {
          font-size: clamp(32px, 6vw, 64px);
          font-weight: 500;
          line-height: 1.05;
        }
        .search-compact .search-input {
          font-size: 24px;
          font-weight: 400;
        }
        .search-input::placeholder {
          color: var(--ink-quiet);
          font-style: italic;
          opacity: 0.7;
        }

        .search-results {
          position: absolute;
          left: 0;
          right: 0;
          top: calc(100% + 12px);
          background: var(--paper);
          border: 1.5px solid var(--ink);
          box-shadow: 8px 8px 0 var(--ink);
          max-height: 520px;
          overflow-y: auto;
          z-index: 50;
        }

        .search-results-meta {
          padding: 14px 22px;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-quiet);
          border-bottom: 1px solid var(--line);
          background: var(--bone-soft);
        }

        .search-result {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          padding: 18px 22px;
          text-align: left;
          border-bottom: 1px solid var(--line);
          transition: background 0.12s var(--ease-out);
        }
        .search-result:last-child { border-bottom: none; }
        .search-result.active,
        .search-result:hover {
          background: var(--ink);
          color: var(--bone);
        }
        .search-result.active .search-result-meta,
        .search-result:hover .search-result-meta {
          color: var(--saffron);
        }

        .search-result-name {
          font-size: 22px;
          font-weight: 500;
          font-variation-settings: "opsz" 36, "SOFT" 30;
          letter-spacing: -0.01em;
        }
        .search-result-meta {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-quiet);
          white-space: nowrap;
        }

        .search-empty {
          padding: 28px 22px;
        }
        .search-empty-title {
          font-family: var(--serif);
          font-size: 22px;
          margin-bottom: 8px;
        }
        .search-empty-body {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          color: var(--ink-quiet);
          line-height: 1.6;
        }
        .search-empty-body em {
          color: var(--saffron);
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
