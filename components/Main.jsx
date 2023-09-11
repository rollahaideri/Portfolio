import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {CgMouse} from 'react-icons/cg'
import {FiArrowDown} from 'react-icons/fi'
import Linkedin from '../public/assets/linkedin-ic.png'
import Github from '../public/assets/github-ic.png'
import Contact from '../public/assets/Contact-ic.png'
import Cv from '../public/assets/Cv-ic.png'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center overflow-x-hidden'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Elias</span>
          </h1>
          <h1 className='py-2 text-gray-700 '>An iOS/Android developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building native & crossplatform applications for iOS/Android
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/elias-haideri-600880188/'
              target='_blank'
              rel='noreferrer'
            >
              <div className= 'cursor-pointer w-12 h-12 bg-[#5651e5]/10  hover:bg-[#5651e5]/20 p-3 rounded-lg center'>
                <Image src = {Linkedin} className=' text-[#5651e5]'></Image>
              </div>
            </a>
            <a
              href='https://github.com/rollahaideri?tab=repositories'
              target='_blank'
              rel='noreferrer'
            >
              <div className= 'cursor-pointer w-12 h-12 bg-[#5651e5]/10  hover:bg-[#5651e5]/20 p-3 rounded-lg center'>
                <Image src = {Github} className=' text-[#5651e5]'></Image>
              </div>
            </a>
            
            <Link href='/resume'>
            <div className= 'cursor-pointer w-12 h-12 bg-[#5651e5]/10  hover:bg-[#5651e5]/20 p-3 rounded-lg center'>
                <Image src = {Cv} className=' text-[#5651e5]'></Image>
              </div>
            </Link>
            
          </div>
          <Link href='/#projects'>
              <div className=' cursor-pointer flex items-center justify-between max-w-[220px] py-6 px-5 relative left-9 bottom-14 top-14 hover:translate-y-3 transition-all duration-300 ease-in-out'>
                <CgMouse className='w-12 h-11 text-[#5651e5]'/>
                <a>Scroll down</a>
                <FiArrowDown className='w-5 h-5 text-[#5651e5] animate-bounce hover:pointer-events-none'/>
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
