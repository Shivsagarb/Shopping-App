import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { useState, useEffect } from 'react';

const CartPage = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    setTotalAmount( cart.reduce( (acc, current) => acc + current.price, 0));
  }, [cart])

  return (
    <div className='w-3/5 m-auto'>
    {
      cart.length > 0 ? 
      ( 
        <div className='flex lg:flex-row md:flex-col sm:flex-col p-5 gap-16'>
          <div className='w-2/3'>
            {
              cart.map( (item, index) => {
                return (
                  <CartItem item={item} key={item.id} index={index} />
                )
              })
            }
          </div>
          <div className='w-1/3 flex flex-col justify-between'> 
            <div>
              <h3 className='text-xl font-medium py-1'>Your Cart</h3>
              <h1 className='text-5xl py-1'>SUMMARY</h1>
              <p className='py-2 text-lg font-medium'>Total Items: <span>{cart.length}</span></p>
            </div>
            <div>
              <p className='text-xl font-bold py-2'>Total Amount: $<span>{totalAmount}</span></p>
              <button className='w-full text-2xl text-white font-medium rounded-lg py-2 bg-[#fd530d]'>Checkout Now</button>
            </div>
          </div>
        </div>
      ) : 
      (
        <div className='h-[1000px] w-full flex flex-col justify-center items-center'>
          <h2 className='text-3xl font-medium py-5'>Cart Empty</h2>
          <NavLink to={"/Shopping-App/"}>
            <button className='text-center text-xl bg-sky-900 text-slate-50 border-solid border-2 border-black rounded-full px-5 py-2 hover:bg-sky-700 hover:scale-110 transition duration-300'>Shop Now</button>
          </NavLink>
        </div>
      )
    }
    </div>
  )
}

export default CartPage