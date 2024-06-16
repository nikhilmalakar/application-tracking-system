import React from 'react'

export const Hero = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:py-8 py-2'>
        <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>

            <div>
                <h1 className='text-5xl font-bold text-primary mb-3'>Find your job today!</h1>
                <p className='text-lg text-black mb-8'>Lorem ipsum lorem ipsum lorem ipsum</p>
                <button className='bg-primary text-white py-2 px-8 rounded-md'>Get Started</button>

            </div>

            <div className='hidden md:block'>
                {/* Hero section image */}
                {/* <img src={require('../images/hero.jpg')} alt='hero' className='w-full */}
                <img src={require('../../assets/img/hero_banner.jpg')} alt='hero' />

            </div>
        </div>

    </div>
  )
}
