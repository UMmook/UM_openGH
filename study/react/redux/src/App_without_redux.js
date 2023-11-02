import './App.css';
import React, { useState } from 'react';

function Left1(props) {
  return (
    <div>
      <h1>Left1: {props.number}</h1>
      <Left2 number={props.number} />
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2: {props.number}</h1>
      <Left3 number={props.number} />
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      <h1>Left3: {props.number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1: {props.number}</h1>
      <Right2 onIncrese={
        () => { props.onIncrese(); }
      } />
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2: {props.number}</h1>
      <Right3 onIncrese={
        () => { props.onIncrese(); }
      } />
    </div>
  );
}

function Right3(props) {
  return (
    <div>
      <h1>Right3: {props.number}</h1>
      <input type='button' value='+' onClick={
        () => { props.onIncrese(); }
      } />
    </div>
  );
}

export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <div id="container">
      <h1>Root: {number}</h1>
      <div id='grid'>
        <Left1 number={number} />
        <Right1 onIncrese={
          () => { setNumber(number+1) }
        } />
      </div>
    </div>
  );
}