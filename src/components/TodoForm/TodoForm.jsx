// import React from 'react';
import { useRef } from 'react';
import './TodoForm.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const TodoForm = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const closeForm = () => {
    props.setIsFormOpen(false);
  };

  const createTodo = async () => {
    try {
      const data = await axios.post('http://localhost:3001/tasks', {
        title: titleRef?.current?.value,
        description: descriptionRef.current.value,
        createdOn: new Date(),
        modifiedOn: new Date(),
      });
      console.log(data);
      props.setNewTodo(data);
      titleRef.current.value = '';
      descriptionRef.current.value = '';
      closeForm();
      toast.success('To do created');
    } catch (error) {
      console.log(error);
      toast.error('Error in creating Todo');
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createTodo();
      }}
      className={`formArea ${props.isFormOpen ? 'formOpen' : 'formClosed'}`}
    >
      {/* <label htmlFor="title"></label> */}
      <div className={`inputArea `}>
        <input
          ref={titleRef}
          className=""
          type="text"
          name=""
          id="title"
          placeholder="Title"
          required
        />
      </div>
      <div className="inputArea">
        <textarea
          ref={descriptionRef}
          placeholder="Description"
          name=""
          id=""
          rows="3"
          required
        ></textarea>
      </div>
      <div className="btnContainer">
        {/* <button className="btn cancelBtn" onClick={closeForm}>
          Cancel
        </button> */}
        <button className="btn saveBtn" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
