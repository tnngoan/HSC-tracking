import React from 'react'
import { Intro, Card } from '../components/policy'
import policy from '../pages/api/policy.json'
import Head from 'next/head'

const privacy = () => {
  console.log("private", policy)
  const title = Object.keys(policy)
  console.log("title arr", title)
  const titles = []
  
  return (
    <div className='px-28'>
      <Head>
        <meta name="keywords" content="HSC Term and Privacy" />
      </Head>
      <Intro />
      <Card policy={policy} />
    </div>
  )
}

export default privacy