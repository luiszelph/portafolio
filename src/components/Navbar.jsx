import React, { useState } from 'react'
import Menu from './Menu'

const Navbar = () => {

    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        {
            link: 'About',
            id: 1
        },
        {
            link: 'Projects',
            id: 2
        },
        {
            link: 'Experience',
            id: 3
        },
        {
            link: 'Contact',
            id: 4
        }
    ];

    return (
    <div 
        className={[
            "absolute",
            !isMenuOpen
                ? "z-[300px] absolute w-[69px] p-10 h-[47px]"
                : "z-[300px] absolute w-screen h-screen bg-[#2B2B29]"]} >
        <Menu handleMenu={() => setIsMenuOpen(!isMenuOpen)}/>
    </div>
  )
}

export default Navbar