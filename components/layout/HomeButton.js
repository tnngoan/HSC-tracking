import React from 'react'
import Link from 'next/link';

const HomeButton = () => {
    return (
        <div className='flex justify-center items-center mt-4'>
            <Link href="/" passHref>
                <button className='p-3 w-1/4 border border-2 border-green-999 hover:bg-green-900 hover:border-green-900 hover:text-white rounded-md'>Go back</button>
            </Link>
        </div>
    )
}

export default HomeButton