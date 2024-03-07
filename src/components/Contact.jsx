import React from 'react'

const Contact = () => {

  return (
    <div name="Contact" className='w-screen h-screen flex items-center flex-col'>
        
        <h2 className='font-semibold text-[40px]'>Contact</h2>

        <form className='flex flex-col items-center justify-center'>
            <input type="text" classname="border border-slate-800 mt-4"></input>
            <input type="text" classname="border border-slate-800 mt-4"></input>
            <input type="text" classname="border border-slate-800 mt-4"></input>
            <button type="submit" classname="border border-slate-800 mt-4">Enviar</button>
        </form>
    </div>
  )
}

export default Contact;