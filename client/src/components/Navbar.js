import React, { useState, useContext, useEffect } from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'
import { LoginContext } from '../components/ContextProvider/Context.js';
import 'boxicons';
import logoURL from '../assets/img/logo.jpeg'

const employerNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Post Job', path: '/post-job' },
    { label: 'Dashboard', path: '/all-jobs' },
    { label: 'Candidates', path: '/shortlist' },
];
const coordinatorNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/coordinator/review' },
    { label: 'Candidates', path: '/shortlist' }
];
const recruiterNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/recruiter/review' }
];
const candidateNavItems = [
    { label: 'Home', path: '/' },
    { label: 'All Jobs', path: '/all-posted-jobs' },
    { label: 'Dashboard', path: `/my-jobs` }
];

export const Navbar = () => {

    const [loginData, setLoginData] = useState();

    const [navItems, setNavItems] = useState([
        { label: 'Home', path: '/' },
        { label: 'All Jobs', path: '/all-posted-jobs' },
    ]
    );

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handlerIsMenuOpen = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {

        let token = localStorage.getItem("user");
        const user = JSON.parse(token);
        setLoginData(user)
    }, [])

    useEffect(() => {
        

        if (loginData) {
            const role = loginData.role;

            if (role === "employer") {
                setNavItems(employerNavItems)
            }
            else if (role === "coordinator") {
                setNavItems(coordinatorNavItems)
            }
            else if (role === "recruiter") {
                setNavItems(recruiterNavItems)
            }
            else if (role === "candidate") {
                setNavItems(candidateNavItems)
            }
        }
    }, [loginData])


    const logoutHandler = async () => {
        await fetch('http://localhost:8080/auth/logout', {
            method: "POST",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    setLoginData(null)
                    localStorage.removeItem("usertoken")
                    window.location.href = "/";
                }
            })
    }

    return (

        <div className='max-w-screen container mx-auto xl:px-24 px-4'>

            <nav className='flex justify-between items-center py-6'>
                {/* BRAND */}
                <NavLink to='/' className='flex items-center gap-2 text-2xl text-[#087658]'>
                    <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logoURL} className="rounded-full h-12 md:h-16" alt="Flowbite Logo" />
                    </a>
                    <span className='font-extrabold text-xl md:text-3xl'>humgrow.com</span>
                </NavLink>

                {/* MAIN MENU - Lg device */}
                {
                    navItems &&
                    <ul className="hidden md:flex gap-12 font-bold">
                        {navItems.map(({ label, path }) => (
                            <li key={path} className='text-base text-primary'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => isActive ? "active " : ""}
                                >
                                    <span>{label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                }

                <div>
                    {
                        localStorage.getItem("usertoken") ?
                            <div className='hidden md:block'>
                                <div className='grid grid-cols-2 items-center gap-4'>
                                    Hello, {loginData && loginData.userName}
                                    <div onClick={logoutHandler} className='py-2 px-5 text-center border-2 bg-gray-200 cursor-pointer rounded'>Logout</div>
                                </div>
                            </div>
                            :
                            <div className='text-base text-primary font-medium space-x-5 hidden md:block'>
                                <Link to="/login" className='py-2 px-5 border rounded bg-gray-100'>Login</Link>
                                <Link to="/signup" className='bg-secondary text-white py-2 px-5 border rounded'>Sign Up</Link>
                            </div>
                    }
                </div>

                {/* HAMBURGER MENU */}
                <div className="text-primary md:hidden flex justify-end items-center gap-2">
                    <box-icon name={isMenuOpen ? "x" : "menu"} size="md" color="text-primary" onClick={handlerIsMenuOpen}></box-icon>
                </div>


            </nav>

            {/* MAIN MENU sm device */}
            <div className={` ${isMenuOpen ? "" : "hidden"} font-bold px-4 bg-gray-200 py-5 rounded`}>
                <ul className="md:hidden sm:flex flex-col">
                    {isMenuOpen && navItems.map(({ label, path }) => (
                        <li key={path} className='text-base text-primary first:text-black py-1'>
                            <NavLink
                                to={path}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                <span onClick={() => setIsMenuOpen(!isMenuOpen)}>{label}</span>
                            </NavLink>
                        </li>
                    ))}
                    {/* Login/signup sm-device */}
                    <div>
                        {
                            localStorage.getItem("usertoken") ?
                                <div>
                                    {/* Hello, {loginData.user.userName} */}
                                    <div onClick={logoutHandler} className='py-2 px-5 border rounded'>Logout</div>
                                </div>
                                :
                                <li onClick={() => setIsMenuOpen(!isMenuOpen)}><Link to="/login" className='py-1 text-primary'>Login</Link></li>
                        }
                    </div>
                </ul>
            </div>


            <Outlet />
        </div>
    )
}

