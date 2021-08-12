import {React} from 'react';

export default function NoteForm(){
    return (
      
      <form id="new-note-form">
          <label for="note-title">Title</label>
          <input id="note-title"></input>
          <label for="note-content">Note Content</label>
          <textarea id="note-content"></textarea>
      </form>
    )
}