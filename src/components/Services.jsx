import React from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { BsArrowRepeat } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';
import { PiLockKey } from 'react-icons/pi';

const Services = () => {
  return (
    <div className="grid items-center justify-center grid-cols-2 px-5 py-10 max-w-auto mx-200 gap-x-4 gap-y-10 sm:grid-cols-4 sm:px-20">
      <div className="flex flex-col items-center justify-center h-40 bg-gray-100 mx-30">
        <div>
        <LiaShippingFastSolid size={40} className="my-4" />
        </div>
        <p className="text-xs text-black sm:text-sm">Free Shipping</p>
        <p className="text-xs text-gray-400 lg:text-sm md:text-xs">Order above $200</p>
      </div>
      <div className="flex flex-col items-center justify-center h-40 bg-gray-100">
        <div>
        <BsArrowRepeat size={40} className="my-4" />  
        </div>
        <p className="text-xs text-black sm:text-sm">Money-back</p>
        <p className="text-xs text-gray-400 lg:text-sm md:text-xs">30 days guarantee</p>
      </div>
      <div className="flex flex-col items-center justify-center h-40 bg-gray-100">
        <div>
        <PiLockKey size={40} className="my-4"/>
        </div>
        <p className="text-xs text-black sm:text-sm">Secure Payments</p>
        <p className="text-xs text-gray-400 lg:text-sm md:text-xs">Secured by Stripe</p>
      </div>
      <div className="flex flex-col items-center justify-center h-40 bg-gray-100">
        <div>
        <IoCallOutline size={40} className="my-4"/>
        </div>
       <p className="text-xs text-black sm:text-sm">24/7 Support</p>
        <p className="text-xs text-gray-400 lg:text-sm md:text-xs ">Phone & Email support</p>
      </div>
    </div>
  );
};

export default Services;
