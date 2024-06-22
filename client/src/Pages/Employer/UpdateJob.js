import React, { useEffect } from 'react'
import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


export const UpdateJob = () => {

    const {id} = useParams();
    const [job, setJob] = useState()

    const initialValue = []

    useEffect(() => {
        fetch(`http://localhost:8080/jobs/current-job/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setJob(result);
                initialValue = [{
                    jobTitle: result.jobTitle,
                    employmentType: result.employmentType,
                    location: result.location,
                    salary: result.salary,
                    description: result.description,
                    applicationForm: result.applicationForm,
                }]
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues:{
           initialValue
        }
    })

    useEffect(()=> {
        fetch(`http://localhost:8080/jobs/current-job/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setJob(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    const onSubmit = (data) =>{ 
        console.log(data)
        
        // send data to backend API
        fetch("http://localhost:8080/jobs/post-job", {
            method: "POST",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            toast.success("Job Updated Successfully")
            window.location.href = '/all-jobs';
        })
        .catch((error) => {
            console.log(error);
            toast.error("Failed to update job");
        });

    }

    // DYNAMIC CANDIDATE FORM QUESTION
    const [questions, setQuestions] = useState([{ question: '', answer: '' }]);
    const [questionSize, setQuestionSize] = useState(0);
    const addQuestion = () => {
        setQuestionSize(questionSize+1);
        setQuestions([...questions, { question: '', answer: '' }]);
    };
    const handleDeleteQuestion = (index) => {
        const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(newQuestions);
        setQuestionSize(questionSize-1);
    };


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
                                <input type='text' required {...register("jobTitle")} placeholder='Ex: Full Stack Developer' className='create-job-input placeholder:text-xs md:placeholder:text-sm'></input>
                            </div>
                            <div>
                                <label className='block m-1 text-md'>Employment Type</label>
                                <input type='text' required {...register("employmentType")} placeholder='Ex: Internship, Part Time, Full Time' className='create-job-input placeholder:text-xs md:placeholder:text-sm'></input>
                            </div>
                            <div>
                                <label className='block m-1 text-md'>Location</label>
                                <input type='text' required {...register("location")} placeholder='Ex: Hyderabad' className='create-job-input placeholder:text-xs md:placeholder:text-sm'></input>
                            </div>
                            <div>
                                <label className='block m-1 text-md'>Expected Salary <span className='text-sm'>(in LPA)</span></label>
                                <input type='text' required {...register("salary")} placeholder='Ex: 20' className='create-job-input placeholder:text-xs md:placeholder:text-sm'></input>
                            </div>
                            <div>
                                <label className='block m-1 text-md'>Job Description</label>
                                <textarea className='create-job-input placeholder:text-xs md:placeholder:text-sm' rows={4} placeholder='Job Description and Requirements' required {...register("description")} />
                            </div>
                        </div>

                        {/* CANDIDATE FORM */}
                        <div className='lg:w-1/2 w-full'>
                            <div><h1 className='text-xl font-bold text-center'>Candidate Form</h1></div>



                            {/* DYNAMIC BLOCK */}
                            <div>
                                {questions.map((question, index) => (

                                    <div key={index}>
                                            <label className='block m-1 text-md'>Question {`${index+1}`}</label>
                                            <div className='mb-2 text-lg grid grid-cols-1 md:grid-cols-2'>
                                                <input type='text' required {...register(`applicationForm.question.${index}`)} placeholder={`Question ${index + 1}`} className=' create-job-input placeholder:text-xs md:placeholder:text-sm' ></input>

                                                <div className='grid grid-cols-3 items-center justify-items-center my-2 md:my-0 ' >
                                                    <div className='flex'>
                                                        <input {...register(`applicationForm.answer.${index}`, { required: true })} type="radio" value="Yes" className='mx-2' />
                                                        <p>Yes</p>
                                                    </div>
                                                    <div className='flex'>
                                                        <input {...register(`applicationForm.answer.${index}`, { required: true })} type="radio" value="No" className='mx-2' />
                                                        <p>No</p>
                                                    </div>
                                                    <div onClick={() => handleDeleteQuestion(index)}>
                                                        <box-icon size='sm' name='trash'/>
                                                    </div>
                                                </div>

                                            </div>
                                    </div>
                                ))}
                            </div>
                                <button onClick={addQuestion} className={`${questionSize === 4? `hidden` : ``} block border border-black bg-transparent text-black text-xs md:text-md py-3 px-12 md:px-16 rounded-md mt-4 md:mt-8 mx-auto`}>Add More Questions</button>
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
