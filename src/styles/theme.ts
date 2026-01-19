export const theme = {
  colors: {
    background: '#0a0e27',
    backgroundLight: '#141b3d',
    cardBack: '#1a2351',
    cardFront: '#2a3368',
    win: '#00ff88',
    winDark: '#00cc6f',
    lose: '#ff3366',
    loseDark: '#cc2952',
    gold: '#ffd700',
    goldDark: '#ccac00',
    text: '#ffffff',
    textMuted: '#a0a8cc',
    border: '#2a3568',
    shadow: 'rgba(0, 0, 0, 0.5)',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  fontSize: {
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
    xxxl: '48px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
};

export type Theme = typeof theme;
