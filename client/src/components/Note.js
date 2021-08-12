import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_NOTE, UPDATE_TOGGLE } from '../utils/actions';
export default function Note(props) {
    const dispatch = useDispatch();
    function deleteNote(e) {
        e.preventDefault();
        let note_id = JSON.parse(e.target.value)
        dispatch({ type: DELETE_NOTE, note_id });
    }
    function updateToggle(e) {
        e.preventDefault();
        let note_id = JSON.parse(e.target.value)
        dispatch({ type: UPDATE_TOGGLE, note_id });
    }
    return (
        props.note.update ?
        <div>
            <input value={props.note.title}></input>
            <textarea value={props.note.description}></textarea>
            <button value={props.note.id}>Update</button>
            <button value={props.note.id} onClick={updateToggle}>Nevermind</button>
        </div>
        :
        <div>
            <h2>{props.note.title}</h2>
            <p>{props.note.description}</p>
            <button value={props.note.id} onClick={deleteNote}>Delete</button>
            <button value={props.note.id} onClick={updateToggle}>Update</button>
        </div>
    )
}