import { useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

const todo_example = [
  {
    id: 0,
    isDone: false,
    content: "할 일 예제 react 0",
    createdDate: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "할 일 예제 React 1",
    createdDate: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "할 일 예제 React 2",
    createdDate: new Date().getTime()
  }
]

function App() {
  const [todo, setTodo] = useState(todo_example);
  const idRef = useRef(3);
  const onCreate = (content) => {
    // content 처리, alert(content);
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime()
    }
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  }
  const onUpdate = (id) => {
    setTodo(
      todo.map((item) => (item.id === id) ? {...item, isDone: !item.isDone} : item)
    )
  };
  const onDelete = (id) => {
    setTodo(
      todo.filter((item) => (item.id !== id))
    )
  };

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo}
      onUpdate={onUpdate}
      onDelete={onDelete} />
    </div>
  );
}

export default App;
