import Image from 'next/image';
import HeroImage from '../assets/hero.svg';

const Hero = () => {
  return (
    <header className="py-8 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="relative">
            <h1 className="text-7xl font-extrabold leading-tight text-neutral-blue">More than just shorter links</h1>
            <p className="text-xl leading-normal font-medium text-neutral-gray mt-2 mb-12">Build your brand&#39;s recognition and get detailed<br />insights on how your links are performing.</p>
            <a className="font-bold rounded-full px-12 py-3 bg-primary-cyan hover:bg-primary-cyan/50 text-white transition-all self-start text-xl" href="#">Get Started</a>
          </div>
          <Image
            src={HeroImage}
            alt="Shortly Hero"
          />
        </div>
      </div>
    </header>
  )
}

export default Hero