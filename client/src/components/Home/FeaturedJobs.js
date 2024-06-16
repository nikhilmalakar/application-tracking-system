import React from 'react'
import { useState, useEffect } from 'react';

export const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("featuredJobs.json").then(res => res.json()).then(
            data => setJobs(data)
        )
    }
        , []);

    return (
        <div className=''>
            <h1 className='text-center text-xl md:text-2xl font-bold text-primary mt-8 md:mt-6'>Our Featured Jobs</h1>
            <div className='w-full grid sm:grid-cols-2 md:grid-cols-3  gap-4'>
                {jobs.map((job, key) => <Card key={key} job={job} />)}
            </div>
        </div>
    )
}

function Card({ job }) {
    return (
        <div className='border shadow-lg card'>
            {/* Card Header */}
            <div className='flex items-center gap-3'>
                <div>
                    {/* company image */}
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png' alt={job.companyName} className='w-12' />
                </div>
                <div>
                    <div className='flex items-center'>
                        <box-icon size='18px' name='building'></box-icon>
                        <span className='pl-1'>{job.companyName} </span>
                    </div>
                    <h1 className='font-bold text-md lg:text-lg'>{job.jobTitle}</h1>
                </div>
            </div>
            <div>
                <p className='text-sm py-4'>{job.description}</p>
            </div>
            {/* Footer - apply now and location */}
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <box-icon size='19px' name='pin'></box-icon>
                    <span className='pl-2'>{job.jobLocation} </span>
                </div>
                    
                <button className='hidden lg:block bg-primary text-white text-sm py-1 px-4 rounded-md'>Apply Now</button>
                            
            </div>
        </div>
    )
}