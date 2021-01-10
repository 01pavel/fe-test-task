import { useCallback, useMemo, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from './BoardCell.styles';
import { makeMove } from '../../../../actions/gameActions';

const BoardCell = ({ cell }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const placeSign = useCallback(
    (cell) => {
      dispatch(makeMove({ index: cell }));
    },
    [dispatch],
  );

  const isCellTaken = useMemo(() => typeof cell === 'string', [cell]);

  return (
    <Button
      className={classes.cell}
      disabled={isCellTaken}
      onClick={() => placeSign(cell)}
    >
      {isCellTaken && <Typography variant="h3">{cell}</Typography>}
    </Button>
  );
};

export const MemoizedBoardCell = memo(BoardCell);
