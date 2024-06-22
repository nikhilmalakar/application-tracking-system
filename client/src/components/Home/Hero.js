import React from 'react'
import { OurCompanies } from './OurCompanies'

export const Hero = () => {
  return (
    <div>
      <div className='hidden md:block top-0 -mt-14 p-0 absolute object-cover -z-10'>
        {/* Hero section image */}
        {/* <img src={require('../images/hero.jpg')} alt='hero' className='w-full */}
        <img src={require('../../assets/img/banner_1.png')} alt='hero' />

      </div>
      <div className='max-w-screen-2xl container mx-auto px-4 md:py-8 py-2'>
        <div className='grid my-32 md:grid-cols-2 gap-4 justify-center items-center'>

          <div>
            <h1 className='text-5xl font-bold text-primary mb-3'>Find your job today!</h1>
            <p className='text-lg text-black mb-8'>Lorem ipsum lorem ipsum lorem ipsum</p>
            <button className='bg-secondary text-white py-3 px-12 rounded-md'>Get Started</button>

          </div>

        </div>

        <OurCompanies />

      </div>
    </div>
  )
}
