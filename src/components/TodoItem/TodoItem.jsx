import { IconButton } from '@mui/material';
import './TodoItem.css';
import { Delete } from '@mui/icons-material';

const TodoItem = (props) => {
  return (
    <div className="todoItem">
      <input
        checked={props.data?.status === 'COMPLETED'}
        className="checkBox"
        type="checkbox"
      />
      <div className="todoDetails  ">
        <div className={`${props.data?.status === 'COMPLETED' && 'doneClass'}`}>
          {props?.data?.title}
        </div>
        <div
          className={`descriptionbox ${
            props.data?.status === 'COMPLETED' && 'doneClass'
          }`}
        >
          {props?.data?.description}
          <span className="tooltiptext">{props?.data?.description}</span>
        </div>
      </div>
      <div className="selectStatus">
        {props?.data?.status === 'COMPLETED' ? (
          <div className="doneLabel">Done</div>
        ) : (
          <select>
            <option value="TO-DO">Todo</option>
            <option value="IN-PROGRESS">In Progress</option>
            {/* <option value="COMPLETED">Completed</option> */}
          </select>
        )}
      </div>
      <div className="deleteIconArea">
        <IconButton className="deleteIcon">
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default TodoItem;
