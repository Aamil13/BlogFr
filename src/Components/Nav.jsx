import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import logo from "/src/logo.png"



const Nav = () => {
    
  return (
   <AppBar sx={{position:'sticky',bgcolor:"white",height:"50px"}}>
    <Toolbar>
        <img style={{width:'20px', marginBottom:"14px"}} src={logo} alt="" />
    </Toolbar>
   </AppBar>
  )
}

export default Nav