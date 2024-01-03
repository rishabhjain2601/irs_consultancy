import React from 'react'

const Footer = () => {
    return (
        <div>
            <div class=" flex flex-wrap justify-center">
                <img src="call.svg" alt="" /> <text class="mr-8 ml-1 font-bold">+91 99999 99999</text>
                <a href="mailto:contactus@indianrecruitmentservices.com" class="mr-4 ml-1 flex font-bold">
                    <img src="mail.svg" alt="" class='mr-2' /> contactus@indianrecruitmentservices.com</a>
            </div>
            <div class='text-center font-bold font-serif mt-2 pb-5'>
                Copyright © 2024 Indian Recruitment Services
            </div>
        </div>
    )
}

export default Footer
