import {
    UPDATE_NOTE,
    ADD_TO_NOTES,
    REMOVE_FROM_NOTES,
    // TOGGLE_NOTE
  } from "../actions";
  
  const initialState = {
    notes: [],
    noteOpen: false
  };

export const reducers = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_NOTE:
        let newState = state.notes.map(note => {
            if(note._id === action._id){
                return action
            }
            else{
                return note
            }
          });
        return {
          ...state,
          notes: newState,
        };

    // case TOGGLE_NOTE:
    //   return {
    //     ...state,
    //     cartOpen: !state.cartOpen
    //   };
  
      case ADD_TO_NOTES:
        return {
          ...state,
          notes: [...state.cart, action.note],
        };

  
      case REMOVE_FROM_NOTES:
        let newState = state.notes.filter(note => {
          return note._id !== action._id;
        });
  
        return {
          ...state,
          notes: newState
        };
  
      default:
        return state;
    }
  };
  
  export default reducers;