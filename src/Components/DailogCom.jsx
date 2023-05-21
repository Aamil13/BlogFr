import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import parse from 'html-react-parser';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function ScrollDialog({Open,close,article}) {
 


  return (
    <div>
      <Dialog
       id='dailogcss'
        open={Open}
        onClose={close}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <HighlightOffIcon  onClick={()=>close()} sx={{position:"absolute",top:"1%",right:"1%"}}/>
        <img style={{width:"100%",height:'240px',objectFit:"cover",borderRadius:"12px 12px 0px 0px"}} src={article?.cover} alt="" />
        <DialogTitle id="scroll-dialog-title">{article?.metatitle}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            
            tabIndex={-1}
          >
            {parse(`${article?.body}`)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
      
        </DialogActions>
      </Dialog>
    </div>
  );
}