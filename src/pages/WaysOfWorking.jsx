import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const WaysOfWorking = () => {
    return (
        <div className="overflow-hidden">
            <header>
                <Navbar />
            </header>

            <div className="top-0 align-middle my-[6rem]">
                <h1 className="text-4xl font-bold text-center font-sans md:mt-[6rem] mt-32 mx-auto">Ways Of Working</h1>
                <div className="md:flex mt-6 md:relative md:bottom-[18%] md:justify-center mx-auto w-[95%]">
                    <img src="mission.svg" alt="" className="mx-auto justify-center mt-4 md:w-[40%] my-auto" />
                    <p className='w-[100%] md:float-right my-10 mx-auto px-4 text-lg'>
                        Our Aim is to close any position shared with us within two weeks. To meet this aim, we offer customised plans suitable as per needs of our clients-
                        <br />
                        <br />
                        <ul className="list-disc text-lg">
                            <li><b>End to End Hiring</b> – In this plan, We provide support in end to end hiring right from initial screening of candidates till the final technical assessment of the candidate. Final HR round to be taken by client to assess suitability and offer the position to him.</li>

                            <u>Benefits</u> – No technical round required at client’s end hence technical panel at client’s end are not required.
<br />
<br />
                            <li><b>Sourcing of technically assessed profiles</b> – In this plan, we screen the suitable candidates as per requirements and get them assessed via online test provided by our tech partners (clients can also share their own questions for assessment). A detailed report would be shared with client along with each profile. Client would take their own technical assessment and would finalize the candidate to close the position.</li>

                            <u>Benefits</u> – Technically superior profiles would be shared as candidates would have already undergone a technical test already. This would help in early closure of position.
                            <br />
<br />
                            <li><b>Sourcing of profiles</b> – In this plan, we screen the suitable candidates as per requirements shared and share the same with the client. Basis on shortlisting, we line them for further rounds to be conducted at client’s end.</li>

                                <u>Benefits</u> – Client would be able to assess the candidates via their own technical panel but the overall time in closing a position would be more in comparison to above two mentioned plans.
                        </ul>
                    </p>
                </div>
            </div>
            <img src="Vector 47.svg" alt="" className="fixed -z-1 left-0 bottom-0 hidden md:block w-[25%] " />
            <footer className="bottom-0 w-full relative z-0">
                <Footer />
            </footer>
        </div>
    )
}

export default WaysOfWorking
