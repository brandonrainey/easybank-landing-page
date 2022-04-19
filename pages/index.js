import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Intro from '../components/Intro'


export default function Home() {
  return (
    <div className='mainContainer'>
      <Header />
      <Intro />
    </div>
  )
}
