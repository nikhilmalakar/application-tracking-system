import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoURL from '../assets/img/logo.jpeg'

export const AllPostedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/jobs/all-jobs").then(res => res.json()).then(
            data => {
                const newData = data.slice(0, 6);
                setJobs(newData)
            }
        );
    }, []);

    return (
        <div className=''>
            <h1 className='text-center text-xl md:text-2xl font-bold text-primary mt-8 md:mt-6'>Join Our Team</h1>
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
                    <img src={logoURL} alt={job.companyName} className='rounded-full w-12' />
                </div>
                <div>
                    <div className='flex items-center'>
                        <box-icon size='18px' name='time'></box-icon>
                        <span className='pl-1'>{job.employmentType} </span>
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
                    <span className='pl-2'>{job.location} </span>
                </div>
                <Link to={`/current-job/${job._id}`}>
                    <button className='hidden lg:block bg-primary text-white text-sm py-1 px-4 rounded-md'>Apply Now</button>
                </Link>
                            
            </div>
        </div>
    )
}