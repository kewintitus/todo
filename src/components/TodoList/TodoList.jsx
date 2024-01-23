// import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = () => {
  const list = [
    { id: 1, title: 'Item 1', description: 'Play CSGO', status: 'TO-DO' },
    {
      id: 2,
      title: 'Item 2',
      description:
        'Play Witcher 3333333333333333333333333333333333333333333333333',
      status: 'COMPLETED',
    },
  ];
  return (
    <div className="todoList">
      {list.map((data) => {
        return <TodoItem data={data} key={data.id} />;
      })}
    </div>
  );
};

export default TodoList;
