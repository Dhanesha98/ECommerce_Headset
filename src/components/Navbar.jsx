import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { CiSearch , CiShoppingCart , CiHeart, CiUser} from "react-icons/ci";



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    
    <div className='relative flex items-center justify-between h-24 mx-auto text-black bg-white lpx-4 max-w-ful'>
      
      <h1 className='px-3 text-2xl font-bold black p w-30'>3legacy.</h1>
    
      <ul className='items-center hidden text-sm md:flex'>
        <li className='p-3'>Home</li>
        <li className='p-3'>Shop</li>
        <li className='p-3'>Products</li>
        <li className='p-3'>Contact</li>
      </ul>
 
     
      <ul className='items-center hidden text-xl md:flex'>
        <li className='p-2 ' ><CiSearch /></li>
        <li className='p-2 '><CiHeart /></li>
        <li className='p-2 '><CiUser /></li>
        <li className='p-2 '><CiShoppingCart /></li>
     </ul>
      
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      
      <ul className={nav ? 'fixed text-xs z-40 left-0 top-0 w-[40%] h-18px  bg-[white] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] '}>
        <h1 className='w-full m-4 text-xl font-bold text-black'>3legacy.</h1>
       <li className='p-4'>Home</li>
          <li className='p-4 '>Shop</li>
          <li className='p-4'>Product</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
