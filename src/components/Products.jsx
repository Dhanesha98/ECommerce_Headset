import React from 'react';
import { CiShoppingCart, CiHeart } from 'react-icons/ci';
import products from './ProductsData';

const Products = () => {
  return (
   
      <div className="max-w-2xl px-0 py-2 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">New Arrival</h2>

        <div className="grid grid-cols-1 px-5 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="relative overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none sm:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center w-full h-full sm:w-full sm:h-full"
                />
                <p className="absolute top-0 right-0 z-30 flex items-center justify-center w-16 h-16 text-black opacity-0 group-hover:opacity-100 ">
                  <CiHeart size={20} />
                </p>
                <p className="absolute bottom-0 right-0 z-30 flex items-center justify-center w-16 h-16 text-black bg-white opacity-0 group-hover:opacity-100 ">
                  <CiShoppingCart size={24} />
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-sm text-gray-900">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                    <img src={product.Heart} alt="" className="w-10 h-10" />
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

  );
};

export default Products;
