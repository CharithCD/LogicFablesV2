import Image from 'next/image';
import React from 'react'

const ServiceCard = ({ iconSrc, iconAlt, title, description, additionalClasses = '' }) => {
  return (
    <div className={`flex flex-col mx-auto text-left py-6 transition-shadow duration-200 rounded-md border-2 shadow-lg border-primary md:mx-0 ${additionalClasses}`}>
      <div className='p-6'>
        <div className="flex items-center justify-center w-12 h-14 mb-4">
          <Image src={iconSrc} width={48} height={56} alt={iconAlt} />
        </div>
        <p className="text-center text-primary mt-4 mb-7 text-[20px] font-bold">{title}</p>
        <p className="text-justify leading-6">{description}</p>
      </div>
      <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
    </div>
  )
}

export default ServiceCard;