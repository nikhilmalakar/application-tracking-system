import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import LogoURL from '../../assets/img/logo.jpeg'
import { useForm } from 'react-hook-form'
import { SimilarJobs } from '../SimilarJobs'

export const JobDetails = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            candidateID: "",
            jobID: "",
            applicationStatus: "active",
            resume: null,
            applicationForm: [{
                question: "",
                answer: ""
            }],
            candidateFeedback: [{
                question: "",
                answer: ""
            }]
        }
    })

    const randomNum = Math.floor(Math.random() * (200 - 20 + 1) + 20)
    const { id } = useParams();
    const [job, setJob] = useState();
    const [applicants, setApplicants] = useState();
    const [file, setFile] = useState();

    const [loginData, setLoginData] = useState();
    
    useEffect(() => {
        let token = localStorage.getItem("user");
        const user = JSON.parse(token);
        setLoginData(user)
        console.log(user);
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8080/jobs/current-job/${id}`).then(res => res.json()).then(
            data => { setJob(data); console.log(data); }
        )
    }
        , []);

    useEffect(() => {
        if (job && job.applicants && job.applicants.length > 0) {
            const fetchApplicantsData = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/users/all-users`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch applicants data');
                    }
                    const data = await response.json();

                    const filteredApplicants = data.filter(app => {
                        return job.applicants.some(jobApplicant => jobApplicant.applicant === app._id);
                    });

                    setApplicants(filteredApplicants);
                    console.log(filteredApplicants);
                    // console.log(jobs.applicants);
                } catch (error) {
                    console.error('Error fetching applicants data:', error);
                }
            };

            fetchApplicantsData();
        }
    }, [job]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setFile(file.name);
        const formData = new FormData();
        formData.append("resume", file);
        fetch(`http://localhost:8080/upload/resume/${applicants._id}`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
    }

    const onSubmit = (data) => {
        console.log(data);
        // fetch(`http://localhost:8080/upload/resume/${applicants._id}`, {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => res.json())
        //     .then((result) => {
        //         console.log(result);
        //     });
    }

    return (
        <div className='max-w-scren-2xl  w-full md:w-5/6 lg:w-6/8 container mt-2 mx-auto xl:px-24 px-4 '>

            <div className=' bg-[#efefef] mx-auto py-12 md:px-14 px-8 rounded-lg'>

                <div className='flex flex-col lg:flex-row  gap-8'>

                    {/* JOB DETAILS */}
                    {
                        job &&
                        <div className='w-full'>

                            {/* BASIC DETAILS */}
                            <div className='flex items-center flex-wrap justify-center md:justify-normal'>
                                <img src={LogoURL} alt="Logo" className="rounded-full w-20 md:w-24 h-auto" />
                                <div className='mx-4 my-3 text-center md:text-left md:my-0'>
                                    <h1 className='text-xl md:text-2xl font-bold'>{job.jobTitle}</h1>
                                    <p className='text-secondary'>Humgrow.com</p>
                                    <p className='text-sm text-gray-700'>Posted - 19/06/2024</p>
                                </div>
                            </div>

                            {/* ADDITIONALS */}
                            <div className='my-4 gap-2 grid grid-cols-2 sm:grid-cols-4'>
                                <div className='bg-blue-300 rounded-lg py-4 md:py-5 text-center'>
                                    <h2 className='text-xs md:text-md font-semibold text-gray-700'>Job Type</h2><p className='text-sm md:text-lg font-bold'>{job.employmentType}</p>
                                </div>
                                <div className='bg-green-300 rounded-lg py-4 md:py-5 text-center'>
                                    <h2 className='text-xs md:text-md font-semibold text-gray-700'>Salary</h2><p className='text-sm md:text-lg font-bold'>{job.salary}</p>
                                </div>
                                <div className='bg-blue-300 rounded-lg py-4 md:py-5 text-center'>
                                    <h2 className='text-xs md:text-md font-semibold text-gray-700'>Location</h2><p className='text-sm md:text-lg font-bold'>{job.location}</p>
                                </div>
                                <div className='bg-green-300 rounded-lg py-4 md:py-5 text-center'>
                                    <h2 className='text-xs md:text-md font-semibold text-gray-700'>Applicants</h2><p className='text-sm md:text-lg font-bold'>{randomNum}</p>
                                </div>
                            </div>

                            {/* JOB DESCRIPTION */}
                            <div className='px-1'>
                                <h2 className='my-2 font-bold'>Job Description</h2>
                                <p className='text-sm md:text-base text-justify '>
                                    {job.description}
                                </p>
                            </div>
                        </div>
                    }
                </div>

                {/* Submit button */}
                <form className='mt-8' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className=' font-bold my-4'>Upload Resume to Apply<span className=' text-red-600'>*</span></h2>
                    <div className='px-2 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4'>

                        <div className='w-full md:w-5/6'>
                            <label class="sr-only">Choose file</label>
                            <input type="file" onChange={handleFileUpload} {...register("resume")} id="file-input" class="block w-full cursor-pointer border border-primary shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-primary file:text-white file:border-0 file:me-4 file:py-2 file:px-3" />
                        </div>

                        {
                            job && applicants &&
                                job.applicants.some(jobApplicant => {
                                    applicants.some(app => {

                                        return jobApplicant.applicant === app._id
                                    })
                                }) ?
                                <Link to={`/application-form/${job._id}`}>
                                    <div className='flex justify-center'>
                                        <button className='block bg-primary text-white text-md py-2 px-12 md:px-16 rounded-md'>Apply Now</button>
                                    </div>
                                </Link>
                                :
                                // <Link to={`/application-form/${job._id}`}>
                                <div className='flex justify-center'>
                                    <button className='block bg-primary text-white text-md py-2 px-12 md:px-16 rounded-md'>Apply Now</button>
                                </div>
                            // </Link>
                            // <p>You already applied here</p>
                        }
                    </div>
                </form>
                {job && job.applicants && job.applicants.length > 0 && (
                    <div className="mt-4">
                        <h2 className="font-bold">Uploaded Resume:</h2>
                        <p>{file}</p>
                    </div>
                )}
                <div className='text-center'>
                    <p className='hover:underline text-xs md:text-sm mt-8'>By applying to above job, you agree to our terms and conditions.</p>
                </div>
            </div>
            
            <SimilarJobs />
        </div>
    )
}
