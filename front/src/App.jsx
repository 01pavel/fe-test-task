import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavPanel } from './components/NavPanel';
import Routes from './Routes';
import { Notification } from './components/Notification/Notification';
import { setError } from './actions/appActions';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
});

const App = () => {
  const classes = useStyles();
  const errorMessage = useSelector((state) => state.app.errorMessage);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Grid container className={classes.root}>
        <CssBaseline />
        <NavPanel />
        <Routes />
        <Notification
          message={errorMessage}
          onClose={() => dispatch(setError(''))}
        />
      </Grid>
    </BrowserRouter>
  );
};

export default App;
