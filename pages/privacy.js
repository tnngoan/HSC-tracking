import React from 'react'
import { Intro, PolicyContent } from '../components/policy'
import policies from '../pages/api/policy.json'
import Head from 'next/head'
import { Footer } from '../components/layout'

const privacy = () => {
  return (
    <div className='px-6 md:px-28'>
      <Head>
        <meta name="keywords" content="HSC Term and Privacy" />
      </Head>
      <Intro />
      <PolicyContent policies={policies} />
      <Footer />
    </div>
  )
}

export default privacy