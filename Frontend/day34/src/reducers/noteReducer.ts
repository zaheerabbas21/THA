interface addNoteAction {
  type: string;
  payload: number;
}

interface deleteNoteAction {
  type: string;
  payload: number;
}

interface clickedNoteAction {
  type: string;
  payload: number;
}

type ActionType = addNoteAction | deleteNoteAction | clickedNoteAction;

const notesReducer = (state: any = [], action: ActionType) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    case "DELETE_NOTE":
      return state.filter(
        (_: string, index: number) => index !== action.payload
      );

    // case "CLICKED_NOTE":
    //   return state.filter(
    //     (_: string, index: number) => if(index === action.payload){}
    //   );

    default:
      return state;
  }
};

export default notesReducer;
