import React from 'react';
import Background from '../assets/Banner1.png'

const Home = () => {
  return (
    
    <div className="relative overflow-hidden min-h-[550px]  pt-0 sm:min-h-[520px] bg-gradient-to-r from-black to-gray-600 ... flex justify-center items-center  w-full h-[20rem]">
        <div className='container pb-8 sm:pb-0'>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className='relative z-10 flex flex-col justify-center order-2 gap-4 pt-1 text-center text-white md:ml-[100px] sm:pt-0 sm:text-left sm:order-1 '>
                        <h1 className="text-3xl font-medium sm:text-4xl lg:text-5xl"> Listen to</h1>
                        <h1 className="text-3xl font-medium sm:text-4xl lg:text-5xl"> the amazing</h1>
                        <h1 className="text-3xl font-medium sm:text-4xl lg:text-5xl"> music sound</h1>
                        <p className="text-sm sm:text-2xl ">Experience music like never before</p>
                        <div>
                            <button 
                            className="px-4 py-2 duration-200 bg-[#9aa09d] rounded-lg hover:scale-105 justify-center relative z-30  hover:bg-black" 
                            >Shopping Now</button>
                        </div>
                    </div>
                    <div className="order-1 sm:order-2">
                        <div className="relative z-1">
                            <img src={Background} alt="" 
                            className="w-[300px] h-[300px] sm:h-[550px] sm:w-[550px] sm:scle-125 object-contain mx-auto "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        
    </div>
  );
};

export default Home;
