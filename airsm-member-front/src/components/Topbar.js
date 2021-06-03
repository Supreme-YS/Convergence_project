import React, {Component} from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './css/Topbar.css';

function Topbar({history}) {
    return (
        <AppBar position="static" className="Topbar">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    {/*className={classes.menuButton} */}
                    
                    </IconButton>
                    <Typography variant="h6">
                        {/*className={classes.title} */}
                    AIRSM
                    </Typography>
                    <Button color="inherit" onClick={()=>history.push('/signin')}>SignIn</Button>
                    <Button color="inherit" onClick={()=>history.push('/signup')}>SignUp</Button>
                </Toolbar>
        </AppBar>
    );
}

export default Topbar;