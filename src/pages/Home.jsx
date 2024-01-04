import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';
import React from 'react'
import Footer from '../components/Footer';

const Home = () => {

    return (
        <div className="">
            <header className='top-0 '>
                <Navbar />
            </header>
            <div className='md:flex'>
                <div className='md:w-[65%] w-[90%]'>
                    <h1 className="text-4xl font-bold text-wrap font-sans md:pt-40 pt-20 ml-[5%]">Indian Recruitment Services</h1>
                    <h2 className='font-bold text-xl mt-5 ml-[5%]'>Your Premier Recruitment Partner</h2>

                    <p className='font-medium text-lg mt-12  md:max-w-[80%] ml-[5%]'>At Indian Recruitment Services, we understand that finding the perfect talent for your organization is more than just a recruitment process, it's about securing the future success of your business. As a leading recruitment consultancy in India, we specialize in providing <span className='text-[#407BFF]'>tailored solutions</span> to meet your <span className='text-[#407BFF]'>unique staffing needs.</span></p>
                    {/* <button className="bg-[#407BFF] ml-[5%] px-3 py-2 cursor-pointer font-normal z-2 absolute hover:bg-[#4059ff] mt-8 rounded-full text-white" onClick={() => { navigate('/contact_us') }}>Contact Us</button> */}
                </div>
                <div className="md:w-[400px] md:mt-[150px] mr-10">
                    <img src="Group 138.svg" alt="" className=" right-0 mt-4 mx-[10%] mr-[200px] top-0 md:my-auto max-md:w-[70%] md:ml-0 z-2 w-full h-auto md:mr-10" />
                </div>
            </div>
            <h2 className="my-10 font-bold text-3xl text-center w-full md:mt-[90px]">Pioneers in</h2>

            <div className="sm:flex flex-wrap p-10 py-2 mx-auto w-fit text-[#407BFF] font-medium">
                <div className="w-[50%] lg:flex ">
                    <div className="flex text-xl text-nowrap mx-auto ml-0">
                        <img src="Group 141.svg" alt="" className="mx-auto py-3 pl-5" /><span className="py-4 px-4">Leadership Hiring</span>
                    </div>
                    <div className="flex text-xl text-nowrap mx-auto ml-0 px-5">
                        <img src="Group 142.svg" alt="" className="mx-auto py-3" /><span className="py-4 max-lg:px-5 pl-5">C-Suite Hiring</span>
                    </div>
                </div>
                <div className="w-[50%] lg:flex ">
                    <div className="flex text-xl text-nowrap mx-auto ml-0 px-4">
                        <img src="Group 144.svg" alt="" className="mx-auto py-3 " /><span className="py-4 px-4">End To End Hiring</span>
                    </div>
                    <div className="flex text-xl text-nowrap mx-auto ml-0 px-2">
                        <img src="Group 145.svg" alt="" className="mx-auto py-3 max-[1024px]:pl-[5%] max-[640px]:pl-2" /><span className="py-4 px-4">Niche Skills Hiring</span>
                    </div>
                </div>
            </div>
            {/* <br /> */}
            <h2 className="font-bold text-3xl text-center w-full mt-[120px]">ABOUT US</h2>
            <p className="text-center mt-7 text-lg mx-auto max-md:w-[80%] w-[50%]">We provide hiring solutions that are specially crafted to streamline the recruitment journey for your company. From identifying the right candidates to conducting thorough assessments, we bring you the best talent quickly and efficiently. </p>

            <div className="flex pt-[10px]">
                <div className="w-[55%] my-auto md:block hidden">
                    <img src="illustration.svg" alt="" className="hidden md:block md:w-full h-auto bottom-0" />
                </div>
                <div className="my-[10%] md:w-[45%] mx-12">
                    <aside className="flex px-4 py-4 rounded-xl shadow-lg bg-white relative w-[100%]">
                        <img src="Group.svg" alt="" className="w-6 h-6 my-auto" />
                        <div className="pl-2">
                            <b>Client-Centric Approach:</b> Dedicated in understanding your company culture and values to ensure the perfect candidate fit.
                        </div>
                    </aside>
                    <aside className="flex px-4 h-fit py-2 rounded-xl shadow-lg bg-white mt-12 relative w-[100%]">
                        <img src="Group.svg" alt="" className="w-6 h-6 my-auto" />
                        <div className="pl-2 my-auto">
                            <b>Strategic AI-Driven Processes:</b> We leverage the latest in technology and AI to implement a systematic approach to hiring, ensuring that you have a strategic advantage in attracting top-notch professionals.
                        </div>
                    </aside>
                    <aside className="flex px-4 py-4 rounded-xl shadow-lg bg-white mt-12 relative w-[100%]">
                        <img src="Group.svg" alt="" className="w-6 h-6 my-auto" />
                        <div className="pl-2">
                            <b>Technical and Non-Technical Staffing:</b> Whether you're looking for technical experts or non-technical staff, IRS Consultancy has the expertise to fulfill your manpower needs in multiple industries.
                        </div>
                    </aside>
                    <aside className="flex px-4 py-4 rounded-xl shadow-lg bg-white mt-12 relative w-[100%]">
                        <img src="Group.svg" alt="" className="w-6 h-6 my-auto" />
                        <div className="pl-2">
                            <b>Transparent Communications and Collaboration:</b> We prioritize open and honest communication, keeping you informed at every step of the recruitment process.
                        </div>
                    </aside>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home
