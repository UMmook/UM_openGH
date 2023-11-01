import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Switch, Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Home ...</p>
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <p>Topics ...</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact ...</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink to ='/'>Home</NavLink></li>
        <li><NavLink to ='/topics'>Topics</NavLink></li>
        <li><NavLink to ='/contact'>Contact</NavLink></li>
      </ul>

      {/* Switch: react-router-dom v5까지 Routes와 유사하게 쓰여짐 */}
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/topics' element={<Topics />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={"Not Found"} />
      </Switch>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter><App /></BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
