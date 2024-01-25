import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';



const Products = ({post}) => {

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    function addHandler() {
        dispatch(add(post));
        toast.success('Item added successfully');
    }
    function removeHandler() {
        dispatch(remove(post.id));
        toast.error('Item removed successfully');
    }

  return (
    <div className='rounded-lg p-5 flex flex-col justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 transition duration-300 ease-in'>
        <h2 className='font-bold text-center text-2xl py-1 w-full truncate'>{post.title}</h2>
        <p className='h-[100px] py-1 text-sm text-justify'>{post.description.split(' ').slice(0,15).join(' ') + ".."}</p>
        <div className='h-[200px] py-4'>
            <img className='max-h-full w-full' src={post.image} alt=''></img>
        </div>
        <div className='flex flex-row w-full justify-between pt-5'>
            <div className='flex items-center pl-3 text-[#fd530d] font-bold'>${post.price}</div>
            <div className='hover:text-slate-50 transition duration-300'>
            {
                cart.some( (p) => p.id === post.id) ? 
                (<button className='bg-sky-900 border-black border-2 rounded-full py-1 px-3 text-slate-50' onClick={removeHandler}>Remove Item</button>) : 
                (<button className='border-black border-2 rounded-full py-1 px-3 hover:bg-sky-900' onClick={addHandler}>Add to Cart</button>)
            }
            </div>
        </div>
    </div>
  )
}

export default Products;