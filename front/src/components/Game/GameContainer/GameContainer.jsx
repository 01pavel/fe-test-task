import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { GameBoard } from '../components/GameBoard';
import { requestGame } from '../../../actions/gameActions';
import { useStyles } from './GameContainer.styles';
import { ControlsPanel } from '../components/ControlsPanel/ControlsPanel';
import { GameInfo } from '../components/GameInfo';
import { GameLog } from '../components/GameLog';

export const GameContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentGame, isGameLoading, isMoveMaking, gameLog } = useSelector(
    (state) => state.game,
  );

  useEffect(() => {
    if (currentGame) {
      return;
    }

    dispatch(requestGame());
  }, [currentGame, dispatch]);

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid
        item
        xs={11}
        sm={9}
        md={7}
        lg={5}
        className={classes.boardContainer}
      >
        <ControlsPanel
          currentGame={currentGame}
          isGameLoading={isGameLoading}
        />
        <GameBoard
          currentGame={currentGame}
          isGameLoading={isGameLoading}
          isMoveMaking={isMoveMaking}
        />
        {currentGame && (
          <GameInfo player={currentGame.player} ai={currentGame.ai} />
        )}
        <Grid item xs={12} md={6} className={classes.gameLog}>
          <GameLog gameLog={gameLog} />
        </Grid>
      </Grid>
    </Grid>
  );
};
