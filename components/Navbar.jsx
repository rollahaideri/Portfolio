import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineAppstoreAdd } from 'react-icons/ai';
import {UilEstate, UilUserExclamation, UilFileAlt,UilSuitcaseAlt, UilScenery, UilMessage, UilTimesCircle} from '@iconscout/react-unicons';
import { FaGithub, FaLinkedinIn, CgMouse } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';


// import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
    console.log("navebarclicked");
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
        ? 'invisible md:visible fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
        : 'invisible md:visible fixed w-full h-20 z-[100] '
      }
    >
    
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm hover:border-b hover:text-[#5651e5] '>
              <Link href='/' >Home</Link>
            </li>
            <li className='ml-10 text-sm hover:border-b hover:text-[#5651e5]'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm hover:border-b hover:text-[#5651e5]'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm hover:border-b hover:text-[#5651e5]'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm hover:border-b hover:text-[#5651e5]'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 text-sm hover:border-b hover:text-[#5651e5]'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          {/* <div
            style={{ color: `${linkColor}`}}
            onClick={handleNav}
            className='visible md:invisible fixed bottom-8 right-8 z-[110]'
          >
            <AiOutlineAppstoreAdd size={25}/>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className='justify-between items-center pt-8 px-16 pb-16 grid bottom-0 bg-white w-full h-2/6 rounded-t-2xl visible md:invisible fixed'>
        <ul className='grid-cols-3 gap-x-14 gap-y-8 grid'>
          <li>
            
            <Link href="/#home" className=" flex flex-col items-center">
            <UilEstate size="30" color="#5651e5" />Home
            
            </Link>
            
          </li>
          <li>
            <Link href="/#about" className=" flex flex-col items-center">
            <UilUserExclamation size="30" color="#5651e5"/> About</Link>
          </li>
          <li>
            <Link href="/#skills" className=" flex flex-col items-center">
            <UilFileAlt size="30" color="#5651e5"/>  Skills</Link>
          </li>
          
          
          <li>
            <Link href="/#projects" className=" flex flex-col items-center">
              <UilSuitcaseAlt size="30" color="#5651e5"/>Projects</Link>
          </li>
          <li>
            <Link href="/resume" className=" flex flex-col items-center">
              <UilScenery size="30" color="#5651e5"/>Resume</Link>
          </li>
          <li>
            <Link href="/#contact" className=" flex flex-col items-center">
              <UilMessage size="30" color="#5651e5"/>Contact</Link>
          </li>

          </ul>
      <div
            style={{ color: `${linkColor}`, width: 10, height:10 }}
            onClick={handleNav}
            className='visible md:invisible fixed bottom-8 right-8'
          >
            <AiOutlineAppstoreAdd size={35}/>
          </div>
          <div className='absolute top-3 right-3' onClick={console.log("Close")}>
            <UilTimesCircle color=""/>
          </div>
      {/* <div
        className={
          nav ? 
          'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60'
           : ''
        }
      >
        
        
      </div> */}
      </div> 
    </div>
  );
};

export default Navbar;
