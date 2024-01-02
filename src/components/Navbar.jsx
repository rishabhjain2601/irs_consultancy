import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div class='md:bg-transparent'>


            <nav class="md:bg-transparent w-full z-20 top-0 start-0 absolute z-2">
                <div class="max-w-screen-xl md:bg-transparent flex flex-wrap p-4">
                    {/* <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse"> */}
                        <img src="irslogo.png" class="h-[40px] m-4 cursor-pointer" alt="IRS Logo" onClick={()=>{navigate('/')}}/>
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
                                <button onClick={()=>{navigate('/')}} class={`${location.pathname==="/"?'bg-blue-700 md:text-blue-700 max-md:text-white ':'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} md:p-0 block py-2 my-1 px-3 w-full rounded md:bg-transparent `} aria-current="page">Home</button>
                            </li>
                            <li>
                                <button onClick={()=>{navigate('/skills_we_hire')}} class={`${location.pathname==="/skills_we_hire"?'bg-blue-700 md:text-blue-700 max-md:text-white ':'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} md:p-0 block py-2 my-1 px-3 w-full rounded md:bg-transparent `}>Skills We Hire</button>
                            </li>
                            <li>
                                <button onClick={()=>{navigate('/ways_of_working')}} class={`${location.pathname==="/ways_of_working"?'bg-blue-700 md:text-blue-700 max-md:text-white ':'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} md:p-0 block py-2 my-1 px-3 w-full rounded md:bg-transparent `}>Ways of Working</button>
                            </li>
                            <li>
                                <button onClick={()=>{navigate('/why_choose_us')}} class={`${location.pathname==="/why_choose_us"?'bg-blue-700 md:text-blue-700 max-md:text-white ':'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} md:p-0 block py-2 my-1 px-3 w-full rounded md:bg-transparent `}>Why Choose Us</button>
                            </li>
                            <button type="button" onClick={()=>{navigate('/contact_us')}} class="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Contact Us</button>
                        </ul>
                    </div>
                </div>
                <img src="nav.svg" alt="" class="md:hidden w-full top-16 absolute"/>
            </nav>
        </div>
    )
}

export default Navbar
