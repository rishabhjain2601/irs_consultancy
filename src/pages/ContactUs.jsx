import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <div class="overflow-hidden bottom-0 min-h-screen min-w-full ">
            <header>
                <Navbar />
            </header>
            <div class="top-0 align-middle my-[6rem]">
                <h1 class="text-6xl font-bold text-center font-sans md:mt-[6rem] mt-32 md:ml-20">Our Mission</h1>
                <div class="md:flex mt-6 md:relative md:bottom-[18%] md:justify-center mx-[12%] w-[80%]">
                    <img src="illustration 2.svg" alt="" class="mx-auto max-md:hidden justify-center md:w-[40%] my-8" />
                    <aside class='w-[90%] text-3xl font-bold my-20'>
                        <h2><u>Contact Details</u></h2>
                        <div class="my-4 mx-0 flex flex-wrap">
                            <div class="flex float-left pt-4">
                                <img src="call.svg" alt="" class="h-10" /> <text class="mr-8 ml-1 text-[1.2rem] font-semibold text-nowrap">+91 99999 99999</text>
                            </div>
                            <div class="flex float-right pt-4">
                                <a href="mailto:contactus@indianrecruitmentservices.com" class="mr-4 ml-1 text-[1.2rem] font-semibold flex"> <img src="mail.svg" alt="" class="h-9 mr-2" />contactus@indianrecruitmentservices.com
                                </a>
                            </div>
                        </div>
                        <h2 class='mt-8 mb-6'><u>Follow Us On</u></h2>
                        <div class='flex mt-4'>
                            <a href="/"><img src="facebook.svg" alt="" class='mr-3 bg-[#ffffff94] rounded-lg' /></a>
                            <a href="/"><img src="youtube.svg" alt="" class='mx-3' /></a>
                            <a href="/"><img src="linkedin.svg" alt="" class='mx-3' /></a>
                            <a href="/"><img src="instagram.svg" alt="" class='mx-3' /></a>
                        </div>
                    </aside>

                </div>
                <img src="Vector 47.svg" alt="" class="fixed -z-1 left-0 bottom-0 hidden md:block w-[25%] " />
            </div>


            <footer class="bottom-0 relative w-full mt-10">
                <Footer />
            </footer>
        </div>
    )
}

export default ContactUs
