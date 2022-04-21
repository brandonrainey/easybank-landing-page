
import Head from 'next/head'
import Image from 'next/image'
import Articles from '../components/Articles'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Main from '../components/Main'
import useMediaQuery from '../hooks/useMediaQuery'


export default function Home() {

  const isDesktop = useMediaQuery('(min-width: 480px)')

  return (
    <div className='mainContainer'>
      <Header 
        isDesktop={isDesktop}
      />
      <Intro 
        isDesktop={isDesktop}
      />
      <Main 
        isDesktop={isDesktop}
      />
      <Articles 
        isDesktop={isDesktop}
      />
      <Footer 
        isDesktop={isDesktop}
      />
    </div>
  )
}
