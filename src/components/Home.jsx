import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import image from '../assets/arelygonzalez.png';

const Home = () => {
  return (
    <div className='bg-black h-screen flex flex-col items-end'>
         {/*container*/}
      <div className=' h-full bg-[#000] '>
        <img src={image} alt="Image" className='w-96'/>
      </div>
      <div className='px-12  h-full bg-[#D7D7D7] w-screen pt-5 '>
          <p className='text-pink-500'>Hola, soy</p>
          <h1 className='text-4xl sm:text-7xl font-bold relative text-[#FFF]'>Arely González</h1>
          <h2 className='text-1xl sm:text-5xl font-bold text-[#FFF]'>Frontend Developer</h2>
        </div>
        <div className='w-full h-[250px] origin-top-right -rotate-12 bg-[#000] opacity-25 absolute mt-[300px] -ml-10'>
          
        </div>
    </div>
  );
}

export default Home;