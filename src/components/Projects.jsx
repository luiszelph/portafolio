import React, {useEffect, useState} from 'react'
import projectTicTacToe from '../assets/projectTicTacToe.png';
import projectCalculator from '../assets/projectCalculator.png';

const Projects = () => {

    const projects = [
    {
        description: 'Mi primer proyecto realizado en react, un simple juego de tictactoe.' ,
        projectsImageSrc: projectTicTacToe,
        gitHubLink: 'https://github.com/luiszelph/tictactoe',
        deployLink: 'https://luiszelph.github.io/tictactoe/'
    },
    {
        description: 'Una pequeña calculadora.' ,
        projectsImageSrc: projectCalculator,
        gitHubLink: 'https://github.com/luiszelph/calculator',
        deployLink: 'https://luiszelph.github.io/calculator/'
    }
    // ,{
    //     description: 'Aqui va tener que ir algo de texto sobre mi personalidad' ,
    //     projectsImageSrc: projectTicTacToe,
    //     gitHubLink: 'https://github.com/luiszelph/tictactoe',
    //     deployLink: 'https://luiszelph.github.io/tictactoe/'
    // }
    ];

  return (
    <div 
        name="Projects"
        className='h-screen w-screen flex items-center flex-col'>
        
        <h2 className='font-semibold text-[40px]'>Projects</h2>
        <div className='gap-4 mt-2 grid grid-cols-3 md:grid-cols-1'>
            {projects.map( p => (
                <div className='relative w-[300px] h-[335px] border-red-100 border-spacing-1 border p-2 bg-slate-500'>
                    <img className='object-cover' src={p.projectsImageSrc} alt=""></img>
                    <span className='flex flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                    <p className='text-white'>
                        {p.description}</p>
                        <div className="flex">
                            <a href={p.gitHubLink} target="_blank">Github</a>
                            <a className='ml-4' target="_blank" href={p.deployLink}>Deploy</a>
                        </div>
                    </span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects