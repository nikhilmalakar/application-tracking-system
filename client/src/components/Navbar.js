import React, { useState } from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'
import 'boxicons';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Jobs', path: '/jobs' },
    { label: 'Post Job', path: '/post-job' },
    { label: 'About', path: '/about' },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handlerIsMenuOpen = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='max-w-screen container mx-auto xl:px-24 px-4'>

            <nav className='flex justify-between items-center py-6'>
                {/* BRAND */}
                <NavLink to='/about' className='flex items-center gap-2 text-2xl text-black'>
                    <box-icon name="rocket"></box-icon>
                    <span>Linkedin Jobs</span>
                </NavLink>

                {/* MAIN MENU - Lg device */}
                <ul className="hidden md:flex gap-12">
                    {navItems.map(({ label, path }) => (
                        <li key={path} className='text-base text-primary'>
                            <NavLink
                                to={path}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                <span>{label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* LOGIN/SIGNUP */}
                <div className='text-base text-primary font-medium space-x-5 hidden md:block'>
                    <Link to="/login" className='py-2 px-5 border rounded'>Login</Link>
                    <Link to="/signup" className='bg-secondary text-white py-2 px-5 border rounded'>Sign Up</Link>
                </div>

                {/* HAMBURGER MENU */}
                <div className="text-primary md:hidden flex justify-end items-center gap-2">
                    <box-icon name={isMenuOpen ? "x" : "menu"} size="md" color="text-primary" onClick={handlerIsMenuOpen}></box-icon>
                </div>


            </nav>

                {/* MAIN MENU sm device */}
                <div className={` ${isMenuOpen? "" : "hidden"} px-4 bg-gray-700 py-5 rounded`}>
                    <ul className="md:hidden sm:flex flex-col">
                        {isMenuOpen && navItems.map(({ label, path }) => (
                            <li key={path} className='text-base text-white first:text-white py-1'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    <span>{label}</span>
                                </NavLink>
                            </li>
                        ))}
                        {/* Login/signup sm-device */}
                        <li><Link to="/login" className='py-1 text-white'>Login</Link></li>
                    </ul>
                </div>


            <Outlet />
        </div>
    )
}
