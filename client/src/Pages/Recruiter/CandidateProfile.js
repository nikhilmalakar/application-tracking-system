import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form"



export const CandidateProfile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { id } = useParams();
    const [jobs, setJobs] = useState([]);

    const handleApply = async () => {

    }
    return (
        <div className='max-w-scren-2xl  w-full md:w-4/6 lg:w-6/8 container mt-2 mx-auto xl:px-24 px-4 '>
            <div className=' bg-[#efefef] mx-auto py-12 md:px-14 px-8 rounded-lg'>

                <form onSubmit={handleSubmit()} >
                    <div className='flex flex-col lg:flex-row  gap-8'>

                        {/* JOB POSTING DETAILS */}
                        <div className='lg:w-1/2 w-full'>

                            {/* BASIC DETAILS */}
                            <div className=''>
                                <h1 className='text-xl md:text-2xl font-bold'>Abhishek Sharma</h1>
                                {/* <p className='text-secondary'>abhishek@gmail.com</p> */}
                                {/* <p className='text-sm text-gray-700'>Posted - 19/06/2024</p> */}
                            </div>

                            {/* JOB DESCRIPTION */}
                            <div className='px-1'>
                                <h2 className='mt-4 mb-2 font-bold'>Candidate Details</h2>
                                <p className='text-sm md:text-base text-justify '>Email: abhishek@gmail.com</p>
                                <p className='text-sm md:text-base text-justify '>Gender: Male</p>
                                <p className='text-sm md:text-base text-justify '>Address: A70, Tricone City, Delhi</p>
                            </div>
                            <div className='px-1'>
                                <h2 className='mt-4 mb-2 font-bold'>Application Form (R1)</h2>
                                <p className='text-sm md:text-base text-justify '>Q1: Are you proficient in Java?</p>
                                <p className='text-sm md:text-base text-justify '>Response: <span className='font-semibold'>Yes</span></p>
                                
                                <p className='text-sm md:text-base text-justify '>Q2: Are you having 2+ YOE?</p>
                                <p className='text-sm md:text-base text-justify '>Response: <span className='font-semibold'>Yes</span></p>
                                
                                <p className='text-sm md:text-base text-justify '>Q3: Are you willing to relocate?</p>
                                <p className='text-sm md:text-base text-justify '>Response: <span className='font-semibold'>Yes</span></p>
                                
                                
                            </div>
                        </div>

                        {/* CANDIDATE FORM */}
                        <div className='lg:w-1/2 w-full'>
                            <div><h1 className='text-xl font-bold text-center'>Candidate Form</h1></div>



                            {/* DYNAMIC BLOCK */}
                            <div>
                                {/* {questions.map((question, index) => (

                                    <div key={index}>
                                        <label className='block m-1 text-md'>Question {`${index + 1}`}</label>
                                        <div className='mb-2 text-lg grid grid-cols-1 md:grid-cols-2'>
                                            <input type='text' required {...register(`q${index + 1}`)} placeholder={`Question ${index + 1}`} className=' create-job-input placeholder:text-xs md:placeholder:text-sm' ></input>

                                            <div className='grid grid-cols-3 items-center justify-items-center my-2 md:my-0 ' >
                                                <div className='flex'>
                                                    <input {...register(`qa${index + 1}`, { required: true })} type="radio" value="Yes" className='mx-2' />
                                                    <p>Yes</p>
                                                </div>
                                                <div className='flex'>
                                                    <input {...register(`qa${index + 1}`, { required: true })} type="radio" value="No" className='mx-2' />
                                                    <p>No</p>
                                                </div>
                                                <div>
                                                    <box-icon size='sm' name='trash' />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))} */}
                            </div>
                            <button  className={` block border border-black bg-transparent text-black text-xs md:text-md py-3 px-12 md:px-16 rounded-md mt-4 md:mt-8 mx-auto`}>Add More Questions</button>
                        </div>
                    </div>

                    {/* Submit button */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-8'>
                        <button className='block bg-red-500 text-white text-md py-4 px-16 rounded-md'>Reject</button>
                        <button className='block bg-green-500 text-white text-md py-4 px-16 rounded-md'>Shortlist</button>
                    </div>
                </form>


                {/* <div className='text-center'>
                    <p className='hover:underline text-xs md:text-sm mt-8'>By applying to above job, you agree to our terms and conditions.</p>
                </div> */}
            </div>
        </div>
    )
}
