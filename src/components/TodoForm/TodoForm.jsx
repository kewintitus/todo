// import React from 'react';
import './TodoForm.css';

const TodoForm = (props) => {
  const closeForm = () => {
    props.setIsFormOpen(false);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={`formArea ${props.isFormOpen ? 'formOpen' : 'formClosed'}`}
    >
      {/* <label htmlFor="title"></label> */}
      <div className={`inputArea `}>
        <input
          className=""
          type="text"
          name=""
          id="title"
          placeholder="Title"
        />
      </div>
      <div className="inputArea">
        <textarea placeholder="Description" name="" id="" rows="3"></textarea>
      </div>
      <div className="btnContainer">
        <button className="btn cancelBtn" onClick={closeForm}>
          Cancel
        </button>
        <button className="btn saveBtn" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
