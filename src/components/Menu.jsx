import React from 'react'

const Menu = ({ handleMenu }) => {
  return (
      <div 
        onClick={handleMenu}
        className='w-[69px] left-[20px] h-[47px] cursor-pointer'>
        <div className='w-[69px] h-[9px] left-0 top-[38px] absolute bg-zinc-300'></div>
        <div className='w-[69px] h-[9px] left-0 top-[19px] absolute bg-neutral-500'></div>
        <div className='w-[69px] h-[9px] left-0 top-[60px] absolute bg-zinc-300'></div>
    </div>
  )
};

export default Menu;