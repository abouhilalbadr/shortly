import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Short from '../components/Short'
import Statistics from '../components/Statistics'
import Boost from '../components/Boost'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Head>
        <title>Shortly - Short you links</title>
        <meta name="description" content="short your links" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <Short />
      <Statistics />
      <Boost />
      <Footer />
    </>
  )
}

export default Home