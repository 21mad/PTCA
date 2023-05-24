import logo from './logo.svg';
import './App.css';
// import {useState} from 'react';  // for useState
import { Provider } from 'react-redux'; // for providing stor to components
import { createStore } from 'redux';  // for creating store by reducer
import Counter from './components/ReduxCounter'
import Machine from './components/FirstMachine'

function App() {
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      <h1>Параллельное соединение автоматов S1 и S2</h1>
      <Machine />
    </Provider>
  );
}

export default App;

const initialState = {
  count: 0,
  machineState: 'q1',
  machineOutput: '-',
  machineState2: 'j1',
  machineOutput2: '-'
}

// reducer func, which returns the new state based on the given action.
function reducer(state = initialState, action){   // state = initialState - default = 0
  switch(action.type){
    case 'INCREMENT':
      return {...state, count: state.count + action.num};
    case 'PERFORM_ACTION':
      if (action.name === 'a'){
        switch(state.machineState){
          case 'q1':
            return {...state, machineState: 'q1', machineOutput: 'X1'};
          case 'q2':
            return {...state, machineState: 'q1', machineOutput: 'X2'};
          case 'q3':
            return {...state, machineState: 'q3', machineOutput: 'X2'};
          default:
            return state;
        }
      }
      else if(action.name === 'b'){
        switch(state.machineState){
          case 'q1':
            return {...state, machineState: 'q3', machineOutput: 'X1'};
          case 'q2':
            return {...state, machineState: 'q3', machineOutput: 'X1'};
          case 'q3':
            return {...state, machineState: 'q2', machineOutput: 'X1'};
          default:
            return state;
        }
      }
      else if(action.name === 'res'){
        return {...state, machineState: 'q1', machineOutput: '-'}
      }
    case "PERFORM_ACTION2":
      if (action.name === 'a'){
        switch(state.machineState2){
          case 'j1':
            return {...state, machineState2: 'j1', machineOutput2: 'Y1'};
          case 'j2':
            return {...state, machineState2: 'j1', machineOutput2: 'Y2'};
          default:
            return state;
        }
      }
      else if(action.name === 'b'){
        switch(state.machineState2){
          case 'j1':
            return {...state, machineState2: 'j2', machineOutput2: 'Y2'};
          case 'j2':
            return {...state, machineState2: 'j1', machineOutput2: 'Y1'};
          default:
            return state;
        }
      }
      else if(action.name === 'res'){
        return {...state, machineState2: 'j1', machineOutput2: '-'}
      }
    default:
      return state;
  }
}

const store = createStore(reducer);


