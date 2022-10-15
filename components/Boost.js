import BoostBg from "./helpers/BoostBg"
const Boost = () => {
  return (
    <section className="relative">
      <BoostBg />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full">
          <h2 className="text-white text-4xl font-bold">Boost Your Links Today</h2>
          <a className="font-bold rounded-full px-12 py-3 bg-primary-cyan hover:bg-primary-cyan/50 text-white transition-all text-xl" href="#">Get Started</a>
        </div>
      </div>
    </section>
  )
}
export default Boost