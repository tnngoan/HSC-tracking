import React from 'react'
import { Intro, PolicyContent } from '../components/policy'
import policies from '../pages/api/policy.json'
import Head from 'next/head'

const privacy = () => {
  return (
    <div className='px-28'>
      <Head>
        <meta name="keywords" content="HSC Term and Privacy" />
      </Head>
      <Intro />
      <PolicyContent policies={policies} />
    </div>
  )
}

export default privacy