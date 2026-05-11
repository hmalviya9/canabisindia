// =============================================================
// VIJAYA v2 — localStorage wrapper
// Dashboard data is client-side only. Honest about that.
// =============================================================

const KEY = 'vijaya:v2';

function read() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : { bookmarks: [], archetype: null, readingProgress: {} };
  } catch {
    return { bookmarks: [], archetype: null, readingProgress: {} };
  }
}

function write(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('VIJAYA: storage write failed', e);
  }
}

export function getBookmarks() {
  return read().bookmarks || [];
}

export function toggleBookmark(conditionId) {
  const data = read();
  const idx = data.bookmarks.indexOf(conditionId);
  if (idx === -1) {
    data.bookmarks.push(conditionId);
  } else {
    data.bookmarks.splice(idx, 1);
  }
  write(data);
  return data.bookmarks;
}

export function isBookmarked(conditionId) {
  return read().bookmarks.includes(conditionId);
}

export function getArchetype() {
  return read().archetype;
}

export function setArchetype(archetype) {
  const data = read();
  data.archetype = archetype;
  write(data);
}

export function getReadingProgress() {
  return read().readingProgress || {};
}

export function markRead(itemId) {
  const data = read();
  if (!data.readingProgress) data.readingProgress = {};
  data.readingProgress[itemId] = Date.now();
  write(data);
}

export function clearAll() {
  try {
    localStorage.removeItem(KEY);
  } catch {}
}
