import React from 'react'
import projectTicTacToe from '../assets/projectTicTacToe.png';
const Projects = () => {

const projects = [{}];

  return (
    <div name="Projects"
        className='h-screen w-screen flex items-center flex-col'>
        
        <h2 className='font-semibold text-[40px]'>Projects</h2>
        <div className='mt-10 grid grid-cols-3 md:grid-cols-1'>
            <div className='relative w-[400px] h-[450px] border-red-100 border-spacing-1 border p-2 bg-slate-500'>
                <img className='object-cover' src={projectTicTacToe} alt=""></img>
            </div>
            <span className='p-4 absolute backdrop-blur hover:blur-[300px] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <p className='text-white'>
                    Aqui va tener que ir algo de texto sobre mi personalidad</p>
            </span>
            {/* <div className="flex">
                <a href="">Github</a>
                <a href="">Deploy</a>
            </div> */}
        </div>
    </div>
  )
}

export default Projects