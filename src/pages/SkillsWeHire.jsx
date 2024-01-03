import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const SkillsWeHire = () => {
    return (
        <div class="overflow-hidden bottom-0 min-h-screen">
            <header>
                <Navbar />
            </header>

            <div class="top-0 align-middle text-lg my-[6rem]">
                <h1 class="text-6xl font-bold text-center font-sans md:mt-[6rem] px-4 mt-32 mx-auto">Skills We Hire...</h1>
                <h1 class="text-2xl font-medium text-center font-sans md:mt-6 px-4 mx-auto">We support hiring of wide range of below mentioned skills -</h1>
                <div class='justify-center mt-7 '>
                    <div class='flex justify-center mt-3'>
                        <span class='text-lg font-bold bg-white px-4 py-2 rounded-full shadow-lg'>IT Skills</span>
                    </div>
                    <div class='md:flex mx-auto mt-5'>
                        <ul class='mx-auto min-w-[33%]'>
                            <li class="justify-center flex text-center">                  Cybersecurity </li>
                            <li class="justify-center flex text-center">                  Network setup </li>
                            <li class="justify-center flex text-center">          Programming languages </li>
                            <li class="justify-center flex text-center">          Full stack developers </li>
                            <li class="justify-center flex text-center">           Network architecture </li>
                            <li class="justify-center flex text-center">               Network security </li>
                            <li class="justify-center flex text-center">          Front-end development </li>
                            <li class="justify-center flex text-center">           Back-end development </li>
                            <li class="justify-center flex text-center">                Cloud computing </li>
                            <li class="justify-center flex text-center">         User experience design </li>
                            <li class="justify-center flex text-center">          User interface design </li>
                            <li class="justify-center flex text-center">                Cloud migration </li>
                            <li class="justify-center flex text-center">                   SQL software </li>
                            <li class="justify-center flex text-center">              Operating systems </li>
                            <li class="justify-center flex text-center">                       Software </li>
                            <li class="justify-center flex text-center">           Software development </li>
                            <li class="justify-center flex text-center">                  Data modeling </li>
                            <li class="justify-center flex text-center">                  Data security </li>
                        </ul>
                        <ul class='mx-auto min-w-[33%]'>
                            <li class="justify-center flex text-center"> DevOps</li>
                            <li class="justify-center flex text-center">        Mobile app development  </li>
                            <li class="justify-center flex text-center">                  IT management </li>
                            <li class="justify-center flex text-center">                 Data migration </li>
                            <li class="justify-center flex text-center">        Database administration </li>
                            <li class="justify-center flex text-center">               Cloud management </li>
                            <li class="justify-center flex text-center">               Systems Analysis </li>
                            <li class="justify-center flex text-center">                    Data Mining </li>
                            <li class="justify-center flex text-center">                Troubleshooting </li>
                            <li class="justify-center flex text-center">             Cloud architecture </li>
                            <li class="justify-center flex text-center">             Project management </li>
                            <li class="justify-center flex text-center">               Customer support </li>
                            <li class="justify-center flex text-center">                      Debugging </li>
                            <li class="justify-center flex text-center">                        AutoCAD </li>
                            <li class="justify-center flex text-center">                   Data Science </li>
                            <li class="justify-center flex text-center">                     Encryption </li>
                            <li class="justify-center flex text-center">               Game development </li>
                            <li class="justify-center flex text-center">                   Gamification </li>
                            <li class="justify-center flex text-center">                 Graphic design </li>
                            <li class="justify-center flex text-center">            Workflow automation </li>
                        </ul>
                        <ul class='mx-auto min-w-[33%]'>
                            <li class="justify-center flex text-center">         Customer relationship management, CRM </li>
                            <li class="justify-center flex text-center">                       Robotics </li>
                            <li class="justify-center flex text-center">            Backup and recovery </li>
                            <li class="justify-center flex text-center">               Batch processing </li>
                            <li class="justify-center flex text-center">        Deploying applications in a cloud environment </li>
                            <li class="justify-center flex text-center">            Information systems </li>
                            <li class="justify-center flex text-center">        Artificial intelligence </li>
                            <li class="justify-center flex text-center">              Database auditing </li>
                            <li class="justify-center flex text-center">                NoSQL databases </li>
                            <li class="justify-center flex text-center">                   Service Desk </li>
                            <li class="justify-center flex text-center">               Machine Learning </li>
                            <li class="justify-center flex text-center">                     Blockchain </li>
                        </ul>
                    </div>
                            <b class='float-right mr-[12%]'>...And Many More</b>
                </div>
                <div class='justify-center mt-10'>
                    <div class='flex justify-center mt-3'>
                        <span class='text-lg font-bold bg-white px-4 py-2 rounded-full shadow-lg'>Non-IT Skills</span>
                    </div>
                    <div class='flex mx-auto mt-5'>
                        <ul class=" mx-auto">
                            <li class="justify-center flex text-center"> Social Media Specialist</li>
                            <li class="justify-center flex text-center"> Business Development Executive / Manager</li>
                            <li class="justify-center flex text-center"> Business Analyst</li>
                            <li class="justify-center flex text-center"> Market Research Analyst</li>
                            <li class="justify-center flex text-center"> Content Developer</li>
                            <li class="justify-center flex text-center"> Customer Relationship Manager</li>
                            <li class="justify-center flex text-center"> Human Resource Manager</li>
                            <li class="justify-center flex text-center"> Marketing Manager</li>
                            <li class="justify-center flex text-center"> Accounts Manager</li>
                        </ul>
                    </div>
                            <b class='float-right mr-[12%]'>...And Many More</b>
                </div>
            </div>
            <img src="Vector 47.svg" alt="" class="fixed -z-1 left-0 bottom-0 hidden md:block w-[25%] " />
            <footer class="bottom-0 relative w-full">
                <Footer />
            </footer>
        </div>
    )
}

export default SkillsWeHire
