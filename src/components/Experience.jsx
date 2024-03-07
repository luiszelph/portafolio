import React from 'react'
import javascript from '../assets/technologies/javascript.png';
import css from '../assets/technologies/css.png';
import github from '../assets/technologies/github.png';
import html from '../assets/technologies/html.png';
import reactjs from '../assets/technologies/reactjs.png';

const Experience = () => {

  const technologies = [
    {
        name: 'javascript',
        imageSrc: javascript
    },
    {
        name: 'css',
        imageSrc: css
    },
    {
        name: 'github',
        imageSrc: github
    },
    {
        name: 'html',
        imageSrc: html
    },
    {
        name: 'reactjs',
        imageSrc: reactjs
    }
  ];

  return (
    <div name="Experience" className='mt-80 flex flex-col items-center h-screen w-screen'>
        
        <h2 className='font-semibold text-[40px]'>Experience</h2>

        <div className='w-screen grid-cols-3 grid mt-[5%] pt-[10%] pb-[10%] bg-[#2B2B29] p-10'>
            {technologies.map(t => (
                <div key={t.name} className='w-[100px] h-[100px]'>
                    <img src={t.imageSrc} alt="technologie"/>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Experience;