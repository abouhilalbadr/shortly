import { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Logo from '../components/helpers/Logo'
const Code = ({ shortly }) => {
  const [counter, setCounter] = useState(5)
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(old => old - 1);
    }, 1000);

    setTimeout(() => {
      location.href = shortly.longurl;
    }, 5000);

    return () => clearInterval(interval);
  }, [shortly.longurl]);
  return (
    <>
      <Head>
        <title>Shortly - Short you links</title>
        <meta name="description" content="short your links" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="min-h-screen flex justify-center items-center bg-primary-gray">
        {shortly && (
          <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-8">
            <div className="flex flex-col items-center gap-8 text-center">
              <Logo />
              <h1>You are being redirect to <a className="font-bold text-primary-cyan" href={shortly.longurl}>{shortly.longurl}</a></h1>
              <span className="text-4xl">
                {counter}
              </span>
            </div>
          </div>
        )}
        {!shortly && <h2 className="font-bold text-4xl">No Code Found</h2>}
      </div>
    </>
  )
}

export async function getServerSideProps({ params }) {
  let shortly = null;
  // Fetch data from external API
  const code = params?.code || null;
  const { data: urls } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/${code}`)
  if (urls.length > 0) shortly = urls[0]


  // Pass data to the page via props
  return {
    props: {
      shortly
    }
  }
}

export default Code