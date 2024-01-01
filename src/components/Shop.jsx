import React from 'react';
import Imagen1 from '../assets/image-n1.png';
import Imagen2 from '../assets/image-n2.png';
import Imagen3 from '../assets/image-n3.png';

const Shop = () => {
  return (
    <div className="max-w-2xl px-0 py-2 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      <div direction="down">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-center text-gray-900">New Collection</h2>
      </div>

      <div className="relative flex flex-col gap-8 mx-4 md:flex-row md:justify-center"> 
      
        <button className="relative flex flex-col group">
          <img src={Imagen1} alt="" className="h-full transition-opacity group-hover:opacity-55" />
          <p className="absolute bottom-0 pl-[2rem] text-2xl pb-[5rem] item-left font-semibold">
            Headband
          </p>
          <p className="absolute bottom-0 pl-[2rem] text-xs pb-[3rem] item-left underline uppercase text-gray-400">Shop now</p>
        </button>
        
        <button className="flex flex-col gap-1 group">
          <div className="relative group">
            <img src={Imagen2} alt="" className="mb-8 transition-opacity group-hover:opacity-55" />
            <p className="absolute bottom-0 pl-[2rem] text-2xl pb-[5rem] item-left font-semibold">
              Earbuds
            </p>
            <p className="absolute bottom-0 pl-[2rem] text-xs pb-[3rem] item-left underline uppercase text-gray-400">Shop now</p>
          </div>
          
          <div className="relative flex flex-col group">
            <img src={Imagen3} alt="" className="h-full transition-opacity group-hover:opacity-55" />
            <p className="absolute bottom-0 pl-[2rem] text-2xl pb-[5rem] item-left font-semibold">
              Accessories
            </p>
            <p className="absolute bottom-0 pl-[2rem] text-xs pb-[3rem] item-left underline uppercase text-gray-400">Shop now</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Shop;
