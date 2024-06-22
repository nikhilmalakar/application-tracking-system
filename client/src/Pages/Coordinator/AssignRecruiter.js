import React from 'react'
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useParams } from 'react-router-dom'

export const AssignRecruiter = () => {

    const { id } = useParams();
    const [job, setJob] = useState();
    const [recruiters, setRecruiters] = useState([]);
    const [selectedRecruiter, setSelectedRecruiter] = useState();

    const placeholderQuestions = [
        "Willing to relocate?",
        "Sufficient experience?",
        "Recommended?",
        "Good fit for the role?",
        "Strong problem-solving?"
    ]

    useEffect(() => {
        try {
            fetch(`http://localhost:8080/jobs/current-job/${id}`).then((res) => res.json()).then((data) => setJob(data))
            fetch(`http://localhost:8080/users/all-users`).then((res) => res.json()).then((data) => {
                let recruiterData = data.filter((user) => user.isAssigned === false && user.role === "recruiter");
                setRecruiters(recruiterData);
            })
        } catch (error) {
            console.log(error);
        }
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            jobID: "",
            recruiterID: "",
            feedbackForm:[""]
        }
    })

    const onSubmit = (data) => {
        console.log("Form submitted");
        const newData = {...data, jobID:id};
        console.log(newData);
        fetch("http://localhost:8080/recruiter/post-recruiter", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newData)
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
        })

        console.log(data.recruiterID);

        fetch(`http://localhost:8080/users/user/${data.recruiterID}`).then((res) => res.json()).then((data) => {
            let recruiterData = data
            setSelectedRecruiter(recruiterData);
            // console.log(data);
        })
        
        fetch(`http://localhost:8080/users/update-user/${data.recruiterID}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                ...selectedRecruiter, isAssigned:true
            })
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
        })
    }

    // DYNAMIC CANDIDATE FORM QUESTION
    const [questions, setQuestions] = useState([{ question: '', answer: '' }]);
    const [questionSize, setQuestionSize] = useState(0);
    const addQuestion = () => {
        setQuestionSize(questionSize + 1);
        setQuestions([...questions, { question: '', answer: '' }]);
    };
    const handleDeleteQuestion = (index) => {
        const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(newQuestions);
        setQuestionSize(questionSize - 1);
    };


    return (
        <div className='max-w-scren-2xl w-full md:w-4/6 lg:w-6/8 container mt-2 mx-auto xl:px-24 px-4 '>
            <div className='bg-[#e7e7e7] py-8 px-4 lg:px-16 rounded-lg'>

                {/* FORM */}
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='flex flex-col lg:flex-row  gap-8'>

                        {
                            job &&
                            <div className='lg:w-1/2 w-full'>

                                {/* BASIC DETAILS */}
                                <div className='flex items-center flex-wrap justify-center md:justify-normal'>
                                    {/* <img src={LogoURL} alt="Logo" className="rounded-full w-20 md:w-24 h-auto" /> */}
                                    <div className='mx-4 my-3 text-center md:text-left md:my-0'>
                                        <h1 className='text-xl md:text-2xl font-bold'>{job.jobTitle}</h1>
                                        <p className='text-secondary'>Humgrow.com</p>
                                        <p className='text-sm text-gray-700'>Posted - 19/06/2024</p>
                                    </div>
                                </div>

                                {/* ADDITIONALS */}
                                <div className='my-4 gap-2 grid grid-cols-2 mx-0 md:mx-8 lg:mx-0'>

                                    <div className='bg-green-300 rounded-lg py-4 md:py-5 text-center'>
                                        <h2 className='text-xs md:text-md font-semibold text-gray-700'>Job Role</h2><p className='text-sm md:text-lg font-bold'>{job.jobTitle }</p>
                                    </div>
                                    <div className='bg-blue-300 rounded-lg py-4 md:py-5 text-center'>
                                        <h2 className='text-xs md:text-md font-semibold text-gray-700'>Job Type</h2><p className='text-sm md:text-lg font-bold'>{job.employmentType}</p>
                                    </div>
                                    <div className='bg-green-300 rounded-lg py-4 md:py-5 text-center'>
                                        <h2 className='text-xs md:text-md font-semibold text-gray-700'>Salary</h2><p className='text-sm md:text-lg font-bold'>{job.salary}</p>
                                    </div>
                                    <div className='bg-blue-300 rounded-lg py-4 md:py-5 text-center'>
                                        <h2 className='text-xs md:text-md font-semibold text-gray-700'>Location</h2><p className='text-sm md:text-lg font-bold'>{job.location}</p>
                                    </div>
                                </div>

                                {/* JOB DESCRIPTION */}
                                <div className='px-1'>
                                    <h2 className='my-2 text-sm font-bold'>Job Description</h2>
                                    <p className='text-sm md:text-base text-justify '>
                                        {job.description}
                                    </p>
                                </div>
                                <div className='mt-4  md:mx-0'>
                                    <div>
                                        <label className='block mt-2 m-1 text-sm font-bold '>Assign Recruiter</label>
                                        <select {...register(`recruiterID`)} className='create-job-input'>
                                            {recruiters.map((recruiter, index) => (
                                                <option key={index}  value={recruiter._id}>{recruiter.userName}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <hr className="mt-8 h-0.5 border-t-0 bg-primary opacity-10 lg:hidden" />
                            </div>
                        }


                        {/* CANDIDATE FORM */}
                        <div className='lg:w-1/2 w-full md:mt-0'>
                            <div className='text-center'>
                                <h1 className='text-lg md:text-xl font-bold'>Create Feedback Form</h1>
                                <p className='text-xs mb-6 italic' >Question should permit yes/no responses only.</p>
                            </div>



                            {/* DYNAMIC BLOCK */}
                            <div className=' justify-items-center ml-4 md:ml-8'>
                                {questions.map((question, index) => (

                                    <div key={index} className=''>
                                        <label className='block m-1 text-md'>Question {`${index + 1}`}</label>
                                        <div className='mb-2 text-lg grid items-center'>
                                            <div className='flex items-center justify-center'>
                                                <input type='text' {...register(`feedbackForm.${index}`)} placeholder={placeholderQuestions[`${index}`]} className=' create-job-input placeholder:text-xs md:placeholder:text-sm' ></input>

                                                <div className='mx-4' onClick={() => handleDeleteQuestion(index)}>
                                                    <box-icon size='sm' name='trash' />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button onClick={addQuestion} className={`${questionSize === 4 ? `hidden` : ``} block border border-black bg-transparent text-black text-xs md:text-md py-3 px-12 md:px-16 rounded-md mt-4 md:mt-8 mx-auto`}>Add More Questions</button>
                        </div>
                    </div>

                    {/* Submit button */}
                    <div className='flex justify-center mt-8'>
                        <button className='block bg-primary text-white text-md py-4 px-16 rounded-md'>Approve Job Post</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
