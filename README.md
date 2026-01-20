# 💎 Lucky Miner - Minesweeper Crash Game

A React-based minesweeper crash game with a sleek dark casino theme, built with performance optimization and best practices in mind.

## 🎮 Game Rules

1. **Objective**: Reveal winning tiles without hitting a mine
2. **Gameplay**: 
   - Click on cards to flip them
   - Each winning card adds coins to your score
   - Hit a mine and lose everything
   - Cash out anytime to keep your winnings
3. **Win Condition**: Reveal all safe tiles to win the maximum payout

## 🚀 Features

- **Smooth 3D Card Flip Animations** - CSS3 transforms with 600ms transitions for professional card flipping
- **Animated Number Transitions** - Score updates with smooth easing animations (500ms duration)
- **Responsive Design** - Full viewport optimization for desktop and mobile devices
- **Dark Casino Theme** - Professional aesthetic with gold and green accents
- **Real-time Score Tracking** - Live score updates with animated transitions
- **Game States** - Loading, Playing, Won, Lost, and Cashed Out states with confetti celebration
- **Dynamic Board Generation** - Each game has a random mine configuration
- **Performance Optimized** - Uses React best practices (memoization, custom hooks, proper cleanup)

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **styled-components** for styling (CSS-in-JS)
- **lucide-react** for icons (Gem, Bomb, Coins, TrendingUp, etc.)
- **react-confetti** for celebration effects
- **Vite** for build tooling and hot module replacement

## 📁 Project Structure

```
src/
├── api/
│   └── gameApi.ts                      # Simulated game API
├── components/
│   ├── AnimatedNumber/
│   │   └── AnimatedNumber.tsx          # Reusable animated number component
│   ├── Card/
│   │   ├── Card.tsx                    # Flip card with 3D animation & cleanup
│   │   └── Card.style.ts               # Styled components for Card
│   ├── Grid/
│   │   ├── Grid.tsx                    # 3x3 responsive game grid
│   │   └── Grid.style.ts               # Styled components for Grid
│   ├── ScoreBoard/
│   │   ├── ScoreBoard.tsx              # Score display with AnimatedNumber
│   │   └── ScoreBoard.style.ts         # Styled components for ScoreBoard
│   ├── Controls/
│   │   ├── Controls.tsx                # Cash Out and Restart buttons
│   │   └── Controls.style.ts           # Styled components for Controls
│   ├── StatusMessage/
│   │   ├── StatusMessage.tsx           # Game status messages (memoized)
│   │   └── StatusMessage.style.ts      # Styled components for StatusMessage
│   └── GameContainer/
│       ├── GameContainer.tsx           # Main game orchestration
│       └── GameContainer.style.ts      # Styled components for GameContainer
├── hooks/
│   ├── index.ts                        # Barrel exports for hooks
│   ├── useGameLogic.ts                 # Custom hook for game state & logic
│   └── useWindowSize.ts                # Custom hook for window dimensions
├── styles/
│   ├── theme.ts                        # Centralized theme configuration
│   └── GlobalStyles.ts                 # Global styles (full viewport)
├── types/
│   └── game.ts                         # TypeScript interfaces & types
├── App.tsx                             # Root component with ThemeProvider
└── main.tsx                            # React app entry point
```

## 🎨 Design Features

- **Color Scheme**:
  - Background: Deep navy gradient (#0a0e27 → #1a1f3a)
  - Win tiles: Green gradient (#00ff88 → #00cc6f)
  - Lose tiles: Red gradient (#ff3366 → #cc2952)
  - Gold accents: #ffd700 for highlights and scores

- **Animations**:
  - **Card Flips**: 600ms 3D perspective transform with rotateY
  - **Number Animations**: 500ms ease-out-quad easing for score updates
  - **Hover Effects**: Scale transform with gold glow on interactive elements
  - **Pulse Animation**: 1s infinite pulse on revealed cards
  - **Confetti**: Celebratory confetti on win/cash-out (800/500 pieces)
  - Uses `requestAnimationFrame` for 60fps smooth animations

## ⚡ Performance Optimizations

- **Custom Hooks**:
  - `useGameLogic`: Encapsulates all game state and business logic
  - `useWindowSize`: Tracks window dimensions with cleanup
  
- **Memoization**:
  - `useCallback` for event handlers (`handleCellFlip`, `handleCashOut`, `handleRestart`)
  - `useMemo` for computed values (`simplifiedBoard`, `canCashOut`, `isGridDisabled`)
  - `React.memo` on `StatusMessage` component to prevent unnecessary re-renders
  
- **Proper Cleanup**:
  - `setTimeout` cleanup in `Card` component using `useRef`
  - Window event listener cleanup in `useWindowSize`
  - `requestAnimationFrame` proper handling in `AnimatedNumber`

- **Layout Optimization**:
  - No layout shifts - components reserve space with `min-height`
  - Full viewport optimization (`100vh`/`100vw`) with no scrolling
  - Responsive grid sizing based on viewport height

## 🚦 Getting Started

```bash
# Install dependencies
npm install

# Start development server (default: http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Enjoy playing Lucky Miner! 🎰💰

Built with ❤️ using React, TypeScript, and styled-components.
