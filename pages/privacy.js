import React from 'react'
import { Intro, Card } from '../components/policy'
import policies from '../pages/api/policy.json'
import Head from 'next/head'

const privacy = () => {
  return (
    <div className='px-28'>
      <Head>
        <meta name="keywords" content="HSC Term and Privacy" />
      </Head>
      <Intro />
      <Card policies={policies} />
    </div>
  )
}

export default privacy