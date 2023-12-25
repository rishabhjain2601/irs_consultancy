import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';
import React from 'react'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <img src="Ellipse 36.svg" alt="" class=' absolute -z-1 h-auto top-0' />
            <img src="Ellipse 39.svg" alt="" class=' h-auto mr-[150px] absolute -z-1 right-0 top-0 my-[-60px]' />
            <img src="Ellipse 37.svg" alt="" class=' absolute right-0 top-0 -z-1' />
            <h1 class="text-5xl font-bold font-sans md:mt-[8%] mt-[5rem] ml-20">Agile <br />Consultants</h1>
            <h2 class='font-bold text-xl mt-2 ml-20'>Bringing Agility In Recruitment</h2>

            <p class='font-medium mt-6 md:w-[40%] w-[80%] ml-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur repellendus, accusamus nisi a quas reiciendis quod voluptate illum, corrupti quis, nobis mollitia ab est eos? Cupiditate inventore dicta tenetur perferendis.</p>
            <button class="bg-[#407BFF] ml-20 px-3 py-2 cursor-pointer font-normal z-2 absolute hover:bg-[#4059ff] mt-8 rounded-full text-white" onClick={() => { navigate('/hi') }}>Contact Us</button>
            <div class="md:w-[30%]">
                <img src="Group 138.svg" alt="" class="md:absolute right-0 top-0 md:mt-[120px] ml-32 md:ml-0 z-2 w-[500px] h-auto md:mr-10" />
            </div>

            <img src="Ellipse 39.svg" alt="" class="absolute -z-1 right-0 mt-72" />

            <h2 class="my-10 font-bold text-3xl text-center w-full md:mt-[280px]">Trusted by</h2>

            <div class="flex flex-wrap p-10 py-2 w-full">
                <img src="Group 141.svg" alt="" class="mx-auto py-3 lg:px-2 px-8" />
                <img src="Group 142.svg" alt="" class="mx-auto py-3 lg:px-2 px-8" />
                <img src="Group 144.svg" alt="" class="mx-auto py-3 lg:px-2 px-8" />
                <img src="Group 145.svg" alt="" class="mx-auto py-3 lg:px-2 px-8" />
                <img src="Group 146.svg" alt="" class="mx-auto py-3 lg:px-2 px-8" />
            </div>
            {/* <br /> */}
            <h2 class="font-bold text-3xl text-center w-full mt-[120px]">ABOUT US</h2>
            <p class="text-center mt-7 font-serif font-medium mx-auto w-[40%]">We are a recruitment firm who believe in business partnering with our valued customer by building long term relations through our client service.</p>

            <div class="flex pt-[10px]">
                <div class="w-[55%] my-auto md:block hidden">
                    <img src="illustration.jpg" alt="" class="hidden md:block md:w-full h-auto bottom-0" />
                </div>
                <div class="my-[10%] md:w-[45%] mx-12">
                    <aside class="flex px-4 py-4 rounded-xl shadow-lg bg-white relative w-[100%]">
                        <img src="Group.svg" alt="" class="w-6 h-6 my-auto" />
                        <div class="pl-2">
                            We help in hiring across various industry segments for multinational corporations as well as leading Indian business houses.
                        </div>
                    </aside>
                    <aside class="flex px-4 h-16 rounded-xl shadow-lg bg-white mt-12 relative w-[100%]">
                        <img src="Group.svg" alt="" class="w-6 h-6 my-auto" />
                        <div class="pl-2 my-auto">
                            We believe in Agility and hence want to bring the same in the field of recruitment.
                        </div>
                    </aside>
                    <aside class="flex px-4 py-4 rounded-xl shadow-lg bg-white mt-12 relative w-[100%]">
                        <img src="Group.svg" alt="" class="w-6 h-6 my-auto" />
                        <div class="pl-2">
                            At Agile Consultants, we recognize this critical need and work in Agile fashion where we make sure that we get the position closed in our 2 weekly Sprint cycle.
                        </div>
                    </aside>
                    <aside class="flex px-4 py-4 rounded-xl shadow-lg bg-white mt-12 relative w-[100%]">
                        <img src="Group.svg" alt="" class="w-6 h-6 my-auto" />
                        <div class="pl-2">
                            In today’s human resources market, skilled talent is in short supply. As a matter of fact, finding talent has become a difficult and costly task.
                        </div>
                    </aside>
                </div>
            </div>
            <img src="Ellipse 39.svg" alt="" class="absolute -z-1 right-0 top-0 mt-[1100px] h-[500px]" />
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
    )
}

export default Home
