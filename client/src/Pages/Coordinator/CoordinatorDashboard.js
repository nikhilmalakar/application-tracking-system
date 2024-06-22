import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export const CoordinatorDashboard = () => {

    const tableHeaderCss = "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"

    const [jobs, setJobs] = useState([]);
    const [recruiters, setRecruiters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            fetch(`http://localhost:8080/jobs/all-jobs`).then((res) => res.json()).then((data) => setJobs(data))

            fetch(`http://localhost:8080/users/all-users`).then((res) => res.json()).then((data) => {
                let recruiterData = data.filter((user) => user.userType === 1 );
                setRecruiters(recruiterData);
            })

        } catch (error) {
            console.log(error);
        }
    }, []);

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch("jobs.json").then(res => res.json()).then(
    //         data => setJobs(data)
    //     )
    //     setIsLoading(false);
    //     console.log(jobs);
    // }
    //     , []);

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
                                            <h3 className="font-bold text-base text-blueGray-700">Jobs Approval - Assign Recruiter</h3>
                                        </div>

                                    </div>
                                </div>

                                <div className="block w-full overflow-x-hidden">
                                    <table className="items-center bg-transparent w-full border-collapse ">
                                        <thead>
                                            <tr>
                                                <th className={tableHeaderCss}>Job Title</th>
                                                <th className={`${tableHeaderCss} hidden md:table-cell`}>Type</th>
                                                <th className={`${tableHeaderCss} hidden md:table-cell`}>Location</th>
                                                <th className={tableHeaderCss}>Assign</th>
                                                <th className={tableHeaderCss}></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {jobs.map((job, key) => <RenderTableRows key={key} job={job} recruiters={recruiters}/>)}
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

function RenderTableRows({ job, recruiters }) {
    // console.log("called");
    console.log(recruiters);

    const tableDataCss = "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    return (

        <tr>
            <th className={`${tableDataCss} text-left text-blueGray-700 px-3 md:px-6`}>
                {job.jobTitle}
            </th>
            <td className={`${tableDataCss} hidden md:table-cell`}>
                {job.employmentType}
            </td>
            <td className={`${tableDataCss} hidden md:table-cell`}>
                {job.location}
            </td>
            <td className={`${tableDataCss} hidden md:table-cell`}>
                <div>
                {/* {...register("userType", { required: true })}  */}
                    <select className=''>
                        {recruiters.map((recruiter, index) => (
                            <option key={index} value={recruiter.id}>{recruiter.userName}</option>
                        ))}
                    </select>
                </div>
            </td>
            <td className={`flex justify-between ${tableDataCss}`}>
                <Link to={`/assign-recruiter/${job._id}`}>
                    <button className='block bg-primary text-white mx-auto text-md py-2  px-5 md:px-6 rounded-md'>Approve</button>
                </Link>
            </td>
        </tr>
    )
}