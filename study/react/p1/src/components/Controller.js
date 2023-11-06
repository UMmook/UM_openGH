const Controller = ({onIncDec}) => {
    return (
        <div>
            <button onClick={() => {onIncDec(-100)}}>-100</button>
            <button onClick={() => {onIncDec(-10)}}>-10</button>
            <button onClick={() => {onIncDec(-1)}}>-1</button>
            <button onClick={() => {onIncDec(+1)}}>+1</button>
            <button onClick={() => {onIncDec(+10)}}>+10</button>
            <button onClick={() => {onIncDec(+100)}}>+100</button>
        </div>
    );
}

export default Controller;