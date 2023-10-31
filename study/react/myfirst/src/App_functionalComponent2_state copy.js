import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props) {
  return (
    <div>
      <header>
        <h1><a href='/' onClick={
          function(event) {
            event.preventDefault();
            props.onchangeMode();
          }
        }>{props.title}</a></h1>
      </header>
    </div>
  );
}

function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
    </li>);
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

function Article(props) {
  return (
    <div>
      <article>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </article>
    </div>
  );
}

function App() {
  const topics = [
    {id: 1, title: "htmlㅋ", body: "html is ~"},
    {id: 2, title: "cssㅋ", body: "css is ~"},
    {id: 3, title: "jsㅋ", body: "js is ~"},
  ]

  // class : property, setter
  const [id, setId] = useState(null);
  const [mode, setMode] = useState('WELCOME'); // WELCOME or READ
  let content = null;

  if (mode === 'WELCOME') {
    content = <Article title="welcome" body="hello web" />;
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i=0; i<topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />;
  }
  // JS 영역에서는 JS 주석을 그대로 사용

  // JSX 영역
  return (
    <div>
      {/* JSX에서는 CSS주석처럼 쓰되 중괄호가 추가 */}
      <Header title="REACT" onchangeMode={
        // function() {
        //   alert('여기는 header');
        // }
        () => {setMode('WELCOME');}
      } />
      <Nav topics = {topics} onchangeMode={
        (_id) => {setMode('READ'); setId(_id);}
      } />
      {content}
    </div>
  );
}

export default App;
