import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Modalcon from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { SingleArticle } from '../Store/articlesSlice';
import ScrollDialog from './DailogCom';

export default function BlogCards2({value}) {
  const dispatch = useDispatch()
  const articles = useSelector((state)=> state.articles)
  const [open, setOpen] = React.useState(false);
  const [article, setArticle] = React.useState();
  const handleOpen = async(value) => 
  {
    setOpen(true)
   let singleart =  await dispatch(SingleArticle(value))
  
   setArticle(singleart.payload.blog)
  }
  
  const handleClose = () => setOpen(false);

  return (
    <>
    <Card onClick={()=>handleOpen(value.slug)} className='cardcontainer' sx={{ maxWidth: 340,height:300,borderRadius: '16px', }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={value.thumb}
          alt="green iguana"
        />
        <CardContent>
          <Typography className='cardtitle' gutterBottom  component="div">
            {value.title}
          </Typography>
          <Typography sx={{paddingTop:"23px"}} variant="body2" color="text.secondary">
            {value.short_description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        {/* <Modalcon article={article} Open={open} close={handleClose} /> */}
        <ScrollDialog article={article} Open={open} close={handleClose} />
    </>
  );
}