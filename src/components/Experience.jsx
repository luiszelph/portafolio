import React from 'react'
import ruhrpumpen from '../assets/experiences/rp.png';
import tdisa from '../assets/experiences/tdisa.png';
import innatos from '../assets/experiences/innatos.png';

const Experience = () => {

    const experience = [
        {
            name: 'ruhrpumpen',
            imageSrc: ruhrpumpen
        },
        {
            name: 'tdisa',
            imageSrc: tdisa
        },
        {
            name: 'innatos',
            imageSrc: innatos
        }
    ];

  return (
    <div name="Experience" className='mt-40 flex flex-col items-center justify-center'>
        
        <h2 className='font-semibold text-[40px]'>Experience</h2>

        <div className='w-screen grid-cols-3 gap-8 grid mt-[5%] pt-[10%] pb-[10%] bg-[#2B2B29] p-10'>
            {experience.map(t => (
                <div key={t.name} className='w-[100px] h-[100px]'>
                    <img src={t.imageSrc} alt="experience"/>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Experience;