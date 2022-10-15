import { useState } from 'react'
import axios from 'axios'

import ShortBg from './helpers/ShortBg'
import ShortUrl from './helpers/ShortUrl'

const Short = () => {

  const [url, setUrl] = useState('')
  const [error, setError] = useState(false)
  const [shortly, setShortly] = useState(null)

  const shortLink = async () => {
    const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!urlPattern.test(url)) return setError(true)
    if (!url) return setError(true)
    const { data: shortly } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/url/shortly`, { longUrl: url })
    if (shortly.length > 0) setShortly(shortly[0]);
  }

  return (
    <section className="mt-32 bg-primary-gray">
      <div className="container">
        <div className="relative -top-24">
          <ShortBg />
          <div className="absolute top-0 left-0 w-full h-full px-8 lg:px-16 flex flex-col justify-center">
            <div className="grid grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <input
                  type="text"
                  className={`bg-white px-6 h-16 w-full rounded-xl focus:outline-none border-2 ${error ? 'border-red-400' : 'border-white'}`}
                  placeholder="Shorten a link here..."
                  onChange={(e) => setUrl(e.target.value)}
                  onInput={() => setError(false)}
                  value={url}
                />
              </div>
              <div className="col-span-1">
                <button
                  className="font-bold rounded-xl px-2 h-16 bg-primary-cyan hover:bg-primary-cyan/50 text-white transition-all text-xl w-full"
                  onClick={shortLink}
                >Shorten It!</button>
              </div>
            </div>
            {error && <p className="text-red-400 italic text-base mt-2">Please add a valid link</p>}
          </div>
        </div>
        {shortly && <ShortUrl shortly={shortly} />}
      </div>
    </section>
  )
}

export default Short