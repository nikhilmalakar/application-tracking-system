import React from 'react'
import logoURL from '../assets/img/logo.jpeg'

export const Footer = () => {

    const footerNav = ["Jobs","Login","Signup","Post Job"]

    return (
        <footer class="bg-white rounded-lg shadow m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logoURL} className="rounded-full h-16" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap ">HumGrow™</span>
                    </a>
                    <ul class="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        
                        {
                            footerNav.map( (menu, key)=> {
                                return (
                                    <li key={key}>
                                        <a href="#" class="hover:underline me-4 md:me-6">{menu}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="/" class="hover:underline">HumGrow™</a>. All Rights Reserved.</span>
            </div>
        </footer>

    )
}
