import { Paper, Typography } from '@material-ui/core';
import { useStyles } from './TotalScore.styles';

export const TotalScore = ({ scoreData: { ai, player, X, O } }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">Total Score:</Typography>
      <Typography variant="h6">AI: {ai}</Typography>
      <Typography variant="h6">Player: {player}</Typography>
      <Typography variant="h6">X: {X}</Typography>
      <Typography variant="h6">O: {O}</Typography>
    </Paper>
  );
};
