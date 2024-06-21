import React from 'react'
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Link, useParams } from 'react-router-dom'

export const ApplicationForm = () => {

    const { id } = useParams();
    const [job, setJob] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            candidateID: "667336c6ab92f179a717d0ec",
            jobID: job._id,
            applicationStatus: "active",
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

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (redirect) {
            setTimeout(() => {
                window.location.href = "/";
            }, 200000);
        }
    }, [redirect]);

    const onSubmit = (data) => {
        const newData = { ...data, jobID: id };

        // send data to backend API
        fetch("http://localhost:8080/application/post-application", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newData),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setRedirect(true);
            });

        fetch("http://localhost:8080/jobs/update-job-by-candidate", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                jobID: id,
                candidateID: "667336c6ab92f179a717d0ec",
                status: "active"                
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                // Working fine
                console.log(result);
                setRedirect(true);
            });

        fetch("http://localhost:8080/users/update-user-by-candidate", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                jobID: id,
                candidateID: "667336c6ab92f179a717d0ec",
                status: "active"                
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                // Applications empty
                console.log(result);
                setRedirect(true);
            });
    };

    useEffect(() => {
        try {
            fetch(`http://localhost:8080/jobs/current-job/${id}`).then((res) => res.json()).then((data) => setJob(data))
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className='max-w-scren-2xl w-full md:w-4/6 lg:w-1/2 container mt-2 mx-auto xl:px-24 px-4 '>
            <div className=' bg-[#e7e7e7] mx-auto py-6 px-6 md:px-16 rounded-lg'>

                {/* FORM */}
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='flex flex-col lg:flex-row  gap-8'>

                        {/* JOB POSTING DETAILS */}
                        <div className='w-full'>
                            <div>
                                <h1 className='text-xl my-1 font-bold text-center'>Application Form</h1>
                                <h1 className='text-md mb-2 font-bold text-center text-gray-700'>{job.jobTitle} Role</h1>
                            </div>
                            <h1 className='text-sm italic mt-4'>Answer below questions to proceed</h1>

                            {/* {job.applicationForm.question.map((question, index) => (
                                <RenderQuestion key={index} question={question} />
                            ))} */}
                            {job.applicationForm && job.applicationForm.question.map((question, index) => (
                                <RenderQuestion {...register(`applicationForm.${index}.question`)} key={index} index={index} question={question} register={register} />

                            ))}

                        </div>

                    </div>

                    <div className='flex justify-center my-8'>
                        <button className='submit submit-btn block bg-primary text-white text-md py-3 px-16 rounded-md'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function RenderQuestion({ index, question, register }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center pt-2 md:my-0'>
            <label className='block mt-2 m-1 text-sm' >{index + 1}. {question}</label>
            <div className='grid grid-cols-2 items-center justify-items-center'>
                <div className='flex'>
                    <input {...register(`applicationForm.${index}.answer`, { required: true })} type="radio" value="Yes" className='mx-2' />
                    <p>Yes</p>
                </div>
                <div className='flex'>
                    <input {...register(`applicationForm.${index}.answer`, { required: true })} type="radio" value="No" className='mx-2' />
                    <p>No</p>
                </div>
            </div>
        </div>
    );
}
