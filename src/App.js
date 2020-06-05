import React from 'react';
import { connect } from 'react-redux';
import * as types from './redux/types/calculatrice';
import {mapDispatchToProps} from './redux/actions/calculatrice'

import Draggable from 'react-draggable';

import './App.css';

const mapStateToProps = state => ({state: state})



function App(props) {

  return (
    <div className="App">

        <Draggable handle=".bar">

          <div className="calc">
            <div className="bar"></div>
            <div className="screen">{props.state.screen}</div>
            <div className="pad">
              <button onClick={() => props.screen(7)}>7</button>
              <button onClick={() => props.screen(8)}>8</button>
              <button onClick={() => props.screen(9)}>9</button>
              <button onClick={props.addOp}>
                <i className="fas fa-plus"></i>
              </button>
              <button onClick={() => props.screen(4)}>4</button>
              <button onClick={() => props.screen(5)}>5</button>
              <button onClick={() => props.screen(6)}>6</button>
              <button onClick={props.subOp}>
                <i className="fas fa-minus"></i>
              </button>
              <button onClick={() => props.screen(1)}>1</button>
              <button onClick={() => props.screen(2)}>2</button>
              <button onClick={() => props.screen(3)}>3</button>
              <button onClick={props.divOp}>
                <i className="fas fa-divide"></i>
              </button>
              <button onClick={() => props.screen(0)}>0</button>
              <button onClick={props.reset}>C</button>
              <button onClick={props.equOp}>=</button>
              <button onClick={props.mulOp}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

        </Draggable>


 
          
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
