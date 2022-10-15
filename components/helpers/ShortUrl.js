import { useState } from "react"
const ShortUrl = ({ shortly }) => {
  const [text, setText] = useState('Copy')
  const copyShortUrl = () => {
    setText("Copied")
    navigator.clipboard.writeText(shortly.shorturl)
    setTimeout(() => setText("Copy"), 1500)
  }
  return (
    <div className="bg-white py-6 px-8 rounded-xl relative -top-16 flex items-center justify-between">
      <a target="_blank" rel="noreferrer" href={shortly.longurl}>
        {shortly.longurl}
      </a>
      <div className="flex items-center gap-8">
        <a target="_blank" rel="noreferrer" className="text-primary-cyan" href={shortly.shorturl}>
          {shortly.shorturl}
        </a>
        <button
          className={`font-bold rounded-xl px-8 py-3 text-white transition-all ${text === 'Copy' ? 'bg-primary-cyan hover:bg-primary-cyan/50' : 'bg-primary-violet'}`}
          onClick={copyShortUrl}
        >
          {text}
        </button>
      </div>
    </div>
  )
}

export default ShortUrl