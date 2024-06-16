import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"


export const PostJob = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className='max-w-scren-2xl container mt-2 mx-auto xl:px-24 px-4 '>
            <div className='bg-[#e7e7e7] py-6 px-4 lg:px-16 rounded-lg'>

                {/* FORM */}
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='flex flex-col lg:flex-row  gap-8'>

                        {/* JOB POSTING DETAILS */}
                        <div className='lg:w-1/2 w-full'>
                            <div><h1 className='text-xl font-bold text-center'>Job Details</h1></div>
                            <div>
                                <label className='block m-1 text-md'>Job Title</label>
                                <input type='text' required {...register("jobTitle")} placeholder='Ex: Full Stack Developer' className='create-job-input'></input>
                            </div>
                            <div>
                                <label className='block m-1 text-md'>Employment Type</label>
                                <input type='text' required {...register("employmentType")} placeholder='Ex: Internship, Part Time, Full Time' className='create-job-input'></input>
                            </div>
                            <div>
                                <label className='block m-1 text-md'>Location</label>
                                <input type='text' required {...register("location")} placeholder='Ex: Hyderabad' className='create-job-input'></input>
                            </div>
                            <div>
                                <label className='block m-1 text-md'>Expected Salary <span className='text-sm'>(in LPA)</span></label>
                                <input type='text' required {...register("salary")} placeholder='Ex: 20' className='create-job-input'></input>
                            </div>
                            <div>
                                <label className='block m-1 text-md'>Job Description</label>
                                <textarea className='create-job-input' rows={4} placeholder='Job Description and Requirements' required {...register("description")} />
                            </div>
                        </div>

                        {/* CANDIDATE FORM */}
                        <div className='lg:w-1/2 w-full'>
                            <div><h1 className='text-xl font-bold text-center'>Candidate Form</h1></div>
                            <div className=''>
                                <label className='block m-1 text-md'>Location</label>
                                <div className='mb-2 text-lg grid grid-cols-1 md:grid-cols-2'>
                                    <input type='text' required {...register("location")} placeholder='Ex: Hyderabad' className=' create-job-input'></input>

                                    <div className='grid grid-cols-2 items-center justify-items-center ' >
                                        <div className='flex'>
                                            <input {...register("candidateName", { required: true })} type="radio" value="Yes" className='mx-2' />
                                            <p>Yes</p>
                                        </div>
                                        <div className='flex'>
                                            <input {...register("candidateName", { required: true })} type="radio" value="No" className='mx-2' />
                                            <p>No</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Candidate Name */}  
                            <button className='block bg-primary text-white text-md py-4 px-16 rounded-md'>Create Job Post</button>
                        
                        </div>

                    </div>
                    
                    {/* Submit button */}
                    <div className='flex justify-center my-8'>
                        <button className='block bg-primary text-white text-md py-4 px-16 rounded-md'>Create Job Post</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
