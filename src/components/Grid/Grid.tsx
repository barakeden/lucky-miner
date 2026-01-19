import { Card } from '../Card/Card';
import { GridContainer } from './Grid.style';
import type { GridProps } from '../../types/game';

export const Grid: React.FC<GridProps> = ({ board, revealedCells, onCellFlip, disabled }) => {
  return (
    <GridContainer>
      {board.map((row, rowIndex) =>
        row.map((isWinning, colIndex) => {
          const cellKey = `${rowIndex}-${colIndex}`;
          const isRevealed = revealedCells.has(cellKey);

          return (
            <Card
              key={cellKey}
              isRevealed={isRevealed}
              isWinning={isWinning}
              onFlip={() => onCellFlip(rowIndex, colIndex)}
              disabled={disabled}
            />
          );
        })
      )}
    </GridContainer>
  );
};
