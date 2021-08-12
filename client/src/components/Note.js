import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_NOTE } from '../utils/actions';
export default function Note(props) {
    const dispatch = useDispatch();
    function deleteNote(e) {
        e.preventDefault();
        let note_id = e.target.data
        dispatch({ type: DELETE_NOTE, note_id });
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button data={props.id} onClick={deleteNote}>Delete</button>
        </div>
    )
}