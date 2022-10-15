import Card from "./helpers/Card"

const Statistics = () => {
  const cards = [
    { icon: 'brand', title: 'Brand Recognition', desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in vour content." },
    { icon: 'records', title: 'Detailed Records', desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.' },
    { icon: 'custom', title: 'Fully Customizable', desc: 'Improve brand awareness anc content discoverability through customizable links, supercnarging audience engagement' }
  ]
  return (
    <section className="bg-primary-gray pb-12 lg:pb-24">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h2 className="text-4xl font-extrabold leading-tight text-neutral-blue">Advanced Statistics</h2>
          <p className="text-neutral-gray mt-2 mb-12">Track how your links are performing across the web with<br />our advanced statistics dashboard.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-8 relative">
          <div className="hidden lg:block w-full h-3 bg-primary-cyan absolute top-56 left-0"></div>
          {cards.map((card, i) => (
            <Card card={card} index={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics