import { useDispatch } from 'react-redux';
import { Button, Box } from '@material-ui/core';
import { useStyles } from './ControlsPanel.styles';
import { resetGame, startNextGame } from '../../../../actions/gameActions';

export const ControlsPanel = ({ isGameLoading }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Box className={classes.controlsPanel}>
      <Button
        title="reset current game"
        variant="contained"
        disabled={isGameLoading}
        onClick={() => dispatch(resetGame())}
      >
        Reset game
      </Button>
      <Button
        title="start next geme"
        variant="contained"
        disabled={isGameLoading}
        onClick={() => dispatch(startNextGame())}
      >
        Next game
      </Button>
    </Box>
  );
};
