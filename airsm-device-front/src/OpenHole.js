import React from 'react';
import './OpenHole.css';
import Topbar from './components/Topbar';
import axios from 'axios';

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://13.208.94.244:9001');
client.subscribe("rasp/count");


function OpenHole(props) {
    const phone = props.phone;
    client.on("message", function (topic, payload) {    // mqtt 메시지는 object 타입
        // alert([topic, payload].join(": ")); 
        if (topic === "rasp/count"){
            // console.log("rasp/count: "+ payload + typeof(payload))
            if(payload.toString() === "over"){ // 배출구 닫음. payload는 object 타입
                // console.log("over");
                axios.post('http://13.208.94.244:8000/membership/point/',{
                    phone
                })
                .then(res=>{
                    if (res.data!=="fail"){
                        console.log("res: " + res.data);
                        props.setPoints(res.data);
                        props.history.push('/point');
                    }
                }   
            )};  
        } 
        
      });
    return (
        <div>
            <div className='OpenHole'>
                <Topbar/>
                <div className="OpenHole-article">
                    <div align="center" className="msg"> {props.location.mat} 배출 처리합니다. </div>

                </div>
            </div>
        </div>
    );
}
export default OpenHole;


