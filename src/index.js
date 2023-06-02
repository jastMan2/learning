import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux' //новый импорт createSore

const defaultState = {
  cash: 0,
};

const reducer = (state = defaultState, action) => {          //создаю редьюсер обьясняющий как будет изменяться состояние
  switch (action.type){
    case "ADD_CASH":
      return {...state, cash: state.cash + action.payload}
    case "GET_CASH":
      return {...state, cash: state.cash - action.payload}

    default:
      return state
  }
};

export const GET_CASH = (cash) => {
  return({type:"GET_CASH", payload: cash})      //создаю функцию для описания того как будет изменяться состояние и данные для изменения
};

export const ADD_CASH = (cash) => {
  return({type:"ADD_CASH", payload: cash})
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);