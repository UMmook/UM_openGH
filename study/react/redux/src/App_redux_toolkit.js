import React from "react";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice (
    {
        name: 'counterSlice',
        initialState: {value: 0},
        reducers: {
            up: (state, action) => {
                state.value = state.value + action.step;
            }
        }
    }
);

const store = configureStore (
    {
        reducer: {
            counter: counterSlice.reducer
        }
    }
);

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(
        (state) => {
            // console.log(state);
            // return state.value;
            return state.counter.value;
        }
    );
    return (
        <div>
            <div>
                {count}
            </div>
            <div>
                <button onClick={
                    () => { 
                        dispatch({type: 'counterSlice/up', step: 2}); 
                    }
                }>+</button>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <div>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    );
}