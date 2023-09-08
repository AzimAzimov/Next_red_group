import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '@/components/layout/Layout'


const CarPage: NextPage = () => {
  const { push, replace } = useRouter()
  console.log(push, replace); 
  
  return (
    <Layout title={'Cart Page'}>
      <button onClick={() => push('/')}>go home</button>
      <button onClick={() => replace('/')}>replace</button>
    </Layout>
  );
}

export default CarPage