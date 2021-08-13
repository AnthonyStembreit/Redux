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
  notes: [{
    id: 1,
    update: false,
    title: "text",
    description: "Fugiat do consequat veniam eiusmod ut fugiat fugiat nulla pariatur ipsum nostrud."
  },
  {
    id: 2,
    update: false,
    title: "note2",
    description: "Sunt exercitation anim pariatur Lorem ex id tempor proident."
  },
  {
    id: 3,
    update: false,
    title: "more",
    description: "Commodo eu irure nostrud sunt mollit in consequat proident nisi cillum mollit dolore."
  }]
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
      console.log(action.note_id)
      let newNoteArr = state.notes.filter(note => {
        return note.id !== action.note_id;
      })
      console.log(newNoteArr)
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
        console.log(action.formData)
        return{
          ...state,
          form: action.formData
        }
    default:
      return state;
  }
};

export default reducers;