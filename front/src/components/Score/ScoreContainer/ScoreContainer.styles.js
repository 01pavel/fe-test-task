import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  scoreContainer: {
    display: 'flex',
    padding: theme.spacing(3),
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100vh - 48px)',
  },
}));
