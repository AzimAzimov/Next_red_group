import React, { FC, PropsWithChildren } from 'react'
import Header from '../header/Header'
import Meta, { IMeta } from '../seo/Meta'
import Footer from '../footer/Footer'

const Layout: FC <PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </Meta>
  )
}

export default Layout