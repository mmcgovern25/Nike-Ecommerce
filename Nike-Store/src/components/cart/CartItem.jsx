import React from 'react'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

const CartItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity }  }) => {
  return (
    <>
      <div className='flex items-center justify-between w-full px-5'>
        <div className='flex items-center gap-5'>
          <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className='w-36 h-auto object-fill lg:w-28'
            />
          </div>
          <div className='grid items-center gap-4'>
            <div className='grid items-center leading-none'>
              <h1 className='font-medium text-lg text-sky-900 lg:text-sm'>{title}</h1>
              <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>

            </div>
            <div className='flex items-center justify-around w-full'>
              <button type='button' className='bg-theme-cart rounded'><MinusIcon className='w-5 h-5 lg:w-4' /></button>
              <div className=''>{cartQuantity}</div>
              <button type='button' className=''><PlusIcon className='w-5 h-5' /></button>
            </div>
          </div>
        </div>
        <div className=''>
          <div className=''>
            <h1>{price * cartQuantity}</h1>
          </div>
          <div className=''>
            <button type='button' className=''><TrashIcon className='w-5 h-5'/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
