import * as React from 'react';
import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { Button, IconButton } from '@mui/material';
import { Delete, MoreVert } from '@mui/icons-material';
import './ActionPopover.css';
import EditModal from '../editModal/EditModal';

export default function ActionPopover(props) {
  const { data, deleteTask, setTitle, setDescription } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  //   const updateTask = async () => {};

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        className="vertIcon"
      >
        <MoreVert />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className="popoverArea">
          {/* <Button size="small" startIcon={<Edit />}>
            Edit
          </Button> */}
          <EditModal
            setTitle={setTitle}
            setDescription={setDescription}
            data={data}
          />
          <Button onClick={deleteTask} size="small" startIcon={<Delete />}>
            Delete
          </Button>
        </div>
      </Popover>
    </div>
  );
}
