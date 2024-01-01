import React from 'react'
import Promotions from "../assets/promotion.png.png"

const Promotion = () => {
  return (
    <div className='relative grid w-full h-full bg-gray-200 l grid-col-1 '  >
      <div className='relative '>
      <img src={Promotions} alt="" />
        <div className="pl-8 relaive">
        <div className='py-5'>
        <p className="py-3 font-bold text-blue-600 uppercase text-md">Promotion</p>
        <p className="py-2 text-xl font-semibold capitalize text-black-600">Hurry up! 40% OFF</p>
        <p className="text-sm text-black-600 ">Thousands of high tech are waiting for you</p>
        </div>
        <div>
            <p className="pb-5 text-xs text-black-600">Offer expires in:</p>
        </div>
        </div>
      </div>  
    </div>
  )
}

export default Promotion;
