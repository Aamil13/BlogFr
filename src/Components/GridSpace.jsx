import * as React from 'react';
import Grid from '@mui/material/Grid';
import BlogCards2 from "./BlogCards2"



import { useDispatch,useSelector } from 'react-redux';
import { fetchArticles } from '../Store/articlesSlice';



export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(4);

  const dispatch = useDispatch()
  const articles = useSelector((state)=> state.articles)
  // console.log('articles',articles)

  React.useEffect(() => {
    
  dispatch(fetchArticles())
    
  }, [])
  



  return (
    <div >
     
    <Grid sx={{ flexGrow: 1, }} container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container justifyContent="center" sx={{paddingBottom:"20px"}}  spacing={spacing}>
          {articles?.searchedData?.length ?
          articles?.searchedData?.map((val)=>(
            <Grid key={val.id} item>
              <BlogCards2 value={val} />
            </Grid>
          ))
          :
          articles?.data?.data?.map((value) => (
            <Grid key={value.id} item>
              <BlogCards2 value={value} />
            </Grid>
          ))}
        </Grid>
      </Grid>    
    </Grid>
    </div>

  );
}
