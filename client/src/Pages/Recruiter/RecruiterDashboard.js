import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const RecruiterDashboard = () => {

    const tableHeaderCss = "px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "

    // const [isLoading, setIsLoading] = useState(true);
    const id = "6676b5f64e5a14c58a720ebb";

    const [loginData, setLoginData] = useState();
    
    useEffect(() => {
        let token = localStorage.getItem("user");
        const user = JSON.parse(token);
        setLoginData(user[0])
        console.log(user);
    }, [])
    
    const [jobs, setJobs] = useState([]);
    const [recruiter, setRecruiter] = useState();

    // useEffect(() => {
    //     try {

    //         fetch(`http://localhost:8080/recruiter/all-recruiter`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 let recruiterData = data.filter((recruiter) => recruiter.recruiterID === id);
    //                 setRecruiter(recruiterData);
    //                 console.log(recruiterData);
    //             })
    //             .then( async () => {
    //                 try {
    //                     console.log(recruiter);
    //                     // const response = await fetch(`http://localhost:8080/jobs/all-jobs/${recruiter.jobID}`)
    //                     // const data = await response.json();
    //                     // setJobs(data);
    //                     // console.log(data);

    //                 } catch (error) {
    //                     console.log(error);
    //                 }
    //             })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    // useEffect(() => {
    //     async function fetchData(){
    //         try {
    //             const reponse = await fetch(`http://localhost:8080/recruiter/all-recruiter`)
    //             const data = await reponse.json();

    //             let recruiterData = data.filter((recruiter) => recruiter.recruiterID === id);
    //             setRecruiter(recruiterData);
    //             console.log(recruiterData);

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData();
    //     async function fetchData2(){
    //         try {
    //             const response = await fetch(`http://localhost:8080/jobs/all-jobs/${recruiter.jobID}`)
    //             const data = await response.json();
    //             setJobs(data);
    //             console.log(data);

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData2();
    // }, []);

    useEffect(() => {
        const fetchRecruiterData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/recruiter/all-recruiter`);
                if (!response.ok) {
                    throw new Error('Failed to fetch recruiter data');
                }
                const data = await response.json();

                // Filter the recruiter data based on the provided id
                const recruiterData = data.find(recruiter => recruiter.recruiterID === id);
                if (recruiterData) {
                    // console.log(recruiterData);
                    setRecruiter(recruiterData);
                } else {
                    throw new Error(`Recruiter with ID ${id} not found`);
                }
            } catch (error) {
                console.error('Error fetching recruiter data:', error);
            }
        };

        fetchRecruiterData();
    }, [id]);

    // Effect to fetch jobs data based on recruiter's jobID
    useEffect(() => {
        if (recruiter && recruiter.jobID) {

            const fetchJobsData = async () => {
                try {
                    //       const response = await fetch(`http://localhost:8080/jobs/current-jobs/${recruiter.jobID}`);
                    //       const data = await response.json();
                    //       setJobs(data);

                    fetch(`http://localhost:8080/jobs/all-jobs`)
                        .then(response => response.json())
                        .then(data => {
                            const filteredJobs = data.filter(job => job._id === recruiter.jobID)
                            setJobs(filteredJobs[0]);
                            console.log(filteredJobs[0]);
                        }
                        );
                } catch (error) {
                    console.error('Error fetching jobs data:', error);
                }
            };

            fetchJobsData();
        }
    }, [recruiter]);
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        if (jobs && jobs.applicants) {
            const fetchApplicantsData = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/users/all-users`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch applicants data');
                    }
                    const data = await response.json();

                    // Filter the applicants data based on the applicant ids in jobs
                    // const filteredApplicants = data.filter(app => jobs.applicants.applicant.includes(app._id));
                    const filteredApplicants = data.filter(app => {
                        // Check if any element in jobs.applicants array has _id equal to app._id
                        return jobs.applicants.some(jobApplicant => jobApplicant.applicant === app._id);
                      });
                    
                      setApplicants(filteredApplicants);
                      console.log("below applicant");
                    console.log(filteredApplicants);
                    // console.log(jobs.applicants);
                } catch (error) {
                    console.error('Error fetching applicants data:', error);
                }
            };

            fetchApplicantsData();
        }
    }, [jobs]);

    const apps = [
        {
            "_id": "6676d1519d5f4ea7521cf13f",
            "jobID": "6676cb664e5a14c58a721384",
            "candidateID": "667656750d96db510a5facbf",
            "userName": "Puneet",
            "applicationStatus": "active",
            "applicationForm": [
              {
                "question": "",
                "answer": "",
                "_id": "6675433b6fc8b5c030039b45"
              }
            ],
            "candidateFeedback": [
              {
                "question": "Willing to relocate?",
                "answer": "Yes",
                "_id": "6675433b6fc8b5c030039b46"
              },
              {
                "_id": "6676d5754e5a14c58a721744",
                "question": "Expertise in python?",
                "answer": "Yes"
              }
            ],
            "__v": 0
          },
          
    ]

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>

            <div className='py-1'>
                <div className='w-full '>

                    {/* MAIN TABLE */}
                    <section className="py-1 bg-blueGray-50">
                        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                                <div className="rounded-t mb-0 px-4 py-3 border-0 bg-secondary text-white ">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
                                            <h3 className="font-bold text-base text-blueGray-700">Review Candidate</h3>
                                        </div>

                                    </div>
                                </div>

                                <div className="block w-full overflow-x-hidden">
                                    <table className="items-center bg-transparent w-full border-collapse ">
                                        <thead>
                                            <tr>
                                                <th className={tableHeaderCss}>Candidate</th>
                                                <th className={tableHeaderCss}>Application</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {apps.map((applicant, key) => (
                                                <RenderTableRows key={key} applicant={applicant} />
                                            ))}

                                            {/* {jobs && jobs.applicants.applicant.map((applicant, key) => <RenderTableRows key={key} applicant={applicant} />)} */}
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

function HandlerDeleteJob(id) {
    console.log("delete job");
}
function HandlerUpdateJob(id) {
    console.log("delete job");
}

function RenderTableRows({ applicant }) {
    // console.log("called");
    // console.log(applicant._id);
    const tableDataCss = "border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
    return (

        <tr>
            <th className={`${tableDataCss} text-left text-blueGray-700 px-3 md:px-6`}>
                {applicant.userName}
            </th>
            <td className={`${tableDataCss}`}>
                <Link to={`/candidate/${applicant._id}`} >
                    <button className='block bg-primary text-white mx-auto text-md py-2  px-5 md:px-6 rounded-md'> Review</button>
                </Link>
            </td>
        </tr>
    )
}