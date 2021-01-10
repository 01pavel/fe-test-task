import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  cell: {
    minWidth: theme.spacing(11),
    height: theme.spacing(11),
    padding: 0,
    borderRadius: 0,
    border: '1px solid black',
    cursor: 'pointer',
  },
}));
