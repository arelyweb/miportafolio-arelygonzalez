import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import image from '../assets/arelygonzalez.png';

const Home = () => {
  return (
    <div className='bg-black h-screen flex justify-center items-center'>
      <div className='px-12 flex flex-col h-full justify-end bg-[#000]'>
        {/*container*/}
        <img src={image} alt="Image" className='w-96 flex items-end '/>
        <div className='bg-black/50 w-screen absolute h-64 z-0'>
          <p>d</p>
        </div>
        <div className='bg-[#D7D7D7] w-screen p-5 justify-start relative z-1'>
          <p className='text-pink-700'>Hola, soy</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#FFF]'>Arely González</h1>
          <h2 className='text-1xl sm:text-5xl font-bold text-[#FFF]'>Frontend Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;