import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';


const CartItem = ({item}) => {

    const dispatch = useDispatch();
    console.log(item);

    function removeHandler() {
        dispatch(remove(item.id));
        toast.error('Item removed successfully');
    }

  return (
    <div className='flex flex-row gap-4 border-b-2 border-slate-400 py-3'>
        <div className='w-1/3 flex justify-center items-center'>
            <img className='h-fit' src={item.image} alt=''/>
        </div>
        <div className='w-2/3'>
            <h1 className='text-xl font-medium text-justify py-2'>{item.title}</h1>
            <p className='text-justify py-2'>{item.description}</p>
            <div className='flex flex-row justify-between items-center py-4'>
                <div className='font-bold py-2 text-[#fd530d]'>${item.price}</div>
                <div className='text-2xl rounded-full text-red-700 bg-red-300 p-3 hover:cursor-pointer' onClick={removeHandler}><MdDelete /></div>
            </div>
        </div>
    </div>
  )
}

export default CartItem