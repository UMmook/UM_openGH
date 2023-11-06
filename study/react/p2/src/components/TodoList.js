import "./TodoList.css"
import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todo, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");
    const onchangeSearch = (event) => {
        setSearch(event.target.value);
    }
    const filteringTodo = () => {
        return search === "" ? todo : todo.filter((item) => item.content.toLowerCase().includes(search.toLowerCase()));
    }
    console.log("TodoList", todo)

    return (
        <div className="TodoList">
            <h3>Todo List 🌱</h3>
            <input className="searchbar"
                value={search} 
                onChange={onchangeSearch}
                placeholder="필터링 검색어 넣어주세요" />
            <div>
                {/* Todo들 map관리 TodoItem
                TodoItem = (isDone, content, createdDate) */}
                {filteringTodo().map((item) => (
                    <TodoItem key = {item.id}
                    {...item}
                    onUpdate={onUpdate}
                    onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
}

export default TodoList;