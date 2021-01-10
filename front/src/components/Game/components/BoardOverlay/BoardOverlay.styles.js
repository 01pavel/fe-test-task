import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  boardOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    cursor: 'not-allowed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: ({ end }) => (end ? 'rgba(0, 0, 0, .6)' : 'unset'),
    color: '#fff',
  },
}));
