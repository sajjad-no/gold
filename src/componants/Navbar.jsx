import React from 'react';
import { AiOutlineSketch } from "react-icons/ai";

function Navbar() {
  return (
    
    <div className='bg-gray-200 h-24  flex justify-between items-center'>
      <div className='ml-4'>
        <AiOutlineSketch size={50} className='text-gray-500 hover:text-gray-800 transition duration-300' />
      </div>
      <ul className='flex flex-row-reverse gap-10 p-3'>
        <li className='hover:text-gray-500 transition duration-300'>
          فروش طلا
        </li>
        <li className='hover:text-gray-500 transition duration-300'>
          خرید کهنه طلا
        </li>
        <li className='hover:text-gray-500 transition duration-300'>
          خرید طلا
        </li>
        <li className='hover:text-gray-500 transition duration-300'>
          ماشین حساب
        </li>
      </ul>
    </div>
  )
}

export default Navbar;