import {  Search } from '@mui/icons-material'
import { Badge} from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrappern">
          <div className="left">
            <span className='span'>EN</span>
            
            <div className="inputContainer">
              <input className="input"></input>
            <Search style={{color:"gray",fontSize:16}}/>  
            </div>
          </div>
          <div className="center">
            <h1 className="logo">
              Dark_Shop
            </h1>
          </div>
          <div className="right">
            <span className="buttonn">REGISTER</span>
            <span className="buttonn">LOG_IN</span>
            <Badge badgeContent={4} color='primary'>
            <ShoppingCartOutlinedIcon/>

            </Badge>
          </div>
        </div>
    </div>
  )
}

export default Navbar