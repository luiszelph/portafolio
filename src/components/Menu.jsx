import React from 'react'

const Menu = ({ isMenuOpen, handleMenu }) => {
  return (
      <div 
        onClick={handleMenu}
        className='w-[69px] left-[20px] h-[47px] cursor-pointer'
      >
        <div className={
          `w-[69px] h-[9px] left-0 top-[19px] absolute bg-neutral-500 ${
          isMenuOpen && "transition-transform rotate-45"
          }
        `}>
        </div>

        {!isMenuOpen && ( 
          
           <div className='w-[69px] h-[9px] left-0 top-[38px] absolute bg-zinc-300'></div> 
        
        )}
        
        <div className={`
          w-[69px] h-[9px] left-0 top-[60px] absolute bg-zinc-300 ${
            isMenuOpen && "transition-transform rotate-[-45deg] top-[22px]"}`}
        >
        </div>
    </div>
  )
};

export default Menu;