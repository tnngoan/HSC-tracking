import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import axios from "axios"
import { validateContact } from '../../utility/validate'

const FormInput = ({ data }) => {
    const router = useRouter()
    const [contactInfo, setContactInfo] = useState("")
    const [contactNo, setContactNo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            contactNo: contactNo,
            contactType: validateContact(contactNo),
            hblNo: data.HBL, containerNo: data.ContainerNumber
        }
        insert(body)
        setContactNo("")
    }

    const insert = async (body) => {
        const res = await axios.post(`/api/subscribe`, { body })
        if (res.status !== 200) {
            router.push({ pathname: "/error" })
        } else {
            alert("added sucessful")
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex justify-between'>
            <input value={contactNo || ""}
                onChange={(e) => setContactNo(e.target.value)}
                required title='Email or Phone'
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$|^[0-9]{8}$"
                placeholder='Insert email or phone number'
                className='w-3/4 px-4 border border-1 rounded-md mr-2' />
            <button type="submit" className='border border-1 text-white bg-green-900 border-green-900 rounded-md px-4 py-3 w-1/4 ml-2 hover:ring focus:bg-green-700'>Update me</button>
        </form>
    )
}

export default FormInput