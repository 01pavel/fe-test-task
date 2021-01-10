import { IconButton, Snackbar } from '@material-ui/core';

export const Notification = ({ message, onClose }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    open={Boolean(message)}
    autoHideDuration={4000}
    onClose={onClose}
    message={message}
    action={
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
        &#x2715;
      </IconButton>
    }
  />
);
