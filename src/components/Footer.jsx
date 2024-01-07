import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className=" flex flex-wrap justify-center">
                <a href='tel:+919355444355' className='flex'><img src="call.svg" alt="" /> <span className="mr-8 ml-1 font-bold">+91 9355444355</span></a>
                <a href="mailto:contactus@indianrecruitmentservices.com" className="mr-4 ml-1 mt-2 flex font-bold">
                    <img src="e-mail.svg" alt="" className='mr-2' /> contactus@indianrecruitmentservices.com</a>
            </div>
            <div className='text-center font-bold font-serif mt-2 pb-5'>
                Copyright © 2024 Indian Recruitment Services
            </div>
        </div>
    )
}

export default Footer
