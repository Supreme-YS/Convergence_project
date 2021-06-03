import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Signin.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';


export default function Signin(props) {
    // Warning: Cannot update during an existing state transition (such as within render). Render methods should be a pure function of props and state. 
    // if(props.login==='yes')     // 로그인 상태면 signin url이 요청되더라도 Home화면 띄우기
    //     props.history.push('/home');
    
    function login(e){
        e.preventDefault();
        const phone = props.phone;
        const password = props.password;
        console.log(phone);
        console.log(password);
        axios.post('http://13.208.94.244:8000/membership/signin/',
            {
                phone,
                password
            })
        .then(res =>{
            if(res.status===200){
                props.setLogin("yes");
                console.log(res.data.phone);
                props.setPhone(res.data.phone);
                props.setName(res.data.name);
                props.setPoints(res.data.points);
                axios.get('http://13.208.94.244:8000/membership/rank/')
                    .then(res=>{
                        props.setRank(res.data);
                        console.log(res.data);
                    });
                props.history.push('/home');
            }
            else{
                props.setLogin("no")
                alert("일치하는 계정이 존재하지 않습니다.");
            }
        });
        // props.history.push({pathname:'/',
        //                     a:phone, b:password });
    }
    
    function signup(e){
        e.preventDefault();
        props.history.push('/signup');
    }
    function setPh(e){
        e.preventDefault();
        props.setPhone(e.target.value);
    }
    function setPwd(e){
        e.preventDefault();
        props.setPw(e.target.value);
    }

    return (
        <div className="Signin">
            <h1>SignIn</h1>
            <form className="form" noValidate autoComplete="off" >
                <div className="input"><TextField  label="Phone Number" variant="filled" id="ph" onChange={(e)=>setPh(e)}/></div>
                <div className="input"><TextField label="Password" variant="filled" type="password" id="pw" onChange={(e)=>setPwd(e)}/></div>
            </form>
            <div className="input"><Button variant="outlined" color="primary" onClick={login}>로그인</Button></div>
            <div className="input"><Button variant="outlined" color="primary" onClick={signup}>회원가입</Button></div>
        </div>
    );
}
