import type { Game, Cell } from '../types/game';

export function fetchBoard(): Promise<Game> {
  return new Promise((resolve) => {
    // Simulate API delay (500ms - 1000ms)
    const delay = Math.random() * 500 + 500;
    
    setTimeout(() => {
      const board: Cell[][] = Array.from({ length: 3 }, () =>
        Array.from({ length: 3 }, () => ({ 
          isWinning: true
        }))
      );
      
      // Place at least 1 mine (randomly 1-3 mines)
      const numberOfMines = Math.floor(Math.random() * 3) + 1; // 1 to 3 mines
      const placedMines = new Set<string>();
      
      while (placedMines.size < numberOfMines) {
        const row = Math.floor(Math.random() * 3);
        const col = Math.floor(Math.random() * 3);
        const key = `${row}-${col}`;
        
        if (!placedMines.has(key)) {
          board[row][col].isWinning = false;
          placedMines.add(key);
        }
      }
      
      const amountPerWin = Math.floor(Math.random() * 41) + 10;
      
      resolve({
        board,
        amountPerWin,
        currentCoins: 0,
        status: 'playing',
      });
    }, delay);
  });
}
