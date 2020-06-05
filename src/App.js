import React from 'react';
import { connect } from 'react-redux';
import * as types from './redux/types/calculatrice';

import Draggable from 'react-draggable';

import './App.css';

const mapStateToProps = state => ({state: state})

const mapDispatchToProps = dispatch => ({ dispatch: arg => dispatch(arg) });

function App(props) {

  return (
    <div className="App">

        <Draggable handle=".bar">

          <div className="calc">
            <div className="bar"></div>
            <div className="screen">{props.state.screen}</div>
            <div className="pad">
              <button onClick={() => props.dispatch({type: types.SCREEN, number:7})}>7</button>
              <button onClick={() => props.dispatch({type: types.SCREEN, number:8})}>8</button>
              <button onClick={() => props.dispatch({type: types.SCREEN, number:9})}>9</button>
              <button onClick={() => props.dispatch({type: types.ADD})}>
                <i className="fas fa-plus"></i>
              </button>
              <button onClick={() => props.dispatch({type: types.SCREEN, number:4})}>4</button>
              <button onClick={() => props.dispatch({type: types.SCREEN, number:5})}>5</button>
              <button onClick={() => props.dispatch({type: types.SCREEN, number:6})}>6</button>
              <button onClick={() => props.dispatch({type: types.SUB})}>
                <i className="fas fa-minus"></i>
              </button>
              <button onClick={() => props.dispatch({type: types.SCREEN, number:1})}>1</button>
              <button onClick={() => props.dispatch({type: types.SCREEN, number:2})}>2</button>
              <button onClick={() => props.dispatch({type: types.SCREEN, number:3})}>3</button>
              <button onClick={() => props.dispatch({type: types.DIV})}>
                <i className="fas fa-divide"></i>
              </button>
              <button onClick={() => props.dispatch({type: types.SCREEN, number:0})}>0</button>
              <button onClick={() => props.dispatch({type: types.RESET})}>C</button>
              <button onClick={() => props.dispatch({type: types.EQU})}>=</button>
              <button onClick={() => props.dispatch({type: types.MUL})}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

        </Draggable>


 
          
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
