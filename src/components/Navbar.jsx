import React, {useState} from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();
    return (
        <div>


            <nav class="md:bg-transparent dark:bg-gray-900 w-full z-20 top-0 start-0 absolute z-2">
                <div class="max-w-screen-xl flex flex-wrap p-4">
                    {/* <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse"> */}
                        <img src="irslogo.png" class="h-[40px] m-4 cursor-pointer" alt="IRS Logo" onClick={()=>{navigate('www.google.com')}}/>
                            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IRS</span> */}
                    {/* </a> */}
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse absolute right-0 mr-5">
                        
                        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex sursor-pointer items-center p-2 w-10 h-10 justify-center text-sm " aria-controls="navbar-cta" aria-expanded="false" onClick={()=>{setToggleMenu(!toggleMenu)}}>
                            <span class="sr-only">Open main menu</span>
                            <img src={toggleMenu?"MacClose.svg":"Menu.svg"} alt="" class='md:hidden'/>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul class="flex flex-col md:absolute md:right-0 md:mr-10 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:bg-transparent bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <button onClick={()=>{navigate('/')}} class="block py-2 my-1 px-3 text-white w-full bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</button>
                            </li>
                            <li>
                                <button onClick={()=>{navigate('/our_mission')}} class="block py-2 my-1 px-3 text-gray-900 w-full rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Our Mission</button>
                            </li>
                            <li>
                                <button onClick={()=>{navigate('/why_choose_us')}} class="block py-2 my-1 px-3 text-gray-900 w-full rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Why Choose Us</button>
                            </li>
                            <li>
                                <button onClick={()=>{navigate('/our_clients')}} class="block py-2 my-1 px-3 text-gray-900 w-full cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Our Clients</button>
                            </li>
                            <button type="button" class="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Contact Us</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
