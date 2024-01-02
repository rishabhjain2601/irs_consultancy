import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const SkillsWeHire = () => {
    return (
        <div class="overflow-hidden bottom-0 min-h-screen">
            <header>
                <Navbar />
            </header>

            <div class="top-0 align-middle my-[6rem]">
                <h1 class="text-6xl font-bold text-center font-sans md:mt-[6rem] mt-32 mx-auto">Skills We Hire...</h1>
                <h1 class="text-2xl font-medium text-center font-sans md:mt-6 mx-auto">We support hiring of wide range of below mentioned skills -</h1>
                <div class='flex justify-center mt-3'>
                    <span class='text-lg font-bold bg-white px-4 py-2 rounded-full shadow-lg'>IT Skills</span>
                </div>
                <div>

                </div>
            </div>
            <img src="Vector 47.svg" alt="" class="fixed -z-1 left-0 bottom-0 hidden md:block w-[25%] " />
            <footer class="bottom-0 md:absolute w-full">
                <Footer />
            </footer>
        </div>
    )
}

export default SkillsWeHire
