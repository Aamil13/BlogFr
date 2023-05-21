import React from 'react'
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { clear, fetchArticles } from '../Store/articlesSlice';


const Paginate = () => {
    const dispatch = useDispatch()
    const articles = useSelector((state)=> state.articles)

    const applyPagination = async(val)=>{
        dispatch(clear())
        dispatch(fetchArticles(val))
    }
  return (
    <div style={{display:'flex', justifyContent:'center',padding:"10px"}}>
    <Pagination count={articles?.data?.total_page || 1} color="primary" onChange={(e)=>applyPagination(e.target.textContent)}/>
    </div>
  )
}

export default Paginate