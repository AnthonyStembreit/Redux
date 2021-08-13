import {
  INCREMENT,
  DECREMENT,
  TOGGLE,
  DELETE_NOTE,
  UPDATE_TOGGLE, 
  FORM_CHANGE,
  UPDATE_NOTE,
  CREATE_NOTE
} from "./actions";

const initialState = {
  counter: 0,
  toggle: false,
  form: {
    id: Number,
    title: "",
    description: ""
  },
  notes: []
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case TOGGLE:
      let newToggle = state.toggle ? false : true
      return {
        ...state,
        toggle: newToggle
      };

    case DELETE_NOTE:
      let newNoteArr = state.notes.filter(note => {
        return note.id !== action.note_id;
      })
      return {
        ...state,
        notes: newNoteArr
      };

    case UPDATE_TOGGLE:
      let toggleArr = state.notes.map(note => {
        if (note.id === action.note_id && note.update === false) {
          return { ...note, update: true }
        }else  if (note.id === action.note_id && note.update === true) {
          return { ...note, update: false }
        }
        else {
          return note
        }
      })
      return {
        ...state,
        notes: toggleArr
      };

      case FORM_CHANGE:
        return{
          ...state,
          form: action.formData
        }

      case UPDATE_NOTE:
        let updatedNotes = state.notes.map(note =>{
          if(note.id === state.form.id){
            return ({...state.form, update:false})
          }
         else{
           return note
         }
        })
         return{
           ...state,
           notes: updatedNotes
         }

      case CREATE_NOTE: 
         let newNote = state.notes
         newNote[newNote.length] = ({...state.form, update: false, id: newNote.length + 1 })
         return{
           ...state,
           notes: newNote
         }
        
    default:
      return state;
  }
};

export default reducers;