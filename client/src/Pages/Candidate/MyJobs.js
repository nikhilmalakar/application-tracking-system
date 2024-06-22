import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const MyJobs = () => {

    const tableHeaderCss = "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
    
    const applications = [
        {
            jobTitle: "Web Developer",
            employmentType: "Full Time",
            location: "Hyderabad"
        },
        {
            jobTitle: "Data Analyst",
            employmentType: "Part Time",
            location: "Mumbai"
        },
        {
            jobTitle: "Full Stack Developer",
            employmentType: "Full Time",
            location: "Delhi"
        }
    ]
    const [loginData, setLoginData] = useState();
    
    useEffect(() => {
        let token = localStorage.getItem("user");
        const user = JSON.parse(token);
        setLoginData(user[0])
        console.log(user);
    }, [])

    useEffect(() => {

        try {
            
        } catch (error) {
            console.log(error);
        }
    }, []);

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
                                            <h3 className="font-bold text-base text-blueGray-700">My Applications</h3>
                                        </div>

                                    </div>
                                </div>

                                <div className="block w-full overflow-x-hidden">
                                    <table className="items-center bg-transparent w-full border-collapse ">
                                        <thead>
                                            <tr>
                                                <th className={tableHeaderCss}>Job Role</th>
                                                <th className={`${tableHeaderCss} hidden md:table-cell`}>Type</th>
                                                <th className={`${tableHeaderCss} hidden md:table-cell`}>Location</th>
                                                <th className={tableHeaderCss}>Status</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {   applications ?
                                                applications.map((application, key) => <RenderTableRows key={key} application={application} />)
                                                :
                                                <p>No shortlisted candidates found</p>
                                            }
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

function RenderTableRows({application}){
    
    const tableDataCss = "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    return (

        <tr>
            <th className= {`${tableDataCss} text-left text-blueGray-700 px-3 md:px-6`}>
                {application.jobTitle}
            </th>
            <td className={`${tableDataCss} hidden md:table-cell`}>
                {application.employmentType}
            </td>
            <td className={`${tableDataCss} hidden md:table-cell`}>
                {application.location}
            </td>
            <td className={`${tableDataCss} font-bold hidden md:table-cell`}>
                Active
            </td>
            
        </tr>
    )
}