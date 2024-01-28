import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";
import axios from "axios";

interface ITodoType {
  id: string | number;
  isDone: boolean;
  task: string;
  todo?: string;
}

const url: string = import.meta.env.VITE_BASE_URL;

const Home = () => {
  const [todo, setTodo] = useState<ITodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<ITodoType[]>(url);
      setTodo(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

//   type AddFunc = (text:string) => Promise<void>

  const todoAdd:AddFunc = async (text) => {
    try {
        await axios.post(url, {task:text, isDone:false})
    } catch (error) {
        console.log(error);
    } finally {
        getTodos()
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Typography color={"error"} align="center" variant="h2" component={"h1"}>
        TodoApp with TypeScript
      </Typography>
      <AddTodo todoAdd={todoAdd} />
      <TodoList />
    </Container>
  );
};

export default Home;
