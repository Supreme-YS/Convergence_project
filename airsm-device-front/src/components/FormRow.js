import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
export default function FormRow(props) {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Button item xs={4} variant="outlined" color="secondary" className={classes.btn} onClick={()=>props.setPhone(props.phone + props.data[0])}>
            {props.data[0]}
        </Button>
        <Button item xs={4} variant="outlined" color="secondary" className={classes.btn} onClick={()=>props.setPhone(props.phone + props.data[1])}>
            {props.data[1]}
        </Button>
        <Button item xs={4} variant="outlined" color="secondary" className={classes.btn} onClick={()=>props.setPhone(props.phone + props.data[2])}>
            {props.data[2]}
        </Button>
      </React.Fragment>
    );
  }