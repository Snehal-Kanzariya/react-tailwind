import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, animateScroll as scroll } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)

    return (
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl text-center font-bold mr-4 sm:text-4xl">BRAND.</h1>
                    <ul className="hidden md:flex">
                        <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                        <li><Link to='about' smooth={true} offset={-200} duration={500}>About</Link></li>
                        <li><Link to='support' smooth={true} offset={-50} duration={500}>Support</Link></li>
                        <li><Link to='plateforms' smooth={true} offset={-100} duration={500}>Plateforms</Link></li>
                        <li><Link to='pricing' smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="px-8 py-3 text-white mr-5 border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md">Sign in</button>
                    <button className="px-8 py-3 border text-white bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md">Sign out</button>
                </div>
                <div className="md:hidden mr-4" onClick={handleClick}>
                    {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className="p-4 border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to='home' smooth={true} duration={500}>Home</Link></li>
                <li className="p-4 border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to='about' smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className="p-4 border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to='support' smooth={true} offset={-50} duration={500}>Support</Link></li>
                <li className="p-4 border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to='plateforms' smooth={true} offset={-100} duration={500}>Plateforms</Link></li>
                <li className="p-4 border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to='pricing' smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                <div className="flex flex-col">
                    <button className=" px-8 py-3 bg-indigo-600 text-white mb-4 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600">Sign In</button>
                    <button className=" px-8 py-3 bg-transparent text-indigo-600 mb-4 border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white">Sign Up</button>
                </div>
            </ul>


        </div>
    )
}

export default Navbar