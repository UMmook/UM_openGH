import React, { useState } from 'react';

// const IterationSample = () => {
//   const names = ['사과', '망고', '토마토', '오렌지'];
//   const nameList = names.map(
//     (name, idx) => <li key={idx}>{name}</li>
//   );

//   return <ul>{nameList}</ul>
// }

const IterationSample = () => {
  // preset
  const [names, setNames] = useState([
    {id: 1, text: '사과'}, {id: 2, text: '망고'}, {id: 3, text: '토마토'}, {id: 4, text: '오렌지'}
  ]);
  // new items
  const [nextId, setNextId] = useState(5);
  const [inputText, setInputText] = useState('');

  const nameList = names.map(
    (name) => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
  );

  const onChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const onClick = () => {
    const nextNames = names.concat({id: nextId, text: inputText});
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
}

function App() {
  return (
    <IterationSample />
  );
}

export default App;