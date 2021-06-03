import React, {Component} from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import './css/Topbar.css';

class Topbar extends Component{
    render(){
        return(
            <AppBar position="static" className="Topbar">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    {/*className={classes.menuButton} */}
                    
                    </IconButton>
                    <Typography variant="h6">
                        {/*className={classes.title} */}
                    AIRSM
                    </Typography>
                    
                </Toolbar>
            </AppBar>
        );
    }

    
}
export default Topbar;


