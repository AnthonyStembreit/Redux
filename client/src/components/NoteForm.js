import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FORM_CHANGE, UPDATE_NOTE, CREATE_NOTE } from '../utils/actions';

export default function NoteForm(props) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  function handleChange(){
    let formData = {
        id: state.form.id,
        title: document.getElementById("note-title").value,
        description: document.getElementById("note-content").value,
    }
    dispatch({type: FORM_CHANGE, formData})
  }
  function updateNote(){
    dispatch({type: UPDATE_NOTE})
  }
  function createNote(e){
    e.preventDefault();
    dispatch({type:CREATE_NOTE})
    document.getElementById("note-title").value = ""
    document.getElementById("note-content").value = ""
  }
  return (
    <form id="new-note-form">
      <label for="note-title" >Title</label>
      <input id="note-title" value={state.form.title} onChange={handleChange}></input>
      <label for="note-content">Note Content</label>
      <textarea id="note-content" value={state.form.description} onChange={handleChange}></textarea>
      {props.update ? <div className="footer">
        <button type="submit" value={state.form.id} onClick={updateNote}>Update</button>
        <button value={state.form.id} onClick={props.update}>Nevermind</button>
      </div> :
        <button type="submit" onClick={createNote}>Create</button>}
    </form>
  )
}