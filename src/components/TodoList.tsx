import { Grid, Typography } from "@mui/material";
import React from "react";
import Items from "./Items";
import "./style.css"

interface ITodoList {
  todo: ITodoType[];
  toggleTodo: ToggleFunc;
  deleteTodo: DeleteFunc;
}

const TodoList: React.FC<ITodoList> = ({
  todo,
  toggleTodo,
  deleteTodo,
}: ITodoList) => {
  const progressTodos = todo.filter((item) => !item.isDone);

  const completedTodos = todo.filter((item) => item.isDone);

  return (
    <Grid
      container
      sx={{
        d: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        mt: 3,
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-progress"
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
        }}
      >
        <Typography
          color="secondary"
          align="center"
          variant="h4"
          className="title"
        >
          InProgress Todos
        </Typography>
        {progressTodos.length ? (
          progressTodos.map((item) => (
            <Items
              key={item.id}
              item={item}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <Typography color={"error"} mt={3}>
            No Progress Todos
          </Typography>
        )}
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-completed"
        sx={{
          border: "1px solid green",
          borderRadius: "0.5rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
        }}
      >
        <Typography
          color="success.main"
          align="center"
          variant="h4"
          className="title"
        >
          Completed Todos
        </Typography>
        {completedTodos.length ? (
          completedTodos.map((item) => (
            <Items
              key={item.id}
              item={item}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <Typography color={"error"} mt={3}>
            No Completed Todos
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
