import React, {useEffect, useState} from 'react'
import projectTicTacToe from '../assets/projectTicTacToe.png';

const Projects = () => {

    const projects = [
    {
        description: 'Aqui va tener que ir algo de texto sobre mi personalidad' ,
        projectsImageSrc: projectTicTacToe,
        gitHubLink: 'https://github.com/luiszelph/tictactoe',
        deployLink: 'https://luiszelph.github.io/tictactoe/'
    },
    {
        description: 'Aqui va tener que ir algo de texto sobre mi personalidad' ,
        projectsImageSrc: projectTicTacToe,
        gitHubLink: 'https://github.com/luiszelph/tictactoe',
        deployLink: 'https://luiszelph.github.io/tictactoe/'
    },
    {
        description: 'Aqui va tener que ir algo de texto sobre mi personalidad' ,
        projectsImageSrc: projectTicTacToe,
        gitHubLink: 'https://github.com/luiszelph/tictactoe',
        deployLink: 'https://luiszelph.github.io/tictactoe/'
    }];

  return (
    <div 
        name="Projects"
        className='h-screen w-screen flex items-center flex-col'>
        
        <h2 className='font-semibold text-[40px]'>Projects</h2>
        <div className='mt-10 grid grid-cols-3 md:grid-cols-1'>
            {projects.map( p => (
                <div className='relative w-[400px] h-[450px] border-red-100 border-spacing-1 border p-2 bg-slate-500'>
                    <img className='object-cover' src={p.projectsImageSrc} alt=""></img>
                    <span className='flex flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                    <p className='text-white'>
                        {p.description}</p>
                        <div className="flex">
                            <a href={p.gitHubLink}>Github</a>
                            <a className='ml-4' href={p.deployLink}>Deploy</a>
                        </div>
                    </span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects