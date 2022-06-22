import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import axios from "axios"

const FormInput = () => {
    const router = useRouter()
    const [contactInfo, setContactInfo] = useState("")

    const patterns = ["^[0-9]{8}$", "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"]

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contactInfo)
        setContactInfo(e.target.value)
    }
    const isNum = (str) => {
        const type = patterns.forEach((regex) => {
            return regex.test(str)
        })
        console.log(type)
        if (str.test("[0-9]+")) {
            return 'P'
        } else {
            return 'E'
        }
    }

    useEffect(() => {
        const insert = async () => {
            const res = await axios.post(`/api/subscribe`, { [isNum(contactInfo)]: contactInfo })
            if (res.status !== 200) {
                router.push({ pathname: "/error" })
            } else {
                alert("added sucessful")
                console.log(res)
            }
        }
    }, [router]
    )

    return (
        <form className='flex justify-between' onSubmit={handleSubmit}>
            <input value={contactInfo || " "} onChange={(e) => setContactInfo(e.target.value)} required requiredError="Phone number or Email is required!" pattern={regex} placeholder='Insert email or phone number' className='w-3/4 px-4 border border-1 rounded-md mr-2' />
            <button type="submit" className='border border-1 text-white bg-green-900 border-green-900 rounded-md px-4 py-3 w-1/4 ml-2 hover:ring focus:bg-green-700'>Update me</button>
        </form>
    )
}

export default FormInput