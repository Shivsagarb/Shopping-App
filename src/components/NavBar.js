import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='w-3/4 m-auto flex flex-row items-center justify-between'>
        <div>
            <NavLink to="/">
                <img className='h-20 rounded-full' src="https://media.gettyimages.com/id/1308416574/vector/h-letter-shape-logo.jpg?s=612x612&w=0&k=20&c=9rxNaehUph6MsI19PUnzLfLonKvhGPpABAGabaYs610=" alt=''></img>
            </NavLink>
        </div>
        <div className='flex flex-row items-center justify-center'>
            <div className='p-3'>
                <NavLink to="/Shopping-App/">
                    <p className='text-xl text-slate-50'>Home</p>
                </NavLink>
            </div>
            <div>
                <NavLink to="/Shopping-App/cart">
                    <p className='text-3xl text-slate-50 p-3'><HiShoppingCart /></p>                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBar