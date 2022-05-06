import React from 'react'
import axios from 'axios';
import policy from '../../pages/api/policy.json'

const Intro = () => {
    // const policy = axios.get('/policy')
    return (
        <div>
            <div>
                <p className='font-bold text-3xl'><a href='/about'>Hup Soon Cheong Services Private Limited </a>&#8242;s <a href="/policy">Privacy Policy</a></p>
                <p className='font-semibold text-xl'>In this Policy, when we use “we”, “us” or “our”, we refer to the company which is collecting your personal data, or which is operating the website which you are accessing or using.</p>
                <p className='text-lg'>This Policy applies to all personal data that you may provide to us and the personal data we hold about you. By providing us with your personal data or by accessing, using or viewing the applicable website or any of its services, functions or contents (including transmitting, caching or storing of any such personal data), you shall be deemed to have agreed to each and all the terms, conditions, and notices in this Policy. If you do not agree, please cease useof the relevant website(s) and/or service(s) and DO NOT provide any personal data to us.</p>
            </div>
            <div></div>
        </div>
    )
}

export default Intro