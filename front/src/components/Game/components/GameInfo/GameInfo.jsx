import { memo } from 'react';
import { Box, Typography } from '@material-ui/core';

const GameInfo = ({ player, ai }) => {
  return (
    <Box p={3}>
      <Typography variant="h6">Player: {player}</Typography>
      <Typography variant="h6">AI: {ai}</Typography>
    </Box>
  );
};

export const MemoizedGameInfo = memo(GameInfo);
