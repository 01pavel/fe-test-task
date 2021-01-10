import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  controlsPanel: {
    display: 'flex',
    width: theme.spacing(33),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    justifyContent: 'space-between',
  },
}));
