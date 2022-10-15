import Logo from './helpers/Logo'
import List from './helpers/List'

import { SlSocialFacebook, SlSocialTwitter, SlSocialInstagram, SlSocialPintarest } from "react-icons/sl";


const Footer = () => {
  const links = [
    { title: 'Feature', list: [
      { title: 'Link Shortening', url: '#' },
      { title: 'Branded Links', url: '#' },
      { title: 'Analytics', url: '#' },
    ] },
    { title: 'Resources', list: [
      { title: 'Blog', url: '#' },
      { title: 'Developers', url: '#' },
      { title: 'Support', url: '#' },
    ] },
    { title: 'Company', list: [
      { title: 'About', url: '#' },
      { title: 'Our Team', url: '#' },
      { title: 'Careers', url: '#' },
      { title: 'Contact', url: '#' },
    ] }
  ];
  const social = [
    { url: '#', icon: <SlSocialFacebook size="1.5em" /> },
    { url: '#', icon: <SlSocialTwitter size="1.5em" /> },
    { url: '#', icon: <SlSocialPintarest size="1.5em" /> },
    { url: '#', icon: <SlSocialInstagram size="1.5em" /> },
  ]
  return (
    <footer className="bg-neutral-violet text-white py-12 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Logo color="#fff" />
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-6 justify-between">
            <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {links.map((link, i) => (
                <div className="relative" key={i}>
                  <h3 className="font-semibold mb-4 text-base">
                    {link.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {link.list.map((item, ind) => (
                      <List item={item} key={ind} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <ul className="flex gap-8">
              {social.map((item, i) => (
                <li key={i}>
                  <a href={item.url}>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer