export const initialState = {
  toDo: localStorage.getItem("toDo")
    ? JSON.parse(localStorage.getItem("toDo"))
    : [],
  id: Date.now(),
  checked: false
};

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "ADD ITEM":
      const newItem = {
        name: action.payload,
        id: Date.now(),
        checked: false
      };
      if (newItem.name.trim() === "") {
        console.log("string is empty");
      } else {
        return {
          ...state,
          toDo: [...state.toDo, newItem]
        };
      }

    case "CHECK ITEM":
      return {
        ...state,
        toDo: state.toDo.map(a => {
          if (action.payload === a.id) {
            return {
              ...a,
              checked: !a.checked
            };
          }
          return a;
        })
      };
    case "CLEAR ITEMS":
      return {
        ...state,
        toDo: state.toDo.filter(a => !a.checked)
      };
    default:
      return state;
  }
};
