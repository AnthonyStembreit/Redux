import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_TOGGLE, FORM_CHANGE } from '../utils/actions';
import Note from '../components/Note';
import NoteForm from '../components/NoteForm';

export default function ViewNotes() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    function updateToggle(e) {
        e.preventDefault();
        let note_id = JSON.parse(e.target.value)
        if(state.toggle.formOpen === true && state.toggle.noteId === note_id){
            dispatch({ type: UPDATE_TOGGLE, note_id });
        }
        else if(state.toggle.formOpen === true && state.toggle.noteId !== note_id){
           return "can only edit one note at a time"
        }else if(state.toggle.formOpen === false){
            dispatch({ type: UPDATE_TOGGLE, note_id });
            let formData = state.notes[note_id-1]
            dispatch({type: FORM_CHANGE, formData});
        }
    }
    return (
        <div>
            {state.notes.map(note => {
                if (note.id === state.toggle.noteId) {
                    return <NoteForm update={updateToggle}/>
                } else {
                    return <Note note={note}
                    update={updateToggle} />
                }
            })}
        </div>
    )
}