import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { search, clear } from '../Store/articlesSlice';
import { useSelector,  useDispatch} from 'react-redux';

const HeroSec = () => {
  const dispatch = useDispatch()
  const articles = useSelector((state)=> state.articles)
  const [psearchval,setPSearchval] = useState('')

  const searchArticles = (val)=>{
    setPSearchval(val)
   let prev = articles?.data?.data
   if(prev?.length){
   let searched = prev.filter((item)=>item?.title?.toLowerCase().includes(val.toLowerCase()))
    dispatch(search(searched))
   }
  }
  return (
    <div className='herosec' style={{width:"100%",display:"flex",justifyContent:"space-between",textAlign:"center", paddingTop:"30px",paddingBottom:"30px",paddingLeft:"150px",paddingRight:"150px" }}>
        <Typography color={'secondary'} variant="h5" component="h2">
          {psearchval ? `Search Results: ${psearchval}`: 'All Articles' }
           
        </Typography>
      <div className='searchcontainer'>
      <input className='search' placeholder='Search articles'  type="text" onChange={(e)=>searchArticles(e.target.value)}/>
        <SearchIcon className='searchicon'/>
      </div>

        
    </div>
  )
}

export default HeroSec