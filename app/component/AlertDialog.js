import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { asyncThunkDeleteUsers } from '@/store/createAsyncThunk';
import SharedButton from './SharedComponent/Button';

export default function AlertDialog({ id }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (id) => {
    if (id !== null) {
      dispatch(asyncThunkDeleteUsers(id))
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <SharedButton text='Detele' onClick={handleClickOpen} />
     
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
