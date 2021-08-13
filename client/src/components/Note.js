import {React}from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_NOTE, UPDATE_TOGGLE, FORM_CHANGE } from '../utils/actions';
import NoteForm from './NoteForm';
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
        let formData = props.note
        dispatch({type: FORM_CHANGE, formData});
    }
    return (
        props.note.update ?
        <NoteForm
        update={updateToggle}
        />
        :
        <div>
            <h2>{props.note.title}</h2>
            <p>{props.note.description}</p>
            <button value={props.note.id} onClick={deleteNote}>Delete</button>
            <button value={props.note.id} onClick={updateToggle}>Edit</button>
        </div>
    )
}