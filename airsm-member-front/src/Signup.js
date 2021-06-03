import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Signup.css';
import axios from 'axios';

function Signup({history}) {
    const [phone, setPhone] = useState();
    const [password, setPw] = useState();
    const [password2, setPw2] = useState();
    const [name, setName] = useState();

    function registerUser(e){
        e.preventDefault();
        axios.post('http://13.208.94.244:8000/membership/users/signup/',
                                {
                                    phone,
                                    name,
                                    password
                                })
        .then(res=>{
            console.log(res)
        });
        // history.push('/');
                            
    }
    return (
        <div className="Signup">
            <h1>SignUp</h1>
            <form className="form" noValidate autoComplete="off" >
                <div className="input">
                    <TextField label="Phone Number" 
                               variant="filled"
                            onChange={(e)=>setPhone(e.target.value)}/>
                </div>    {/* 추후 휴대폰 개인 인증 구현 필요 */}
                <div className="input">
                    <TextField label="Password"
                               variant="filled"
                               type="password"
                               onChange={(e)=>setPw(e.target.value)}/>
                </div>     
                <div className="input">
                    <TextField label="Confirm Password"
                               variant="filled"
                               type="password"
                               onChange={(e)=>setPw2(e.target.value)}/>
                </div>{/* 위 패스워드와 일치하는지 유효성 검사*/}
                <div className="input">
                    <TextField label="Name"
                               variant="filled" 
                               onChange={(e)=>setName(e.target.value)}/>
                </div>            {/* 한글 이름에 대한 유효성 검사 */}
            </form>
            <div>
                <Button className="input"
                    variant="outlined"
                    color="primary"
                    onClick={registerUser}
                    >가입하기
                </Button>
            </div>
        </div>
    );
}

export default Signup;