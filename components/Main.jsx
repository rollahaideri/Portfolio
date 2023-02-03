import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {CgMouse} from 'react-icons/cg'
import {FiArrowDown} from 'react-icons/fi'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Rohullah</span>
          </h1>
          <h1 className='py-2 text-gray-700 '>An iOS/Android developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building native & crossplotform applications for iOS/Android
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className=' rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-600 '>
                <FaLinkedinIn className='w-12 h-11 text-[#5651e5]'/>
              </div>
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <div className=' p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub className='w-12 h-11 text-[#5651e5]'/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail className='w-12 h-11 text-[#5651e5]'/>
              </div>
            </Link>
            <Link href='/resume'>
              <div className=' p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill className='w-12 h-11 text-[#5651e5]'/>
              </div>
            </Link>
            
          </div>
          <Link href='/#about'>
              <div className='cursor-pointer flex items-center justify-between max-w-[220px] py-6 px-5 relative left-9 bottom-14 top-14'>
                <CgMouse className='w-12 h-11 text-[#5651e5]'/>
                <a>Scroll down</a>
                <FiArrowDown className='w-5 h-5 text-[#5651e5]'/>
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
