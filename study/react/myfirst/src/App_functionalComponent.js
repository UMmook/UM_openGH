import logo from './logo.svg';
import './App.css';

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
  return (
    <div>
      <nav>
        <ol>
          <li onClick={
            function(event) {
              event.preventDefault();
              props.onchangeMode();
            }
          }><a href='/read/1'>{props.topics[0].title}</a></li>
          <li><a href='/read/2'>{props.topics[1].title}</a></li>
          <li><a href='/read/3'>{props.topics[2].title}</a></li>
        </ol>
      </nav>
    </div>
  );
}

function Nav2(props) {
  // const lis = [
  //   <li><a href='/read/1'>{props.topics[0].title}</a></li>,
  //   <li><a href='/read/2'>{props.topics[1].title}</a></li>,
  //   <li><a href='/read/3'>{props.topics[2].title}</a></li>
  // ]

  const lis = []
  for (let i=0; i<props.topics.length; i++) {
    let temp = props.topics[i];
    lis.push(<li key={temp.id}><a href={'/read/' + temp.id}>{temp.title}</a></li>);
  }
  return (
    <div>
      <nav>
        <ol>
          {lis}
        </ol>
      </nav>
    </div>
  );
}

function Nav3(props) {
  const lis = []
  for (let i=0; i<props.topics.length; i++) {
    let temp = props.topics[i];
    lis.push(<li key={temp.id}><a id={temp.id} href={'/read/' + temp.id} onClick={
      (event) => {
        event.preventDefault();
        props.onchangeMode(event.target.id);
      }
    }>{temp.title}</a></li>);
  }
  return (
    <div>
      <nav>
        <ol>
          {lis}
        </ol>
      </nav>
    </div>
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

  let mode = 'WELCOME'; // WELCOME or READ
  let content = null;

  if (mode === 'WELCOME') {
    content = <Article title="welcome" body="hello web" />;
  } else if (mode === 'READ') {
    content = <Article title="welcome" body="hello read" />;
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
        () => {mode = 'WELCOME'; alert(mode);}
      } />
      <Nav topics = {topics} onchangeMode={
        (id) => {mode = 'READ'; alert(mode);}
      } />
      {content}

      {/*
      <div>
        <Nav2 topics = {topics} />
        <Nav3 topics = {topics} onchangeMode={
          function(id) {
            alert('여기는 ' + id);
          }
        } />
        <Article title="welcome" body="Hello, React!" />
        <Article title="welcome again" body="Hello, Again!" />
      </div>
      */}
    </div>
  );
}

export default App;
