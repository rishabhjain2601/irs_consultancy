import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <div className="overflow-hidden bottom-0 min-h-screen min-w-full ">
            <header>
                <Navbar />
            </header>
            <div className="top-0 align-middle my-[6rem]">
                <h1 className="text-5xl font-bold text-center font-sans md:mt-[6rem] mt-32 md:ml-20">Contact Us</h1>
                <div className="md:flex mt-6 md:relative md:bottom-[18%] md:justify-center md:mx-[12%] mx-[6%] w-[80%]">
                    <img src="illustration 2.svg" alt="" className="mx-auto max-md:hidden justify-center md:w-[40%] my-8" />
                    <aside className='w-[90%] text-2xl font-bold my-20'>
                        <h2><u>Contact Details</u></h2>
                        <div className="my-4 mx-0 md:text-[1.2rem] text-[1rem] flex flex-wrap">
                            <div className="flex float-left pt-4">
                                <img src="call.svg" alt="" className="md:h-10 h-6 max-md:mt-[5px]" /> <span className="mr-8 ml-1 font-semibold text-nowrap">+91 99999 99999</span>
                            </div>
                            <div className="flex float-right pt-4">
                                <a href="mailto:contactus@indianrecruitmentservices.com" className="mr-4 ml-1 font-semibold flex"> <img src="e-mail.svg" alt="" className="md:h-9 h-5 max-md:mt-2 mr-2" /><span>contactus@indianrecruitmentservices.com </span>
                                </a>
                            </div>
                        </div>
                        <h2 className='mt-8 mb-6'><u>Follow Us On</u></h2>
                        <div className='flex mt-4'>
                            <a href="/"><img src="facebook.svg" alt="" className='mr-3 max-md:h-9 bg-[#ffffff94] rounded-lg' /></a>
                            <a href="/"><img src="youtube.svg" alt="" className='mx-3 max-md:h-9' /></a>
                            <a href="/"><img src="linkedin.svg" alt="" className='mx-3 max-md:h-9' /></a>
                            <a href="/"><img src="instagram.svg" alt="" className='mx-3 max-md:h-9' /></a>
                        </div>
                    </aside>

                </div>
                <img src="Vector 47.svg" alt="" className="fixed -z-1 left-0 bottom-0 hidden md:block w-[25%] " />
            </div>


            <footer className="bottom-0 relative w-full mt-10">
                <Footer />
            </footer>
        </div>
    )
}

export default ContactUs
