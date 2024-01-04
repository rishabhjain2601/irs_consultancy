import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const WhyChooseUs = () => {
    return (
        <div className="overflow-hidden bottom-0 min-h-screen">
            <header>
                <Navbar />
            </header>

            <div className="top-0 mx-[10%] my-[6rem]">
                <h1 className="text-4xl font-bold text-center font-sans mt-32 md:mt-[6rem] ">Why Choose Us?</h1>
                <br />
                <div className="md:block flex md:mt-6 md:relative mx-auto w-full">
                    <div className='md:flex mt-16 text-center font-bold '>
                        <div className='rounded-full w-20 h-20 bg-white md:float-left mx-auto shadow-lg max-md:mb-24'>
                            <img src="clock.svg" alt="" className='m-auto md:mt-4 max-md:pt-4 mb-6' />
                            <span className='text-nowrap text-center -ml-4'>Quick Closures</span>
                        </div>
                        <div className='rounded-full w-20 h-20 bg-white md:float-right mx-auto shadow-lg mb-10'>
                            <img src="sheild.svg" alt="" className='m-auto md:mt-4 mt-24 md:h-14 h-[70px] max-md:pt-4 mb-4 md:mb-3' />
                            <span className='text-nowrap text-center min-[420px]:-ml-14'>End To End <br className="min-[420px]:hidden"/> Recruitment <br /> Solution</span>
                        </div>
                        <div className='rounded-full w-20 h-20 bg-white mx-auto shadow-lg'>
                            <img src="Work.svg" alt="" className='m-auto md:mt-2 mt-24 max-md:pt-2 mb-[14px]' />
                            <span className='text-nowrap max-[400px]:text-wrap text-center min-[400px]:-ml-4'>Customized Plans</span>
                        </div>
                    </div>

                    <div className='md:flex md:mt-24 mt-16 ml-auto mr-10 text-center font-bold md:mx-auto'>
                        <div className='rounded-full w-20 h-20 bg-white md:float-right mx-auto shadow-lg max-md:mb-24'>
                            <img src="price.svg" alt="" className='m-auto md:mt-2 max-md:pt-2 mb-4 md:mb-3' />
                            <span className='text-nowrap -ml-3'>Excellent <br /> Communication & <br />Coordination</span>
                        </div>
                        <div className='rounded-full w-20 h-20 md:float-left bg-white mx-auto shadow-lg'>
                            <img src="Profit.svg" alt="" className='m-auto md:mt-2 max-md:pt-3 mt-24 md:mb-4 mb-3' />
                            <span className='text-nowrap -ml-10 max-[420px]:-ml-1 max-[420px]:text-wrap text-center mt-2'>Optimum Profitability</span>
                        </div>
                        <div className='rounded-full w-20 h-20 bg-white mx-auto shadow-lg'>
                            <img src="Class.svg" alt="" className='m-auto md:mt-2 mt-24 max-md:pt-2 mb-4' />
                            <span className='text-nowrap text-center min-[400px]:-ml-8'>Best In Class <br className="min-[400px]:hidden"/>Service</span>
                        </div>
                    </div>
                </div>
                <img src="Vector 47.svg" alt="" className="fixed -z-1 left-0 bottom-0 hidden md:block w-[25%] " />
            </div>
            <footer className="mt-[10%] max-md:relative w-full">
                <Footer/>
            </footer>
        </div>
    )
}

export default WhyChooseUs
