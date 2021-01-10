import { memo } from 'react';
import { Typography, Box } from '@material-ui/core';
import { useStyles } from './BoardOverlay.styles';

const BoardOverlay = ({ isMoveMaking, end, winner, isGameLoading }) => {
  const classes = useStyles({ end: end || isGameLoading });

  if (!(isMoveMaking || end || isGameLoading)) {
    return null;
  }

  return (
    <Box className={classes.boardOverlay}>
      {!isGameLoading && end && (
        <Typography variant="h5">winner: {winner || 'draw'}</Typography>
      )}
      {isGameLoading && <Typography variant="h5">loading...</Typography>}
    </Box>
  );
};

export const MemoizedBoardOverlay = memo(BoardOverlay);
