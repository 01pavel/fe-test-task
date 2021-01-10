import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GameContainer } from './components/Game/GameContainer';
import { ScoreContainer } from './components/Score/ScoreContainer';

const Routes = () => {
  return (
    <Switch>
      <Route path="/game">
        <GameContainer />
      </Route>
      <Route path="/score">
        <ScoreContainer />
      </Route>
      <Route render={() => <Redirect to="/game" />} />
    </Switch>
  );
};

export default Routes;
