const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

const removeItem = (item) => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};

const updateItem = (item) => {
  return {
    type: "UPDATE_ITEM",
    payload: item,
  };
};

const clearList = () => {
  return {
    type: "CLEAR_LIST",
  };
};

const loadTodo = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => {
        return dispatch({
          type: "LOAD_TODO",
          payload: todos,
        });
      });
  };
};

export { addItem, removeItem, updateItem, clearList, loadTodo };
