import React from "react";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";

interface IItems {
  item: ITodoType;
  toggleTodo: ToggleFunc;
  deleteTodo: DeleteFunc;
}

const Items: React.FC<IItems> = ({ item, toggleTodo, deleteTodo }) => {
  return (
    <ListItem
      disableGutters
      sx={{ cursor: "pointer", padding: "1rem" }}
      secondaryAction={
        <IconButton sx={{ "&:hover": { color: "red" } }} aria-label="delete">
          <DeleteIcon onClick={() => deleteTodo(item.id)} />
        </IconButton>
      }
    >
      <ListItemText
        onClick={() => toggleTodo(item)}
        primary={item.task || item.todo}
        sx={{ wordWrap: "break-word" }}
      />
    </ListItem>
  );
};

export default Items;
