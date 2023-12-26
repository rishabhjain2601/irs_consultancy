import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const WhyChooseUs = () => {
    return (
        <div class="overflow-hidden bottom-0 md:h-screen min-h-[100vh]">
            <header>
                <Navbar />
            </header>

            <div class="top-0 mx-[15%] my-[6rem]">
                <h1 class="text-6xl font-bold text-center font-sans mt-32 md:mt-[6rem] ">Why Choose Us?</h1>
                <br />
                <div class="md:block flex md:mt-6 md:relative mx-auto w-full">
                    <div class='md:flex mt-16 text-center font-bold '>
                        <div class='rounded-full w-20 h-20 bg-white md:float-left mx-auto shadow-lg'>
                            <img src="clock.svg" alt="" class='m-auto md:mt-4 max-md:pt-4 mb-6' />
                            <span class='text-nowrap text-center -ml-4'>Always On Time</span>
                        </div>
                        <div class='rounded-full w-20 h-20 bg-white md:float-right mx-auto shadow-lg'>
                            <img src="sheild.svg" alt="" class='m-auto md:mt-4 mt-16 md:h-14 h-[70px] max-md:pt-4 mb-5 md:mb-3' />
                            <span class='text-nowrap -ml-14'>Confidentiality Maintained</span>
                        </div>
                        <div class='rounded-full w-20 h-20 bg-white mx-auto shadow-lg'>
                            <img src="Work.svg" alt="" class='m-auto md:mt-2 mt-16 max-md:pt-2 mb-4' />
                            <span class='text-nowrap -ml-2'>Hard Working</span>
                        </div>
                    </div>

                    <div class='md:flex md:mt-24 mt-16 ml-auto mr-10 text-center font-bold md:mx-auto'>
                        <div class='rounded-full w-20 h-20 bg-white md:float-right mx-auto shadow-lg'>
                            <img src="price.svg" alt="" class='m-auto md:mt-2 max-md:pt-2 mb-4 md:mb-3' />
                            <span class='text-nowrap -ml-2'>Lowest Rates</span>
                        </div>
                        <div class='rounded-full w-20 h-20 md:float-left bg-white mx-auto shadow-lg'>
                            <img src="Profit.svg" alt="" class='m-auto md:mt-2 max-md:pt-3 mt-16 md:mb-4 mb-3' />
                            <span class='text-nowrap -ml-10'>Maximum Profitability</span>
                        </div>
                        <div class='rounded-full w-20 h-20 bg-white mx-auto shadow-lg'>
                            <img src="Class.svg" alt="" class='m-auto md:mt-2 mt-16 max-md:pt-2 mb-4' />
                            <span class='text-nowrap -ml-8'>Best In Class Service</span>
                        </div>
                    </div>
                </div>
                <img src="Vector 47.svg" alt="" class="absolute -z-1 left-0 bottom-0 hidden md:block w-[25%] " />
            </div>
            <footer class="bottom-0 max-md:relative absolute w-full">
                <Footer/>
            </footer>
        </div>
    )
}

export default WhyChooseUs
