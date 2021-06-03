import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Point(props) {
  return (
    <React.Fragment>
      <Title>My points</Title>
      <Typography component="p" variant="h4">
        {props.points} 원
      </Typography>
    </React.Fragment>
  );
}