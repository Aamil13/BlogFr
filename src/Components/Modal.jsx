import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import parse from 'html-react-parser';

const style = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '55%',
    height:"85%",
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '12px',
    // p: 4,
    // overflowY:"scroll",
    // overflowX:"hidden"
  };

const Modalcon = ({Open,close,article}) => {

   
  return (
    <div>
    {/* <Button onClick={handleOpen}>Open modal</Button> */}
    <Modal
      open={Open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <HighlightOffIcon onClick={()=>close()} sx={{position:"absolute",top:"-3%",right:"-4%"}}/>
        <img style={{width:"100%",height:'240px',objectFit:"cover",borderRadius:"12px 12px 0px 0px"}} src={article?.cover} alt="" />
        <Typography id="modal-modal-title" sx={{ padding: 2, }} variant="h6" component="h2">
          {article?.metatitle}
        </Typography>
        
        <Typography id="modal-modal-description" sx={{ padding:2,overflow:"scroll" }}>
          {parse(`${article?.body}`)}
        </Typography>

          
      
       
      </Box>
    </Modal>
  </div>
  )
}

export default Modalcon