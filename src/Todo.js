import {
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
} from "@material-ui/core";
import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.text} secondary="dummy headline...⏰" />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
