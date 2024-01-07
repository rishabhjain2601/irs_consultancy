import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { initFlowbite } from 'flowbite'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        initFlowbite();
    }, []);
    return (
        <div className='md:bg-transparent'>
            <img src="nav.svg" alt="" className="md:hidden w-full top-16 -z-1 relative" />


            <nav className="md:bg-transparent w-full z-20 top-0 start-0 absolute z-2">
                <div className="max-w-screen-xl md:bg-transparent flex flex-wrap p-4 ">
                    {/* <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse"> */}
                    <img src="irslogo.png" className="h-[40px] ml-2 cursor-pointer" alt="IRS Logo" onClick={() => { navigate('/') }} />
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IRS</span> */}
                    {/* </a> */}
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse absolute right-0 mr-5">

                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex sursor-pointer items-center p-2 w-10 h-10 justify-center text-sm " aria-controls="navbar-cta" aria-expanded="false" onClick={() => { setToggleMenu(!toggleMenu) }}>
                            <span className="sr-only">Open main menu</span>
                            <img src={toggleMenu ? "MacClose.svg" : "Menu.svg"} alt="" className='md:hidden' />
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col md:absolute md:right-0 md:mr-10 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:bg-transparent bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <button onClick={() => { navigate('/') }} className={`${location.pathname === "/" ? 'bg-blue-700 md:text-blue-700 max-md:text-white ' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} md:p-0 block py-2 my-1 px-3 w-full rounded md:bg-transparent `} aria-current="page">Home</button>
                            </li>
                            <li>
                                <button onClick={() => { navigate('/skills_we_hire') }} className={`${location.pathname === "/skills_we_hire" ? 'bg-blue-700 md:text-blue-700 max-md:text-white ' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} md:p-0 block py-2 my-1 px-3 w-full rounded md:bg-transparent `}>Skills We Hire</button>
                            </li>
                            <li>
                                <button onClick={() => { navigate('/ways_of_working') }} className={`${location.pathname === "/ways_of_working" ? 'bg-blue-700 md:text-blue-700 max-md:text-white ' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} md:p-0 block py-2 my-1 px-3 w-full rounded md:bg-transparent `}>Ways of Working</button>
                            </li>
                            <li>
                                <button onClick={() => { navigate('/why_choose_us') }} className={`${location.pathname === "/why_choose_us" ? 'bg-blue-700 md:text-blue-700 max-md:text-white ' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} md:p-0 block py-2 my-1 px-3 w-full rounded md:bg-transparent `}>Why Choose Us</button>
                            </li>
                            <button type="button" onClick={() => { navigate('/contact_us') }} className={`${location.pathname === "/contact_us" ? 'md:bg-white md:hover:bg-blue-700 bg-blue-700 md:text-blue-700 max-md:text-white  md:hover:text-white border-blue-700 md:border' : 'md:text-white md:bg-blue-700 md:hover:bg-blue-800'}  cursor-pointer md:focus:ring-4 focus:outline-none md:focus:ring-blue-300 font-medium rounded-lg md:text-sm px-4 py-1.5 text-gray-900 hover:bg-gray-100 text-center`} >Contact Us</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
