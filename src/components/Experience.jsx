import React from 'react'
import ruhrpumpen from '../assets/experiences/rp.png';
import tdisa from '../assets/experiences/tdisa.png';
import innatos from '../assets/experiences/innatos.png';

const Experience = () => {

    const experience = [
        {
            name: 'ruhrpumpen',
            description: 'Colabore en un proyecto web de Enero a Agosto del 2022, en Ruhrpumpen tuve la oportunidad de realizar mis practicas profeionales y aprender C#, JS, HTML, Bootstrap, VB, consultas en SQL.' ,
            imageSrc: ruhrpumpen
        },
        {
            name: 'tdisa',
            description: 'Colabore en proyectos web en el área medica durante los meses de Agosto a Diciembre del 2022, en TDI tuve la oportunidad de desarrollar mis habilidades y conocimientos den C#, JS, aprender ASP .NET, consultas en SQL.' ,
            imageSrc: tdisa
        },
        {
            name: 'innatos',
            description: 'Colabore en proyectos web principalmente con el Framework Angular y AngularJS en un periodo de 11 meses desde Enero a Noviembre del 2023, tuve la oportunidad de aprender a utilizar Angular y AngualrJS, al igual que trabajar con APIs en C#, consulta en SQL.' ,
            imageSrc: innatos
        }
    ];

  return (
    <div name="Experience" className='h-screen w-screen flex items-center flex-col'>
        
        <h2 className='font-semibold text-[40px]'>Experience</h2>

        <div className='gap-4 mt-2 grid grid-cols-3 md:grid-cols-1'>
            {experience.map( e => (
                <div className='relative w-[300px] h-[335px] border-red-100 border-spacing-1 border p-2 bg-[#2B2B29]'>
                    <img className='object-cover items-center' src={e.imageSrc} alt=""></img>
                    <span className='flex flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                    <p className='text-white'>
                        {e.description}</p>
                    </span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience;