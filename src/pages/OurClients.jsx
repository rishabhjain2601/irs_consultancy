import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const OurClients = () => {
    return (
        <div class="overflow-hidden bottom-0 md:h-screen min-h-[100vh]">
            <header>
                <Navbar />
            </header>
            <div class="top-0 align-middle my-[6rem]">
                <h1 class="text-6xl font-bold text-center font-sans md:mt-[6rem] mt-32 md:ml-20">Our Clients</h1>
                <div class="md:flex mt-6 md:relative md:bottom-[18%] md:justify-center mx-[12%] w-[80%]">
                    
                    
                </div>
                <img src="Vector 47.svg" alt="" class="absolute -z-1 left-0 bottom-0 hidden md:block w-[25%] " />
            </div>


            <footer class="md:bottom-0 md:absolute w-full">
                <Footer />
            </footer>
        </div>
    )
}

export default OurClients
