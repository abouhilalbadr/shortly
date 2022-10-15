import Logo from './helpers/Logo'

const Navbar = () => {
  const links = [
    { title: 'Features', url: '/features' },
    { title: 'Pricing', url: '/pricing' },
    { title: 'Resources', url: '/resources' },
  ]
  return (
    <nav className="py-8">
      <div className="container flex justify-between items-center gap-8">
        <div className="flex items-center gap-24">
          <Logo color="#34313D" />
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link, i) => (
              <li key={i}>
                <a className="font-bold opacity-50 hover:opacity-100 transition-all" href={`${link.url}`}>
                  { link.title }
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <a className="font-bold opacity-50 hover:opacity-100 transition-all" href="#">Login</a>
          <a className="font-bold rounded-full px-6 py-2 bg-primary-cyan hover:bg-primary-cyan/50 text-white transition-all" href="#">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar