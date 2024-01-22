import { styled } from '@mui/material/styles';
import { Add, Close } from '@mui/icons-material';
import { Button } from '@mui/material';

// const styles = {
//   customButton: {
//     backgroundColor: 'red',
//     color: 'white',
//   },
// };
const ColorButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#2c3035',
  '&:hover': {
    backgroundColor: '#53585f',
    // backgroundColor: '#303842',
  },
  //   startIcon: <Add />,
}));

const AddButton = ({ isFormOpen, setIsFormOpen }) => {
  return (
    <ColorButton
      onClick={() => {
        setIsFormOpen(!isFormOpen);
        console.log(isFormOpen);
      }}
      startIcon={isFormOpen ? <Close /> : <Add />}
      variant="contained"
    >
      Add Todo
    </ColorButton>
  );
};

export default AddButton;
