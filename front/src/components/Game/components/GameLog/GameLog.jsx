import { memo } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useStyles } from './GameLog.styles';

const GameLog = ({ gameLog }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.gameLog}>
      {gameLog.map(({ who, index, sign }) => (
        <Typography key={index}>
          {who} ({sign}) made move to cell #{index}
        </Typography>
      ))}
    </Paper>
  );
};

export const MemoizedGameLog = memo(GameLog);
