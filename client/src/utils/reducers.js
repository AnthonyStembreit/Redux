import {
  INCREMENT,
  DECREMENT,
  TOGGLE
} from "./actions";

const initialState = {
  counter: 0,
  toggle: false,
  notes: ["text", "note2", "more"]
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
    default:
      return state;
  }
};

export default reducers;