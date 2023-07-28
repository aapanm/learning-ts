import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

const getData = async (url: string) => {
  const res = await axios.get(url);
  const resData = res.data as Todo;

  console.log(`
  todo id: ${resData.id},
  todo title: ${resData.title},
  todo status: ${resData.completed}
  `);
};

getData(url);
