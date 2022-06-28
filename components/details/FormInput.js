import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import axios from "axios"

const FormInput = () => {
    const router = useRouter()
    const [contactInfo, setContactInfo] = useState("")
    // const patterns = 
    // console.log((/^[0-9]{8}$/).test('09090909'))
    // console.log((/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test("ngoan.n.tr@gmial.com"))
    const validateContact = (contact) => {
        console.log(contact)
        // if (contact.test("^[0-9]{8}$")) {
        //     setContactInfo({ type: "P" })
        //     console.log(contactInfo.type)
        // }
        // if (contact.test(
        //     "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"
        // )) {
        //     setContactInfo({ type: "E" })
        //     // console.log(contactInfo.type)
        // }
        // console.log('invalid')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("!!!!", e.target.value)
        validateContact(e.target.value)
        insert()
    }

    const insert = async () => {
        const res = await axios.post(`/api/subscribe`, { contactInfo })
        if (res.status !== 200) {
            router.push({ pathname: "/error" })
        } else {
            alert("added sucessful")
        }
    }

    return (
        <form className='flex justify-between' onSubmit={handleSubmit}>
            <input value={contactInfo || ""} onChange={(e) => setContactInfo(e.target.value)} required pattern={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/} requirederror="Phone number or Email is required!" placeholder='Insert email or phone number' className='w-3/4 px-4 border border-1 rounded-md mr-2' />
            <button type="submit" className='border border-1 text-white bg-green-900 border-green-900 rounded-md px-4 py-3 w-1/4 ml-2 hover:ring focus:bg-green-700'>Update me</button>
        </form>
    )
}

export default FormInput