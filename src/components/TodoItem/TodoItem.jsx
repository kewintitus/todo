// import { IconButton } from '@mui/material';
import './TodoItem.css';
// import { Delete } from '@mui/icons-material';
import axios from 'axios';
import { useRef, useState } from 'react';
import ActionPopover from '../ActionPopover/ActionPopover';
import { Bounce, toast } from 'react-toastify';

const TodoItem = (props) => {
  const [title, setTitle] = useState(props?.data?.title);
  const [description, setDescription] = useState(props?.data?.description);
  const [status, toggleStatus] = useState(props?.data?.status);
  const progressRef = useRef();

  const deleteTask = async () => {
    // console.log();
    try {
      await axios.delete(`http://localhost:3001/tasks?id=${props?.data?._id}`);
      props?.fetchTodo();

      toast.success('To do deleted successfully');
    } catch (error) {
      console.log(error);
      toast.error('Error in creating Todo', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };
  const updateStatus = async () => {
    try {
      const data = await axios.patch('http://localhost:3001/tasks', {
        id: props?.data?._id,
        title: props?.data?.title,
        description: props?.data?.description,
        status: status === 'done' ? 'todo' : 'done',
        modifiedOn: new Date(),
      });
      toast.success('Updated Successfully');
      // console.log(data.data);
      // setTitle(data.data.title);
      toggleStatus(data.data.status);
    } catch (error) {
      console.log(error);
      toast.error('Error during updation');
    }
  };
  const updateProgress = async () => {
    try {
      await axios.patch('http://localhost:3001/tasks', {
        id: props?.data?._id,
        title: props?.data?.title,
        description: props?.data?.description,
        status: progressRef.current.value,
        modifiedOn: new Date(),
      });
      toast.success('Updated Successfully');
    } catch (error) {
      console.log(error);
      toast.error('Error during updation');
    }
  };
  return (
    <div className="todoItem">
      <input
        onClick={updateStatus}
        defaultChecked={props.data?.status === 'done'}
        className="checkBox"
        type="checkbox"
      />
      <div className="todoDetails  ">
        <div className={`${status === 'done' && 'doneClass'}`}>{title}</div>
        <div className={`descriptionbox ${status === 'done' && 'doneClass'}`}>
          {description}
          <span className="tooltiptext">{description}</span>
        </div>
      </div>
      <div className="selectStatus">
        {status === 'done' ? (
          <div className="doneLabel">Done</div>
        ) : (
          <select
            onChange={updateProgress}
            ref={progressRef}
            defaultValue={status}
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            {/* <option value="done">done</option> */}
          </select>
        )}
      </div>
      <div className="deleteIconArea">
        <ActionPopover
          data={props.data}
          updateTask={updateProgress}
          deleteTask={deleteTask}
          setTitle={setTitle}
          setDescription={setDescription}
        />
        {/* <IconButton className="deleteIcon">
          <Delete />
        </IconButton> */}
      </div>
    </div>
  );
};

export default TodoItem;
