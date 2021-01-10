import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { useStyles } from './ScoreContainer.styles';
import { requestScoreData } from '../../../actions/scoreActions';
import { ScoreList } from '../components/ScoreList/ScoreList';
import { TotalScore } from '../components/TotalScore/TotalScore';

export const ScoreContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { scoreData, isScoreLoading } = useSelector((state) => state.score);

  useEffect(() => {
    if (scoreData) {
      return;
    }

    dispatch(requestScoreData());
  }, [dispatch, scoreData]);

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid
        item
        xs={11}
        sm={9}
        md={7}
        lg={5}
        className={classes.scoreContainer}
      >
        <ScoreList
          scoreList={scoreData?.list}
          isScoreLoading={isScoreLoading}
        />
        {scoreData && <TotalScore scoreData={scoreData} />}
      </Grid>
    </Grid>
  );
};
