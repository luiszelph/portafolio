import React from 'react'
import ruhrpumpen from '../assets/experiences/rp.png';
import tdisa from '../assets/experiences/tdisa.png';
import innatos from '../assets/experiences/innatos.png';

const Experience = () => {

    const experience = [
        {
            name: 'ruhrpumpen',
            description: 'Realice practicas profesionales de Enero a Agosto del 2022.' ,
            imageSrc: ruhrpumpen
        },
        {
            name: 'tdisa',
            description: 'Realice practicas profesionales de Enero a Agosto del 2022.' ,
            imageSrc: tdisa
        },
        {
            name: 'innatos',
            description: 'Realice practicas profesionales de Enero a Agosto del 2022.' ,
            imageSrc: innatos
        }
    ];

  return (
    <div name="Experience" className='mt-40 flex flex-col items-center justify-center'>
        
        <h2 className='font-semibold text-[40px]'>Experience</h2>

        <div className='w-screen grid-cols-3 gap-8 grid mt-[5%] pt-[10%] pb-[10%] bg-[#2B2B29] p-10'>
            {experience.map(t => (
                <div key={t.name} className='w-[300px] h-[300px]'>
                    {/* <p className='w-[100px] text-white text-center'>
                        {t.description}
                    </p> */}
                    <img src={t.imageSrc} alt="experience"/>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Experience;