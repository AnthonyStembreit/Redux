import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_NOTE } from '../utils/actions';
export default function Note(props) {
    const dispatch = useDispatch();
    function deleteNote(e) {
        e.preventDefault();
        let note_id = JSON.parse(e.target.value)
        console.log(note_id)
        dispatch({ type: DELETE_NOTE, note_id });
    }
    return (
        <div>
            <h2>{props.note.title}</h2>
            <p>{props.note.description}</p>
            <button value={props.note.id} onClick={deleteNote}>Delete</button>
        </div>
    )
}