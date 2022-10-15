import Image from 'next/image';
import BrandIcon from '../../assets/icon-brand-recognition.svg'
import RecordsIcon from '../../assets/icon-detailed-records.svg'
import CustomIcon from '../../assets/icon-fully-customizable.svg'

const icons = {
  brand: BrandIcon,
  records: RecordsIcon,
  custom: CustomIcon
}

const Card = ({ card, index }) => {
  return (
    <div className='bg-white rounded-lg p-8 relative' style={{ marginTop: `${(index + 1) * 60}px` }}>
      <div className="absolute left-8 -top-12 bg-primary-violet h-24 w-24 rounded-full flex justify-center items-center">
        <Image src={icons[card.icon]} alt={card.title} />
      </div>
      <h3 className="text-xl font-extrabold leading-tight text-neutral-blue mt-10">{card.title}</h3>
      <p className="text-neutral-gray text-base mt-6">{card.desc}</p>
    </div>
  )
}

export default Card