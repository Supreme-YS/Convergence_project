import React from 'react';
import Button from '@material-ui/core/Button';

import Topbar from './components/Topbar';
import NestedGrid from './components/GridButton';
import ComposedTextField from './components/TextField';
import './Home.css'


export default function Home(props) {
    return(
        <div className='Home'>
            <Topbar/>
            <div className="Home-article">
                <div className="msg"> 휴대폰 번호를 입력해주세요. </div>
                
                <NestedGrid phone={props.phone} setPhone={props.setPhone}/>
                <ComposedTextField phone={props.phone}/>
                <Button variant="outlined" color="primary" phone={props.phone} onClick={()=>{props.history.push("/guide")}}>확인</Button>            
            </div>
        </div>
        
    );
    
}

