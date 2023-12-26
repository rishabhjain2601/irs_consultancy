import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Mission = () => {
    return (
        <div class="overflow-hidden bottom-0 md:h-screen">
            <header>
                <Navbar />
            </header>

            <div class="top-0 align-middle my-[6rem]">
                <h1 class="text-6xl font-bold text-center font-sans md:mt-[6rem] mt-32 md:ml-20">Our Mission</h1>
                <div class="md:flex mt-6 md:relative md:bottom-[18%] md:justify-center mx-[12%] w-[80%]">
                    <img src="mission.svg" alt="" class="mx-auto justify-center mt-4 md:w-[40%] my-auto" />
                    <p class='w-[90%] md:float-right my-auto mx-auto text-3xl'>
                        To fulfill every single hiring need within defined timelines for our clients by best-in-class workforce and services which help our clients flourishing their business
                    </p>
                </div>
                <img src="Vector 47.svg" alt="" class="absolute -z-1 left-0 bottom-0 hidden md:block w-[25%] " />
            </div>
            <footer class="md:bottom-0 md:absolute w-full">
                <Footer/>
            </footer>
        </div>
    )
}

export default Mission
