import React, {useState} from 'react';
import Topbar from './components/Topbar';
import './Guide.css';
import guide1 from './images/guide1.png';
import guide2 from './images/guide2.png';
import guide3 from './images/guide3.png';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://13.208.94.244:9001');
client.subscribe("rasp/material");

function Guide({history}) {
    const [state,setState] = useState("");
    function send(e){
        e.preventDefault();
        setState('send');
        client.publish("web/camera","shot");
    }
    client.on("message", function (topic, payload) {    // mqtt 메시지는 object 타입
        // alert([topic, payload].join(": "));
        history.push({
            pathname:'/outlet',
            mat:payload.toString()
        });    // 페이지 이동과 함께 props를 전달한다.
        client.end()
      });
    return (
        <div>
            <div className='Guide'>
                <Topbar/>
                <div className="Guide-article">
                    
                    <p>빨대, 홀더, 뚜껑을 제거해주세요.</p>
                    <p>내용물을 세척해주세요.</p>
                    <p>컵을 아래 투입구에 넣은 후 '시작하기' 버튼을 눌러주세요. </p>
                    <div>
                        <img className="img" src={guide1} alt="hi"></img>
                        <img className="img" src={guide2} alt="hi"></img>
                        <img className="img" src={guide3} alt="hi"></img>

                    </div>
                    <Button 
                        className="btn"
                        variant="outlined"
                        color="primary"
                        onClick={(e)=>send(e)}>인식하기
                    </Button>
                    {
                        state==='send'?
                        <div><CircularProgress className="load"/></div>:<div/>
                    }    
                </div>                                                                                                                                                      
            </div>
        </div>
    );
}

export default Guide;