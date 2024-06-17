import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form"

export const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        // send data to backend API
        // fetch("http://localhost:8080/job/post-job", {
        //     method: "POST",
        //     headers: {'content-type' : 'application/json'},
        //     body: JSON.stringify(data)
        // })
        // .then((res) => res.json())
        // .then((result) => {
        //     console.log(result);
        // })
    }

    return (
        <div className='max-w-scren-2xl w-full md:w-4/6 lg:w-1/2 container mt-2 mx-auto xl:px-24 px-4 '>
            <div className=' bg-[#e7e7e7] mx-auto py-6 px-6 md:px-16 rounded-lg'>

                {/* FORM */}
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='flex flex-col lg:flex-row  gap-8'>

                        {/* JOB POSTING DETAILS */}
                        <div className='w-full'>
                            <div><h1 className='text-xl my-1 font-bold text-center'>Login</h1></div>
                            
                            <div>
                                <label className='block mt-2 m-1 text-sm'>Email</label>
                                <input type='email' required {...register("employmentType")} placeholder='Ex: abhisheksharma@gmail.com' className='create-job-input placeholder:text-xs md:placeholder:text-sm'></input>
                            </div>
                            <div>
                                <label className='block mt-2 m-1 text-sm'>Password</label>
                                <input type='password' required {...register("location")} placeholder='Enter your password' className='create-job-input placeholder:text-xs md:placeholder:text-sm'></input>
                            </div>

                        </div>
                    </div>

                    {/* Submit button */}
                    <div className='flex justify-center my-6'>
                        <button className='block bg-primary text-white text-md py-3 px-16 rounded-md'>Login</button>
                    </div>
                </form>
                <div className='text-center'>
                    <Link to='/register'><p className='hover:underline'>New user? Register here!</p></Link>
                </div>
            </div>
        </div>
    )
}
