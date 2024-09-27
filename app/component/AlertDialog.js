import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { asyncThunkDeleteUsers } from '@/store/createAsyncThunk';

export default function AlertDialog({ id }) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(false);
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (id) => {
    if (id !== null) {
      dispatch(asyncThunkDeleteUsers(id))
      // const getUsers = async () => {
      //   try {
      //     const response = await axios.delete(`http://localhost:8080/users/${id}`)
      //     if (response?.status === 200) {
      //       setData(response?.data)
      //     }
      //     console.log(response)
      //   } catch (err) {
      //     console.error(err)
      //   }
      // }
      // getUsers()
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Detele
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => handleClose(null)}>No</Button>
          <Button onClick={() => handleClose(id)} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
