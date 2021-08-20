import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_NOTE } from '../utils/actions';

export default function Note(props) {
    const dispatch = useDispatch();

    function deleteNote(e) {
        e.preventDefault();
        let note_id = JSON.parse(e.target.value)
        dispatch({ type: DELETE_NOTE, note_id });
    }
  
    return (
        <div id="note">
            <h2>{props.note.title}</h2>
            <p>{props.note.description}</p>
            <button value={props.note.id} onClick={deleteNote}>Delete</button>
            <button value={props.note.id} onClick={(e)=>{props.update(e)}}>Edit</button>
        </div>
    )
}