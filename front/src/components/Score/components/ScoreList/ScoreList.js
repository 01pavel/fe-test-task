import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@material-ui/core';

export const ScoreList = ({ scoreList, isScoreLoading }) => (
  <TableContainer component={Paper}>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Winner</TableCell>
          <TableCell align="right">Team</TableCell>
          <TableCell align="right">Timestamp</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {scoreList &&
          scoreList.map((score) => (
            <TableRow key={score.ts}>
              <TableCell component="th" scope="row">
                {score.winner}
              </TableCell>
              <TableCell align="right">{score.team}</TableCell>
              <TableCell align="right">
                {new Date(score.ts).toUTCString()}
              </TableCell>
            </TableRow>
          ))}
        {isScoreLoading && (
          <TableRow>
            <TableCell component="th" scope="row">
              <Typography>loading...</Typography>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </TableContainer>
);
