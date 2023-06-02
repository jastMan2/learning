import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CASH, GET_CASH } from '.';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state)
  console.log(cash)
  const addCash = () => {dispatch/* 1 */(ADD_CASH(10)/* 2 */)};
  const getCash = () => {dispatch(GET_CASH(10))};
  const [login, setLogin] = useState({login:'', password:'',})
  const autorithize = () => {
    if (!login.login && !login.password) return false
    fetch ('http://localhost:5000/login', {body: JSON.stringify(login), method:'get'})
    .then((response) => {console.log(response)})
    .catch((err) => {console.log(err)})
  }
  console.log(login)
  return (
    <div className='app'>
      <div className='btns'>
        {/* <button onClick={addCash}>ADD_CASH</button>
        <button onClick={getCash}>GET_CASH</button> */}
        <input onInput={(e) => {
            setLogin({...login, login: e.target.value})//e.target - input / value - innerInput
          }}/>
        <input onInput={(e) => {
            setLogin({...login, password: e.target.value}) 
          }}/>
        <button onClick={autorithize}>autoraze</button>
      </div>
    </div>
  );
}

export default App;


//1 -  функция изменения состояния
//2 -  редюсер описывающий как будет изменяться состояние