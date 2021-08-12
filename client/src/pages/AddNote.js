import React from 'react';
import { INCREMENT, DECREMENT } from '../utils/actions';
import { useDispatch, useSelector } from 'react-redux';


function AddNote() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    function increment(){
        dispatch({ type: INCREMENT });
    }
    function decrement(){
        dispatch({ type: DECREMENT });
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            <p>{state.counter}</p>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default AddNote;