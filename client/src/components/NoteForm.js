import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FORM_CHANGE, UPDATE_NOTE, CREATE_NOTE } from '../utils/actions';

export default function NoteForm(props) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  function handleChange(){
    let formData = {
        id: state.form.id,
        title: document.querySelector(".note-title").value,
        description: document.querySelector(".note-content").value,
    }
    dispatch({type: FORM_CHANGE, formData})
  }
  function updateNote(){
    dispatch({type: UPDATE_NOTE})
  }
  function createNote(){
    dispatch({type:CREATE_NOTE})
    document.querySelectorAll(".note-title").value = ""
    document.querySelectorAll(".note-content").value = ""
  }
  return (
    <form id="new-note-form">
      <label htmlFor="note-title">Title</label>
      <input type="text" className="note-title" name="note-title" value={state.form.title} onChange={handleChange}></input>
      <label htmlFor="note-content">Note Content</label>
      <textarea className="note-content"  name="note-content" value={state.form.description} onChange={handleChange}></textarea>
      {props.update ? <div className="footer">
        <button type="submit" value={state.form.id} onClick={updateNote}>Update</button>
        <button value={state.form.id} onClick={(e)=>{props.update(e)}}>Nevermind</button>
      </div> :
        <button type="submit" onClick={createNote}>Create</button>}
    </form>
  )
}