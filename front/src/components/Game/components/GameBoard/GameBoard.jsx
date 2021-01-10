import { memo } from 'react';
import { Paper } from '@material-ui/core';
import { useStyles } from './GameBoard.styles';
import { BoardCell } from '../BoardCell';
import { BoardOverlay } from '../BoardOverlay';

const GameBoard = ({ currentGame, isGameLoading, isMoveMaking }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.board} elevation={0}>
      <BoardOverlay
        isGameLoading={isGameLoading}
        isMoveMaking={isMoveMaking}
        end={currentGame?.end}
        winner={currentGame?.winner}
      />
      {currentGame?.board.flat().map((cellItem, index) => (
        <BoardCell key={index} cell={cellItem} />
      ))}
    </Paper>
  );
};

export const MemoizedGameBoard = memo(GameBoard);
