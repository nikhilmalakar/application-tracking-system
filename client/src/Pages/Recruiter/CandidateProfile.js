import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form"



export const CandidateProfile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        
    } = useForm({
        defaultValues: {
            _id: "",
            candidateID: "",
            jobID: "",
            applicationStatus: "",
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

    const { id } = useParams();
    const currRecruiterID = "66733676ab92f179a717d0e9"
    // const index = id;/
    // const id = "667478f128091d0d096071ea"
    const [application, setApplicaton] = useState();
    const [candidate, setCandidate] = useState();
    const [recruiter, setRecruiter] = useState();
    const [job, setJob] = useState();

    useEffect(() => {
        console.log(id);
        try {
            fetch(`http://localhost:8080/application/all-application/`)
            .then((res) => res.json())
            .then((data) => {
                const filterData = data.filter(item => item.candidateID === id); 
                setApplicaton(filterData[11]);
                // console.log(filterData[11]);
            })

            fetch(`http://localhost:8080/users/user/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCandidate(data)
            })
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        console.log(id);
        try {
            fetch(`http://localhost:8080/recruiter/all-recruiter/`)
            .then((res) => res.json())
            .then((data) => {
                const filterData = data.filter(item => item.recruiterID === currRecruiterID); 
                setRecruiter(filterData[2]);
                console.log(filterData[2]);
            })
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        function fetchJob(){

            try {
                fetch(`http://localhost:8080/jobs/all-jobs/`)
                .then((res) => res.json())
                .then((data) => {
                    const filterData = data.filter(job => job._id === recruiter.jobID); 
                    setJob(filterData[0]);
                    console.log(filterData[0]);
                })
            } catch (error) {
                console.log(error);
            }
        }
        recruiter && fetchJob();
    }, [recruiter]);
    
    const onSubmit = (data) => {
        const newData = data;
        if(application && candidate){

            newData = {
                ...data, 
                _id: application._id,
                candidateID:candidate._id,
                jobID : job._id,
                applicationStatus: data.applicationStatus,
                candidateFeedback: [...recruiter.feedbackForm.map((q, index) => ({
                    answer: data.candidateFeedback[index].answer,
                    question: q
    
                }))]
            }
        }
        // console.log(newData);

        fetch("http://localhost:8080/application/post-application", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newData),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
    }

    return (
        <div className='max-w-scren-2xl  w-full md:w-4/6 lg:w-6/8 container mt-2 mx-auto xl:px-24 px-4 '>
            <div className=' bg-[#efefef] mx-auto py-12 md:px-14 px-8 rounded-lg'>

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='flex flex-col lg:flex-row  gap-8'>

                        {/* JOB POSTING DETAILS */}

                            <div className='lg:w-1/2 w-full'>

                                <div>

                                    {
                                        candidate && job &&
                                        <div>
                                        <div>
                                            <div>
                                                <h1 className='text-xl md:text-2xl font-bold'>{candidate.userName}</h1>
                                            </div>
                                            <div className='px-1'>
                                                <h2 className='mt-4 mb-2 font-bold'>Candidate Details</h2>
                                                <p className='text-sm md:text-base text-justify '>Email: {candidate.userEmail}</p>
                                                <p className='text-sm md:text-base text-justify '>Gender: {candidate.gender}</p>
                                                <p className='text-sm md:text-base text-justify '>Address: {candidate.location}</p>
                                            </div>
                                        </div>
                                        
                                         
                                            <div>
                                                <div className='px-1'>
                                                    <h2 className='mt-2 mb-2 font-bold'>Job Details</h2>
                                                    <p className='text-sm md:text-base text-justify '>Job Role: {job.employmentType}</p>
                                                    <p className='text-sm md:text-base text-justify '>Location: {job.location}</p>
                                                    <p className='text-sm md:text-base text-justify '>Salary: {job.salary}</p>
                                                    <p className='text-sm md:text-base text-justify '>Description: {job.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>

                            {
                                application && application.applicationForm &&

                                <div className='px-1'>
                                    <h2 className='mt-2 mb-2 font-bold'>Application Form (R1)</h2>
                                    {application && 
                                        <div className='px-1'>
                                            {application.applicationForm && application.applicationForm.map((question, index) => (
                                                <div key={index}>
                                                    <p className='text-sm md:text-base text-justify'>Q{index + 1}: {question.question}</p>
                                                    <p className='text-sm md:text-base text-justify'>Response: <span className='font-semibold'>{question.answer}</span></p>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                    
                                </div>
                            }
                            </div>
                        
                            
                        {/* CANDIDATE FORM */}
                        <div className='lg:w-1/2 w-full'>
                            <div><h1 className='text-xl font-bold text-center'>Feedback Form</h1></div>

        

                            {/* DYNAMIC BLOCK */}
                            <div>
                                {
                                    recruiter && 
                                    recruiter.feedbackForm.map((question, index) => {
                                        return <RenderQuestion key={index} index={index

                                        } register={register} setValue={setValue} question={question}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    {/* Submit button */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-8'>
                        <button type="submit" className='block bg-red-500 text-white text-md py-4 px-16 rounded-md' onClick={() => setValue("applicationStatus", "reject")}>Reject</button>
                        <button type="submit" className='block bg-green-500 text-white text-md py-4 px-16 rounded-md' onClick={() => setValue("applicationStatus", "shortlist")}>Shortlist</button>
                    </div>
                </form>


                {/* <div className='text-center'>
                    <p className='hover:underline text-xs md:text-sm mt-8'>By applying to above job, you agree to our terms and conditions.</p>
                </div> */}
            </div>
        </div>
    )
}

function RenderQuestion({ index, question, setValue, register }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center pt-2 md:my-0'>
            <label className='block mt-2 m-1 text-sm'>{index + 1}. {question}</label>
        {/* <input {...register(`candidateFeedback.${index}.question`)} type="hidden" value={question} /> */}
            <div className='grid grid-cols-2 items-center justify-items-center'>
                <div className='flex'>
                    <input {...register(`candidateFeedback.${index}.answer`, { required: true })} type="radio" value="Yes" className='mx-2' />
                    <p>Yes</p>
                </div>
                <div className='flex'>
                    <input {...register(`candidateFeedback.${index}.answer`, { required: true })} type="radio" value="No" className='mx-2' />
                    <p>No</p>
                </div>
            </div>
        </div>
    );
}
