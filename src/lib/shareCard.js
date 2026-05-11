// =============================================================
// VIJAYA v2 — Share Card Generator
// Renders condition results as downloadable PNGs.
// IG portrait (1080x1350) + X landscape (1200x675).
// Canvas-based for perfect fidelity, no html2canvas dependency.
// =============================================================

const COLORS = {
  paper: '#FAF6EC',
  ink: '#0E0E0C',
  inkSoft: '#1A1A17',
  inkQuiet: '#4A4A45',
  saffron: '#E8541C',
  saffronDeep: '#B8390F',
  bone: '#F5F0E6',
};

// Wrap text manually (canvas has no native text wrap)
function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    const test = line ? line + ' ' + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// Add film-grain noise across the canvas
function addNoise(ctx, w, h, intensity = 8) {
  const data = ctx.getImageData(0, 0, w, h);
  for (let i = 0; i < data.data.length; i += 4) {
    const n = (Math.random() - 0.5) * intensity;
    data.data[i] = Math.max(0, Math.min(255, data.data[i] + n));
    data.data[i + 1] = Math.max(0, Math.min(255, data.data[i + 1] + n));
    data.data[i + 2] = Math.max(0, Math.min(255, data.data[i + 2] + n));
  }
  ctx.putImageData(data, 0, 0);
}

// Saffron stamp shape — borderless rect with rotated text
function drawStamp(ctx, x, y, label, w = 220, h = 56) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-1.5 * Math.PI / 180);
  ctx.strokeStyle = COLORS.saffron;
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(232, 84, 28, 0.06)';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = COLORS.saffron;
  ctx.font = '700 18px "JetBrains Mono", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, w / 2, h / 2 + 1);
  ctx.restore();
}

// Saffron leaf vector
function drawLeaf(ctx, cx, cy, scale = 1, color = COLORS.saffron) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3.5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(0, 48); ctx.lineTo(0, 0);
  ctx.moveTo(0, 0); ctx.quadraticCurveTo(-25, -16, -25, -30);
  ctx.moveTo(0, 0); ctx.quadraticCurveTo(-14, -20, -17, -32);
  ctx.moveTo(0, 0); ctx.quadraticCurveTo(-6, -22, -6, -34);
  ctx.moveTo(0, 0); ctx.lineTo(0, -32);
  ctx.moveTo(0, 0); ctx.quadraticCurveTo(6, -22, 6, -34);
  ctx.moveTo(0, 0); ctx.quadraticCurveTo(14, -20, 17, -32);
  ctx.moveTo(0, 0); ctx.quadraticCurveTo(25, -16, 25, -30);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(0, 0, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

// =============================================================
// IG PORTRAIT — 1080x1350
// =============================================================
export function renderIgCard(condition) {
  const W = 1080, H = 1350;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = COLORS.paper;
  ctx.fillRect(0, 0, W, H);

  // Top hairline
  ctx.strokeStyle = COLORS.ink;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(80, 90);
  ctx.lineTo(W - 80, 90);
  ctx.stroke();

  // Top-left masthead
  ctx.fillStyle = COLORS.ink;
  ctx.font = '700 14px "JetBrains Mono", monospace';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('VIJAYA  /  EVIDENCE FILE', 80, 60);

  // Top-right century marker
  ctx.textAlign = 'right';
  ctx.fillStyle = COLORS.inkQuiet;
  ctx.fillText('600 BCE  →  2024', W - 80, 60);

  // Eyebrow — category
  ctx.textAlign = 'left';
  ctx.fillStyle = COLORS.saffron;
  ctx.font = '700 13px "JetBrains Mono", monospace';
  ctx.fillText(condition.category.toUpperCase(), 80, 140);

  // Big condition name
  ctx.fillStyle = COLORS.ink;
  ctx.font = '500 96px "Fraunces", serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  const nameLines = wrapText(ctx, condition.name, W - 160);
  let y = 180;
  for (const line of nameLines) {
    ctx.fillText(line, 80, y);
    y += 100;
  }

  // Hairline divider
  ctx.strokeStyle = COLORS.ink;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(80, y + 30);
  ctx.lineTo(W - 80, y + 30);
  ctx.stroke();

  // Headline (the punch)
  const headline = condition.share_card?.headline || condition.hook || condition.summary;
  const subhead = condition.share_card?.subhead || '';

  ctx.fillStyle = COLORS.ink;
  ctx.font = '500 52px "Fraunces", serif';
  const headlineLines = wrapText(ctx, headline, W - 160);
  y += 90;
  for (const line of headlineLines) {
    ctx.fillText(line, 80, y);
    y += 62;
  }

  // Subhead — saffron
  if (subhead) {
    ctx.fillStyle = COLORS.saffronDeep;
    ctx.font = 'italic 500 38px "Fraunces", serif';
    const subLines = wrapText(ctx, subhead, W - 160);
    y += 24;
    for (const line of subLines) {
      ctx.fillText(line, 80, y);
      y += 48;
    }
  }

  // Big stat block — bottom area
  if (condition.share_card?.stat) {
    const statY = H - 380;

    ctx.strokeStyle = COLORS.ink;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(80, statY);
    ctx.lineTo(W - 80, statY);
    ctx.stroke();

    ctx.fillStyle = COLORS.saffron;
    ctx.font = '500 220px "Fraunces", serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(condition.share_card.stat, 80, statY + 30);

    ctx.fillStyle = COLORS.ink;
    ctx.font = '500 22px "JetBrains Mono", monospace';
    const captionLines = wrapText(ctx, condition.share_card.stat_caption, 480);
    let cy = statY + 80;
    for (const line of captionLines) {
      ctx.fillText(line, W - 80 - 480, cy);
      cy += 32;
    }
  }

  // Bottom bar
  ctx.fillStyle = COLORS.ink;
  ctx.fillRect(0, H - 100, W, 100);

  drawLeaf(ctx, 130, H - 50, 0.7, COLORS.saffron);

  ctx.fillStyle = COLORS.bone;
  ctx.font = '500 22px "Fraunces", serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('Type your condition.  See what India knew first.', 200, H - 58);

  ctx.fillStyle = COLORS.saffron;
  ctx.font = '700 16px "JetBrains Mono", monospace';
  ctx.textAlign = 'right';
  ctx.fillText('vijaya.app', W - 80, H - 50);

  // Stamp — top right
  drawStamp(ctx, W - 320, 720, 'EVIDENCE');

  // Subtle grain
  addNoise(ctx, W, H, 6);

  return canvas;
}

// =============================================================
// X / TWITTER LANDSCAPE — 1200x675
// =============================================================
export function renderXCard(condition) {
  const W = 1200, H = 675;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = COLORS.paper;
  ctx.fillRect(0, 0, W, H);

  // Left column — black masthead bar
  ctx.fillStyle = COLORS.ink;
  ctx.fillRect(0, 0, 80, H);

  ctx.save();
  ctx.translate(50, H / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = COLORS.bone;
  ctx.font = '700 18px "JetBrains Mono", monospace';
  ctx.textAlign = 'center';
  ctx.fillText('VIJAYA  /  EVIDENCE FILE  /  vijaya.app', 0, 0);
  ctx.restore();

  // Eyebrow
  ctx.fillStyle = COLORS.saffron;
  ctx.font = '700 14px "JetBrains Mono", monospace';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(condition.category.toUpperCase(), 130, 70);

  // Condition name
  ctx.fillStyle = COLORS.ink;
  ctx.font = '500 64px "Fraunces", serif';
  const nameLines = wrapText(ctx, condition.name, W - 280);
  let y = 105;
  for (const line of nameLines) {
    ctx.fillText(line, 130, y);
    y += 70;
  }

  // Headline
  const headline = condition.share_card?.headline || condition.hook || condition.summary;
  const subhead = condition.share_card?.subhead || '';

  ctx.fillStyle = COLORS.ink;
  ctx.font = '500 32px "Fraunces", serif';
  const headlineLines = wrapText(ctx, headline, W - 280);
  y += 30;
  for (const line of headlineLines) {
    ctx.fillText(line, 130, y);
    y += 40;
  }

  if (subhead) {
    ctx.fillStyle = COLORS.saffronDeep;
    ctx.font = 'italic 500 24px "Fraunces", serif';
    const subLines = wrapText(ctx, subhead, W - 280);
    y += 12;
    for (const line of subLines) {
      ctx.fillText(line, 130, y);
      y += 32;
    }
  }

  // Stat — right side
  if (condition.share_card?.stat) {
    ctx.fillStyle = COLORS.saffron;
    ctx.font = '500 130px "Fraunces", serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillText(condition.share_card.stat, W - 60, H - 220);

    ctx.fillStyle = COLORS.ink;
    ctx.font = '500 14px "JetBrains Mono", monospace';
    ctx.textAlign = 'right';
    const captionLines = wrapText(ctx, condition.share_card.stat_caption, 320);
    let cy = H - 80;
    for (const line of captionLines) {
      ctx.fillText(line, W - 60, cy);
      cy += 20;
    }
  }

  drawStamp(ctx, 130, H - 130, 'EVIDENCE');

  addNoise(ctx, W, H, 5);

  return canvas;
}

// =============================================================
// Download helpers
// =============================================================
export function downloadCanvas(canvas, filename) {
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 'image/png', 0.95);
}

export function downloadIgCard(condition) {
  const canvas = renderIgCard(condition);
  downloadCanvas(canvas, `vijaya-${condition.id}-ig.png`);
}

export function downloadXCard(condition) {
  const canvas = renderXCard(condition);
  downloadCanvas(canvas, `vijaya-${condition.id}-x.png`);
}
