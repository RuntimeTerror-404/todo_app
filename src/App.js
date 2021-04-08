import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
// import logo from "./logo.svg";
import "./App.css";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState(["abc", "def"]);
  const [input, setInput] = useState(" ");
  const addtodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
    });
    // setTodos([...todos, input]);
    setInput(" ");
  };
  // when we loads the app, we need to listen the database to fetch the todos to get them add/remove
  useEffect(() => {
    // this code will execute when App.js loads
    db.collection("todos").onSnapshot((snapshot) => {
      // console.log(setTodos(snapshot.docs.map((doc) => doc.data())));
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);
  // console.log(input);
  return (
    <div className="App">
      <h1> Todo App using REACT.JS😃🚀 </h1>
      <form>
        <FormControl>
          <InputLabel>💬Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addtodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ol>
        {todos.map((todo) => (
          <Todo text={todo} />
          // <li> {todo} </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
