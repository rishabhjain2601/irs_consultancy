import React from 'react'
import Navbar from '../components/Navbar'

const Mission = () => {
    return (
        <div class="h-[100vh] overflow-hidden bottom-0">
            <header>
                <Navbar />
            </header>
            <img src="Ellipse 36.svg" alt="" class=' absolute -z-1 h-auto bottom-0 left-0 object-contain' />
            <img src="Ellipse 39.svg" alt="" class=' h-auto mr-[150px] absolute -z-1 right-0 bottom-0 object-contain' />
            <img src="Ellipse 37.svg" alt="" class=' absolute right-0 bottom-0 -z-1 object-contain' />


            <div class="bottom-0">
                <h1 class="text-5xl font-bold text-center font-sans md:mt-[8%] mt-[5rem] ml-20">Our Mission</h1>
                <div class="flex mx-auto w-[80%]">
                    <img src="mission.svg" alt="" class=" justify-center w-[40%] my-auto" />
                    <p class='w-[50%] float-right my-auto'>
                        To fulfill every single hiring need within defined timelines for our clients by best-in-class workforce and services which help our clients flourishing their business
                    </p>
                </div>
                <footer>
                    <div class=" flex justify-center">
                        <img src="call.svg" alt="" /> <text class="mr-8 ml-1 font-bold">+91 99999 99999</text>
                        <img src="mail.svg" alt="" /> <div class="mr-4 ml-1 font-bold">demo@gmail.com</div>
                    </div>
                    <div class='text-center font-bold font-serif mt-2 mb-5'>
                        Copyright © 2023 Agile Consultants | Powered by Agile Consultants
                    </div>
                </footer>
            </div>
                <img src="Vector 47.svg" alt="" class="absolute -z-1 left-0 bottom-0 hidden md:block w-[25%] " />
        </div>
    )
}

export default Mission
