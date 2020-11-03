import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por:
          <a className='px-2 hover:underline' href='https://www.facebook.com/adilson.domicianojunior'>Adilson D Jr</a> / 
          <a className='px-2 hover:underline' href='https://linkedin.com/in/adilsondjr'>Linkedin</a> / 
          <a className='px-2 hover:underline' href='https://github.com/adilsondjr'>Github</a>
          <div className='mt-2'>
            <img className='inline p-4' src='/logo_semana_fsm.png' alt='Semana FSM' />
            <img className='inline p-4' src='/logo_devpleno.png' alt='DevPleno' />
          </div>
      </div>
    </div>
  )
}

export default Footer