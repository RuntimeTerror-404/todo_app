import {
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
  Button,
} from "@material-ui/core";
import React from "react";
import "./Todo.css";
import db from "./firebase";

function Todo(props) {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.todo.todo}
            secondary="dummy headline...⏰"
          />
        </ListItem>
        <Button
          color="secondary"
          variant="outlined"
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          Delete Me ✖️
        </Button>
      </List>
    </div>
  );
}

export default Todo;
