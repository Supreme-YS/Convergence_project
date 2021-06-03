import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ComposedTextField(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Phone Number</InputLabel>
        <FilledInput id="component-filled" value={props.phone} />
      </FormControl>
    </form>
  );
}




