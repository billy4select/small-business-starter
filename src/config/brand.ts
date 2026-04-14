// @ts-check

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: '行銷裡的路人甲',
  tagline: 'AI 時代，判斷力才是你唯一的護城河',
  description:
    '我是比利陳。這裡記錄我如何用 AI 改善工作流程，並用思維邏輯建立不可替代的專業地位。專注於行銷判斷力、AI 工作流實踐與個人品牌資產化。',
  url: 'https://example.com',
  locale: 'zh_TW',

  // ── Fonts ──────────────────────────────────────────────────────────────────
  fonts: {
    body: 'Inter',
    display: 'Oswald',
  },

  // ── Colour Palette ─────────────────────────────────────────────────────────
  colors: {
    primary:      '#0F172A', // 深藍黑色 (專業、沉穩)
    primaryLight: '#334155', 
    primaryFg:    '#ffffff',

    accent:       '#FACC15', // 你的 Logo 黃色 (亮眼、警示、行動)
    accentFg:     '#0F172A', // 黃底黑字，確保按鈕清晰好讀

    background:   '#ffffff',
    surface:      '#F8FAFC',
    border:       '#E2E8F0',

    text:         '#0F172A',
    textMuted:    '#475569',

    dark:         '#0F172A',
    darkSurface:  '#1E293B',
  },

  // ── Border radius ──────────────────────────────────────────────────────────
  radius: {
    sm:   '0.375rem',
    md:   '0.625rem',
    lg:   '1rem',
    full: '9999px',
  },
} as const;

export type Brand = typeof brand;