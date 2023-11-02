import React, { useState, useReducer } from "react";

export default function App() {
    function countReducer(oldCount, action) {
        if (action === 'UP') {
            return oldCount + action.number;
        } else if (action === 'RESET') {
            return 0;
        } else if (action === 'DOWN') {
            return oldCount - action.number;
        }
    }
    const [count, countDispatch] = useReducer(countReducer, 0);
    const [number, setNumber] = useState(1);
    function changeNumber(event) {
        setNumber(Number(event.target.value));
    }

    function down() { countDispatch({type: 'DOWN', number: number}); }      // setCount(count - 1);
    function reset() { countDispatch({type: 'RESET', number: number}); }    // setCount(0);
    function up() { countDispatch({type: 'UP', number: number}); }          // setCount(count + 1);

    // const [count, setCount] = useState(0);
    return (
        <div>
            <div>
                현재 상태: {count}
            </div>
            <div>
                <input type="button" value="-" onClick={down} />
                <input type="button" value="0" onClick={reset} />
                <input type="button" value="+" onClick={up}/>
            </div>
            <div>
                보폭 설정: <input type="text" value={number} onChange={changeNumber} />
            </div>
        </div>
    );
}