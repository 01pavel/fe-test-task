import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, useLocation } from 'react-router-dom';

export const NavPanel = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(
    location.pathname.slice(1) || 'game',
  );

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab value="game" label="Game" component={Link} to="/game" />
        <Tab value="score" label="Score" component={Link} to="/score" />
      </Tabs>
    </Paper>
  );
};
