import React, { useEffect, useState } from 'react'

export const ShortlistedCandidates = () => {

    const tableHeaderCss = "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
    
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( ()=>{

        setJobs(
            [
                {
                    "id": 1,
                    "jobTitle": "Software Engineer",
                    "salary": "50",
                    "location": "Brussels",
                    "date": "2023-11-03"
                },
                {
                    "id": 2,
                    "jobTitle": "Software Developer",
                    "salary": "10",
                    "location": "Brussels",
                    "date": "2023-11-03"
                  }
            ]
        )
        console.log(jobs);
    }, [] )
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
                                            <h3 className="font-bold text-base text-blueGray-700">Shortlisted Candidates</h3>
                                        </div>

                                    </div>
                                </div>

                                <div className="block w-full overflow-x-hidden">
                                    <table className="items-center bg-transparent w-full border-collapse ">
                                        <thead>
                                            <tr>
                                                <th className={tableHeaderCss}>Candidate</th>
                                                <th className={`${tableHeaderCss} hidden md:table-cell`}>Job Role</th>
                                                <th className={`${tableHeaderCss} hidden md:table-cell`}>Salary</th>
                                                <th className={`${tableHeaderCss} hidden md:table-cell`}>Location</th>
                                                <th className={tableHeaderCss}></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {jobs.map((job, key) => <RenderTableRows key={key} job={job} />)}
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

function HandlerDeleteJob(id){
    console.log("delete job");
}
function HandlerUpdateJob(id){
    console.log("delete job");
}

function RenderTableRows({job}){
    console.log("called");
    const tableDataCss = "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    return (

        <tr>
            <th className= {`${tableDataCss} text-left text-blueGray-700 px-3 md:px-6`}>
                {job.jobTitle}
            </th>
            <td className={`${tableDataCss} hidden md:table-cell`}>
                {job.location}
            </td>
            <td className={`${tableDataCss} hidden md:table-cell`}>
                {job.salary}
            </td>
            <td className={`${tableDataCss} hidden md:table-cell`}>
                {job.date}
            </td>
            <td className={`flex justify-between ${tableDataCss}`}>
                <button>
                    <box-icon name='trash' onClick={() => HandlerDeleteJob()} />
                </button>
            </td>
        </tr>
    )
}