import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  board: {
    width: theme.spacing(33),
    height: theme.spacing(33),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
}));
