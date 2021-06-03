import React, {useState} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
export default function App(props){
  const [phone, setPhone] = useState();
  const [password, setPw] = useState();
  const [name, setName] = useState();
  const [points, setPoints] = useState();
  const [login, setLogin] = useState();
  const [rank, setRank] = useState([]);

  console.log("======App",rank);
  return(
    <BrowserRouter>
      <Route exact path="/" 
        render={routeProps=><Signin 
          phone={phone} 
          setPhone={setPhone}
          password={password}
          setPw={setPw} 
          login={login}
          setLogin={setLogin}
          name={name}
          setName={setName}
          points={points}
          setPoints={setPoints}
          setRank={setRank}
          {...routeProps} 
        />}
      />
      {/* <Route path="/"><Signin
      phone={phone} 
      setPhone={setPhone}
      password={password}
      setPw={setPw} 
      setLogin={setLogin}/></Route> */}

      {/* 이슈: Route 컴포넌트로 props 전달 방식이 다르다. */}
      {/* 이슈: Route 컴포넌토 안에서 history 사용하기 위한 별도 props 전달방식이 있다. */}
      <Route path="/Home" render={routeProps=><Home
        login={login}
        points={points}
        rank={rank}
        name={name}
        {...routeProps}
        />
      }/>
      
      <Route path="/signup" component={Signup}/>
    </BrowserRouter>
  );
}