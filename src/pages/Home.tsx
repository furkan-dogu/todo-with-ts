import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";
import axios from "axios";
import { SweetAlertIcons, notify } from "../helper/sweetalert";

// interface ITodoType {
//   id: string | number;
//   isDone: boolean;
//   task: string;
//   todo?: string;
// }

const url: string = import.meta.env.VITE_BASE_URL;

const Home = () => {
  const [todo, setTodo] = useState<ITodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<ITodoType[]>(url);
      setTodo(data);
    } catch (error) {
      console.log(error);
    }
  };

  //   type AddFunc = (text:string) => Promise<void>

  const todoAdd: AddFunc = async (text) => {
    try {
      await axios.post(url, { task: text, isDone: false });
      notify("Todo Successfully Added", SweetAlertIcons.SUCCESS)
    } catch (error) {
      console.log(error);
      notify("Failed to Add Todo", SweetAlertIcons.ERROR)
    } finally {
      getTodos();
    }
  };

  const toggleTodo: ToggleFunc = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
      notify("The Process was Successful", SweetAlertIcons.SUCCESS)
    } catch (error) {
      console.log(error);
      notify("Process Failed", SweetAlertIcons.ERROR)
    } finally {
      getTodos();
    }
  };

  const deleteTodo: DeleteFunc = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      notify("Todo Deleted Successfully", SweetAlertIcons.SUCCESS)
    } catch (error) {
      console.log(error);
      notify("Todo Failed to Delete", SweetAlertIcons.ERROR)
    } finally {
      getTodos();
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Typography color={"error"} align="center" variant="h2" component={"h1"}>
        TodoApp with TypeScript
      </Typography>
      <AddTodo todoAdd={todoAdd} />
      <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default Home;
