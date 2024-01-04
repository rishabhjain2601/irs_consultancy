import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const SkillsWeHire = () => {
    return (
        <div className="overflow-hidden bottom-0 min-h-screen">
            <header>
                <Navbar />
            </header>

            <div className="top-0 align-middle text-lg my-[6rem]">
                <h1 className="text-4xl font-bold text-center font-sans md:mt-[6rem] px-4 mt-32 mx-auto">Skills We Hire...</h1>
                <h1 className="text-xl font-medium text-center font-sans md:mt-6 px-4 mx-auto">We support hiring of wide range of below mentioned skills -</h1>
                <div className='justify-center mt-7 '>
                    <div className='flex justify-center mt-3'>
                        <span className='text-lg font-bold bg-white px-4 py-2 rounded-full shadow-lg'>IT Skills</span>
                    </div>
                    <div className='md:flex mx-auto mt-5'>
                        <ul className='mx-auto min-w-[33%]'>
                            <li className="justify-center flex text-center">                  Cybersecurity </li>
                            <li className="justify-center flex text-center">                  Network setup </li>
                            <li className="justify-center flex text-center">          Programming languages </li>
                            <li className="justify-center flex text-center">          Full stack developers </li>
                            <li className="justify-center flex text-center">           Network architecture </li>
                            <li className="justify-center flex text-center">               Network security </li>
                            <li className="justify-center flex text-center">          Front-end development </li>
                            <li className="justify-center flex text-center">           Back-end development </li>
                            <li className="justify-center flex text-center">                Cloud computing </li>
                            <li className="justify-center flex text-center">         User experience design </li>
                            <li className="justify-center flex text-center">          User interface design </li>
                            <li className="justify-center flex text-center">                Cloud migration </li>
                            <li className="justify-center flex text-center">                   SQL software </li>
                            <li className="justify-center flex text-center">              Operating systems </li>
                            <li className="justify-center flex text-center">                       Software </li>
                            <li className="justify-center flex text-center">           Software development </li>
                            <li className="justify-center flex text-center">                  Data modeling </li>
                            <li className="justify-center flex text-center">                  Data security </li>
                        </ul>
                        <ul className='mx-auto min-w-[33%]'>
                            <li className="justify-center flex text-center"> DevOps</li>
                            <li className="justify-center flex text-center">        Mobile app development  </li>
                            <li className="justify-center flex text-center">                  IT management </li>
                            <li className="justify-center flex text-center">                 Data migration </li>
                            <li className="justify-center flex text-center">        Database administration </li>
                            <li className="justify-center flex text-center">               Cloud management </li>
                            <li className="justify-center flex text-center">               Systems Analysis </li>
                            <li className="justify-center flex text-center">                    Data Mining </li>
                            <li className="justify-center flex text-center">                Troubleshooting </li>
                            <li className="justify-center flex text-center">             Cloud architecture </li>
                            <li className="justify-center flex text-center">             Project management </li>
                            <li className="justify-center flex text-center">               Customer support </li>
                            <li className="justify-center flex text-center">                      Debugging </li>
                            <li className="justify-center flex text-center">                        AutoCAD </li>
                            <li className="justify-center flex text-center">                   Data Science </li>
                            <li className="justify-center flex text-center">                     Encryption </li>
                            <li className="justify-center flex text-center">               Game development </li>
                            <li className="justify-center flex text-center">                   Gamification </li>
                            <li className="justify-center flex text-center">                 Graphic design </li>
                            <li className="justify-center flex text-center">            Workflow automation </li>
                        </ul>
                        <ul className='mx-auto min-w-[33%]'>
                            <li className="justify-center flex text-center">         Customer relationship management, CRM </li>
                            <li className="justify-center flex text-center">                       Robotics </li>
                            <li className="justify-center flex text-center">            Backup and recovery </li>
                            <li className="justify-center flex text-center">               Batch processing </li>
                            <li className="justify-center flex text-center">        Deploying applications in a cloud environment </li>
                            <li className="justify-center flex text-center">            Information systems </li>
                            <li className="justify-center flex text-center">        Artificial intelligence </li>
                            <li className="justify-center flex text-center">              Database auditing </li>
                            <li className="justify-center flex text-center">                NoSQL databases </li>
                            <li className="justify-center flex text-center">                   Service Desk </li>
                            <li className="justify-center flex text-center">               Machine Learning </li>
                            <li className="justify-center flex text-center">                     Blockchain </li>
                        </ul>
                    </div>
                            <b className='float-right mr-[12%]'>...And Many More</b>
                </div>
                <div className='justify-center mt-10'>
                    <div className='flex justify-center mt-3'>
                        <span className='text-lg font-bold bg-white px-4 py-2 rounded-full shadow-lg'>Non-IT Skills</span>
                    </div>
                    <div className='flex mx-auto mt-5'>
                        <ul className=" mx-auto">
                            <li className="justify-center flex text-center"> Social Media Specialist</li>
                            <li className="justify-center flex text-center"> Business Development Executive / Manager</li>
                            <li className="justify-center flex text-center"> Business Analyst</li>
                            <li className="justify-center flex text-center"> Market Research Analyst</li>
                            <li className="justify-center flex text-center"> Content Developer</li>
                            <li className="justify-center flex text-center"> Customer Relationship Manager</li>
                            <li className="justify-center flex text-center"> Human Resource Manager</li>
                            <li className="justify-center flex text-center"> Marketing Manager</li>
                            <li className="justify-center flex text-center"> Accounts Manager</li>
                        </ul>
                    </div>
                            <b className='float-right mr-[12%]'>...And Many More</b>
                </div>
            </div>
            <img src="Vector 47.svg" alt="" className="fixed -z-1 left-0 bottom-0 hidden md:block w-[25%] " />
            <footer className="bottom-0 relative w-full">
                <Footer />
            </footer>
        </div>
    )
}

export default SkillsWeHire
