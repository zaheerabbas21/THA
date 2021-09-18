const addNote = (name: string) => {
  return {
    type: "ADD_NOTE",
    payload: name,
  };
};

const deleteNote = (id: number) => {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
};

const clickedNote = (id: number) => {
  return {
    type: "CLICKED_NOTE",
    payload: id,
  };
};

export { addNote, deleteNote, clickedNote };
