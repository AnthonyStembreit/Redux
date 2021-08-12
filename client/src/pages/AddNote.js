import React from 'react';
import { INCREMENT, DECREMENT, TOGGLE } from '../utils/actions';
import { useDispatch, useSelector } from 'react-redux';


function AddNote() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    function increment(e) {
        e.preventDefault();
        dispatch({ type: INCREMENT });
    }
    function decrement(e) {
        e.preventDefault();
        dispatch({ type: DECREMENT });
    }
    function toggle(e) {
        e.preventDefault();
        dispatch({ type: TOGGLE });
    }
    
    return (
        <div>
            <section>
                <button onClick={increment}>+</button>
                <p>{state.counter}</p>
                <button onClick={decrement}>-</button>
            </section> 
            <section>
                <button onClick={toggle}>{state.toggle ? "true" : "false"}</button>
            </section>
        </div>
    )
}
export default AddNote;