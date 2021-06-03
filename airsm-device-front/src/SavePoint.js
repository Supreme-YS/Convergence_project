import React, {useEffect} from 'react';
import './SavePoint.css';
import Topbar from './components/Topbar';
import Button from '@material-ui/core/Button';
import turtle3 from './images/turtle3.jpg';

function SavePoint(props) {
    // useEffect(()=>{
    //     setTimeout(()=>props.history.push('/'),5000)
    //     // 버튼으로 타이머가 종료하기 전에 페이지가 바뀌었음에도 타이머가 작동한다.
    // });
    function goHome(e){
        e.preventDefault();
        props.history.push('/home')
    }
    
    return (
        <div>
            <div className='SavePoint'>
                <Topbar/>
                <div className="SavePoint-article">
                    <div align="center" className="msg"> {props.points} 포인트가 적립되었습니다. 잠시 후 메인 화면으로 돌아갑니다. </div>
                    
                    <Button 
                        className="SavePoint-btn1"
                        variant="outlined"
                        color="primary"
                        onClick={()=>props.history.push('/guide')}>동일한 번호로 다시 시작하기</Button>
                    <Button 
                        className="SavePoint-btn2"
                        variant="outlined"
                        color="primary"
                        onClick={(e)=>goHome(e)}>번호 입력화면으로 이동하기</Button>
                    <div>
                        <img className="img" src={turtle3} alt="hi"></img>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default SavePoint;



