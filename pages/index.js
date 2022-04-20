
import Head from 'next/head'
import Image from 'next/image'
import Articles from '../components/Articles'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Main from '../components/Main'


export default function Home() {
  return (
    <div className='mainContainer'>
      <Header />
      <Intro />
      <Main />
      <Articles />
      <Footer />
    </div>
  )
}
