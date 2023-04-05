import Head from 'next/head'
import NavBar from './NavBar';
import React, { useEffect } from 'react'
import prism from 'prismjs'
import Info from './Info';
import Footer from './Footer';

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  const info = Info();
  return (
    <div className='fanma'>
      <div className='maw'>
        <Head>
          <title>{info.name}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <NavBar />
        <main className='main'>
          {children}
          <Footer />
        </main>
        {/* {!home && (
          <div className='back'>
            <Link href="/">← Back to home</Link>
          </div>
        )} */}
                
      </div>
    </div>
  )
}

