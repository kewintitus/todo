import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Edit } from '@mui/icons-material';
import './EditModal.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditModal(props) {
  const { data, setTitle, setDescription } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const titleRef = React.useRef();
  const descriptionRef = React.useRef();

  const updateTask = async () => {
    try {
      await axios.patch('http://localhost:3001/tasks', {
        id: data?._id,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        status: data?.status,
        modifiedOn: new Date(),
      });

      setTitle(titleRef.current.value);
      setDescription(descriptionRef.current.value);
      handleClose();
      toast.success('Updated successfully');
    } catch (error) {
      console.log(error);
      toast.error('Not able to update todo');
    }
  };

  return (
    <div>
      <Button size="small" startIcon={<Edit />} onClick={handleOpen}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>Update Todo</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateTask();
            }}
            className="editFormArea"
          >
            <input
              required
              ref={titleRef}
              defaultValue={data.title}
              type="text"
            />
            <textarea
              defaultValue={data.description}
              type="textarea"
              rows="3"
              ref={descriptionRef}
              required
            />
            <div className="btnContainer">
              <button className="btn cancelBtn" onClick={handleClose}>
                Cancel
              </button>
              <button className="btn saveBtn" type="submit">
                Save
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
