import React, { useEffect, useReducer } from "react";
import ToDoList from "./components/TodoList";
import FormField from "./components/Form";
import "./App.css";
import { toDoReducer, initialState } from "./reducers/toDoReducer";

function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(state.toDo));
  }, [state.toDo]);

  const addItem = (event, item) => {
    console.log(state);

    event.preventDefault();
    /* const newItem = {
      name: item,
      id: Date.now(),
      checked: false
    };
    newItem.name.trim() === ""
      ? console.log("string is empty")
      : setToDo([...toDo, newItem]); */
    dispatch({ type: "ADD ITEM", payload: item });
  };

  const checkItem = id => {
    /* setToDo(
      toDo.map(a => {
        if (id === a.id) {
          return {
            ...a,
            checked: !a.checked
          };
        }
        return a;
      })
    ); */
    dispatch({ type: "CHECK ITEM", payload: id });
  };

  const clearForm = event => {
    event.preventDefault();
    /*     setToDo(state.toDo.filter(a => !a.checked));*/

    dispatch({ type: "CLEAR ITEMS" });
  };
  console.log(state.toDo);
  return (
    <div className="app">
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <div className="form-body">
        <FormField addItem={addItem} />

        <ToDoList toDo={state.toDo} checkItem={checkItem} />
        <div className="btn-con">
          <button className="clear-btn" onClick={clearForm}>
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
