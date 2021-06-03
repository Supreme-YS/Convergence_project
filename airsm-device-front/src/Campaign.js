import React from 'react';
import Topbar from './components/Topbar';
import './Campaign.css';
import turtle1 from './images/turtle1.jpg';
import turtle2 from './images/turtle2.jpg';

import Button from '@material-ui/core/Button';

function Campaign(props) {
    function goHome(e){
        e.preventDefault();
        props.history.push('/home')
    }
    return (
        <div>
            <div className='Campaign'>
                <Topbar/>
                <div className="Campaign-article">  
                    <div>
                        <img className="img" src={turtle1} alt="hi"></img>
                        <img className="img" src={turtle2} alt="hi"></img>
                    </div>
                    <Button
                        className="btn" 
                        variant="outlined"
                        color="primary"
                        onClick={(e)=>goHome(e)}>시작하기</Button>
                </div>                                                                                                                                                      
            </div>
        </div>
    );
}

export default Campaign;