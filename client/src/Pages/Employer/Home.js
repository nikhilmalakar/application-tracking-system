import React, { useEffect, useState } from 'react'
import { Hero } from '../../components/Home/Hero'
import { FeaturedJobs } from '../../components/Home/FeaturedJobs'

export const Home = () => {

  return (
    <div>
      <Hero />
      <FeaturedJobs />
    </div>
  )
}