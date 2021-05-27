import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Point() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>My points</Title>
      <Typography component="p" variant="h4">
        3,024.00 원
      </Typography>
    </React.Fragment>
  );
}