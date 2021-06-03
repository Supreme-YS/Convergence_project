import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormRow from './FormRow';
import FormRowZero from './FormRowZero';
// 모든 버튼 가운데 정렬 필요

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin:5,
    width: 30,
    height:50,

  },
  btngroup: {
      margin:5,
  }

}));


export default function NestedGrid(props){
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3} className={classes.btngroup} justify="center">
          <FormRow data={[1, 2, 3]} phone={props.phone} setPhone={props.setPhone}/>
        </Grid>
        <Grid container item xs={12} spacing={3}className={classes.btngroup} justify="center">
          <FormRow data={[4, 5, 6]} phone={props.phone} setPhone={props.setPhone}/>
        </Grid>
        <Grid container item xs={12} spacing={3} className={classes.btngroup} justify="center">
          <FormRow data={[7, 8, 9]} phone={props.phone} setPhone={props.setPhone}/>
        </Grid>
        <Grid container item xs={12} spacing={3} className={classes.btngroup} justify="center">
          <FormRowZero phone={props.phone} setPhone={props.setPhone}/>
        </Grid>
      </Grid>
    </div>
  );
}