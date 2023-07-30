import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url: string = "https://jsonplaceholder.typicode.com/todos/1";

const getData = async (url: string): Promise<void> => {
  const res = await axios.get(url);
  const resData: Todo = res.data;
  console.log(resData);
};

getData(url);
