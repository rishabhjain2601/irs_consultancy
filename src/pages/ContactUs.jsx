import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <div class="overflow-hidden bottom-0 md:h-screen min-h-[100vh]">
            <header>
                <Navbar />
            </header>
            <div class="top-0 align-middle my-[6rem]">
                <h1 class="text-6xl font-bold text-center font-sans md:mt-[6rem] mt-32 md:ml-20">Our Mission</h1>
                <div class="md:flex mt-6 md:relative md:bottom-[18%] md:justify-center mx-[12%] w-[80%]">
                    <img src="illustration 2.svg" alt="" class="mx-auto max-md:hidden justify-center mt-4 md:w-[40%] my-auto" />
                    <aside class='w-[90%] text-3xl'>
                        <h2><u>Contact Details</u></h2>
                        <div class="my-[10%] mx-0 flex flex-wrap justify-center">
                            <div class="flex float-left pt-4">
                                <img src="call.svg" alt="" class="h-10" /> <text class="mr-8 ml-1 text-[1.5rem] font-semibold text-nowrap">+91 99999 99999</text>
                            </div>
                            <div class="flex float-right pt-4">
                                <img src="mail.svg" alt="" class="h-9" /> <div class="mr-4 ml-1 text-[1.5rem] font-semibold text-nowrap">demo@gmail.com
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
                <img src="Vector 47.svg" alt="" class="absolute -z-1 left-0 bottom-0 hidden md:block w-[25%] " />
            </div>


            <footer class="bottom-0 absolute w-full">
                <Footer />
            </footer>
        </div>
    )
}

export default ContactUs
