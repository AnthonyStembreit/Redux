import {
  DELETE_NOTE,
  UPDATE_TOGGLE, 
  FORM_CHANGE,
  UPDATE_NOTE,
  CREATE_NOTE
} from "./actions";

const initialState = {
  toggle: {
    formOpen:false,
    noteId: Number
  },
  form: {
    id: Number,
    title: "",
    description: ""
  },
  notes: JSON.parse(localStorage.getItem("notes")) ?  JSON.parse(localStorage.getItem("notes")) : []
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_NOTE:
      let newNoteArr = state.notes.filter(note => {
        return note.id !== action.note_id;
      })
      localStorage.setItem("notes", JSON.stringify(newNoteArr))
      return {
        ...state,
        notes: newNoteArr
      };

    case UPDATE_TOGGLE:
      if(state.toggle.formOpen === true)
        return{
          ...state,
          toggle:{
            formOpen: false,
            noteId: Number
          },
          form: {
            id: Number,
            title: "",
            description: ""
          }
        }
        else{
        return {
          ...state,
          toggle:{
            formOpen: true,
            noteId: action.note_id
          }
        }
      }

      case FORM_CHANGE:
        return{
          ...state,
          form: action.formData
        }

      case UPDATE_NOTE:
        let updatedNotes = state.notes.map(note =>{
          if(note.id === state.form.id){
            return ({...state.form})
          }
         else{
           return note
         }
        })
        localStorage.setItem("notes", JSON.stringify(updatedNotes))
         return{
           ...state,
           notes: updatedNotes
         }

      case CREATE_NOTE: 
         let newNote = state.notes
         newNote[newNote.length] = ({...state.form, id: newNote.length + 1 })
         localStorage.setItem("notes", JSON.stringify(newNote))
         return{
           ...state,
           notes: newNote
         }
        
    default:
      return state;
  }
};

export default reducers;