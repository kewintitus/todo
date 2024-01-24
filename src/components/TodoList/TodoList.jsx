// import React from 'react';
import { useEffect, useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
import axios from 'axios';
const TodoList = (props) => {
  const [todoList, setTodoList] = useState([]);
  const fetchTodo = async () => {
    const data = await axios.get(`http://localhost:3001/tasks`);
    console.log(data);
    setTodoList(data.data);
  };
  useEffect(() => {
    fetchTodo();
    return () => {};
  }, [props.newTodo]);
  // const list = [
  //   { id: 1, title: 'Item 1', description: 'Play CSGO', status: 'TO-DO' },
  //   {
  //     id: 2,
  //     title: 'Item 2',
  //     description:
  //       'Play Witcher 3333333333333333333333333333333333333333333333333',
  //     status: 'COMPLETED',
  //   },
  // ];
  return (
    <div className="todoList">
      {todoList.map((data) => {
        return <TodoItem fetchTodo={fetchTodo} data={data} key={data._id} />;
      })}
    </div>
  );
};

export default TodoList;
