import React from 'react'
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            userName: "",
            userEmail: "",
            userPassword: "",
            gender: "",
            address: "",
            role: "",
            isAssigned: false,
            applications: []
        }
    })

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (redirect) {
            setTimeout(() => {
                window.location.href = "/login";
            }, 4000);
        }
    }, [redirect]);

    const onSubmit = (data) => {
        console.log(data)
        // send data to backend API
        fetch("http://localhost:8080/auth/register", {
            method: "POST",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            toast.success("Sign up successful")
            setRedirect(true)
        })
        .catch((err) => {
            toast.error("Unable to signup")
            console.log(err);
        })
    }

    return (
        <div className='max-w-scren-2xl w-full md:w-4/6 lg:w-1/2 container mt-2 mx-auto xl:px-24 px-4 '>
            <div className=' bg-[#e7e7e7] mx-auto py-6 px-6 md:px-16 rounded-lg'>

                {/* FORM */}
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='flex flex-col lg:flex-row  gap-8'>

                        {/* JOB POSTING DETAILS */}
                        <div className='w-full'>
                            <div><h1 className='text-xl my-1 font-bold text-center'>Register</h1></div>
                            <div>
                                <label className='block mt-1 m-1 text-sm'>Full Name</label>
                                <input type='text' required {...register("userName")} placeholder='Ex: Abhishek Sharma' className='create-job-input placeholder:text-xs md:placeholder:text-sm'></input>
                            </div>
                            <div>
                                <label className='block mt-2 m-1 text-sm'>Email</label>
                                <input type='email' required {...register("userEmail")} placeholder='Ex: abhisheksharma@gmail.com' className='create-job-input placeholder:text-xs md:placeholder:text-sm'></input>
                            </div>
                            <div>
                                <label className='block mt-2 m-1 text-sm'>Password</label>
                                <input type='password' required {...register("userPassword")} placeholder='Create strong password' className='create-job-input placeholder:text-xs md:placeholder:text-sm'></input>
                            </div>
                            <div className='grid grid-cols-3 items-center pt-2 md:my-0 ' >
                                <label className='block mt-2 m-1 text-sm'>Gender</label>
                                <div className='flex'>
                                    <input {...register(`gender`, { required: true })} type="radio" value="Male" className='mx-2' />
                                    <p>Male</p>
                                </div>
                                <div className='flex'>
                                    <input {...register(`gender`, { required: true })} type="radio" value="Female" className='mx-2' />
                                    <p>Female</p>
                                </div>
                            </div>

                            <div>
                                <label className='block mt-2 m-1 text-sm'>Address</label>
                                <input type='text' required {...register("address")} placeholder='Ex: A70, Down-Town Street, Mumbai' className='create-job-input placeholder:text-xs md:placeholder:text-sm'></input>
                            </div>
                            <div>
                                <label className='block mt-2 m-1 text-sm'>User Type</label>
                                <select {...register("role", { required: true })} className='create-job-input'>
                                    <option value="candidate">Candidate</option>
                                    <option value="recruiter">Recruiter</option>
                                    <option value="coordinator">Coordinator</option>
                                    <option value="employer">Employer</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Submit button */}
                    <div className='flex justify-center my-8'>
                        <button className='block bg-secondary text-white text-md py-3 px-16 rounded-md'>Register</button>
                    </div>
                </form>
                <div className='text-center'>
                    <Link to='/login'><p className='hover:underline'>Already registered? Login here!</p></Link>
                </div>
            </div>
        </div>
    )
}
