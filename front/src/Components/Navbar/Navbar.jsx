import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { RiMapPin2Fill, RiPhoneFill, RiArrowRightSLine, RiArrowLeftSLine, RiSearchLine } from 'react-icons/ri';
import { TbMailFilled } from "react-icons/tb";
import { MdAccessTimeFilled } from "react-icons/md";

import Logo from '../../assets/Navbar/logo.jpg';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setPaddingBottom(20); // Set the desired padding value here
    setTimeout(() => setPaddingBottom(0), 500); // Reset padding after 500ms
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`relative lg:sticky top-0 z-10     ${isScrolled ? '' : ''}`}>
      {!isScrolled && (
        <div className=' mx-auto lg:relative flex flex-col lg:flex-row  bg-black '>
         
          
         <div className='flex flex-col lg:flex-row justify-between items-center w-full pl-20'>
  <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-10'>
    {/* location */}
    <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
      
      <div className='text-white flex flex-row text-sm'>
        <TbMailFilled className='text-xl text-DEFAULT text-red-400'/>
        <div className='text-white text-sm'>info@worldshipping.com</div>
      </div>
    </div>
    {/* phone */}
    <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
      <RiPhoneFill className='text-xl text-DEFAULT text-red-400' />
      <div className='text-white text-sm'>(+251) 91 170 3505</div>
    </div>
    {/* working hours */}
    <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
      <MdAccessTimeFilled className='text-xl text-DEFAULT text-red-400'/>
      <div className='text-white text-sm'>9:00AM to 8:00PM</div>
    </div>
  </div>
  <div className='text-white lg:ml-auto mt-4 lg:mt-0 pr-4'>
    <h1>Login</h1>
  </div>
        </div>




        </div>
      )}
      <nav
              className={`mnav bg-white fixed w-[300px] top-0  ${
                isNavOpen ? 'left-0' : '-left-[300px]'
              } shadow-2xl lg:hidden transition-all duration-300 z-20`}
            >
              <div
                className='mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all'
                onClick={handleNavToggle}
              >
                {isNavOpen ? (
                  <RiArrowLeftSLine className='mnav__close-btn-icon text-2xl text-white' />
                ) : (
                  <RiArrowRightSLine className='mnav__close-btn-icon text-2xl text-white' />
                )}
              </div>

              <div className='px-12 flex flex-col gap-y-12 h-full'>
                {/* logo */}
                <Link to="/" onClick={handleNavToggle}>
                  <img src={Logo} alt='Logo' />
                </Link>
                {/* list */}
                <ul className='flex flex-col gap-y-5'>
                  <li>
                    <Link
                      smooth to="#home"
                      onClick={() => onUpdateActiveLink('home')}
                      className='text-secondary hover:text-accent transition-all duration-300 '
                      
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      smooth to="#about"
                      onClick={() => onUpdateActiveLink('about')}
                      className='text-secondary hover:text-accent transition-all duration-300'
                      
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      smooth to="#services"
                      onClick={() => onUpdateActiveLink('services')}
                      className='text-secondary hover:text-accent transition-all duration-300'
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      smooth to="#blog"
                      onClick={() => onUpdateActiveLink('blog')}
                      className='text-secondary hover:text-accent transition-all duration-300'
                      
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      smooth to="#contact"
                      onClick={() => onUpdateActiveLink('contact')}
                      className='text-secondary hover:text-accent transition-all duration-300'

                    >
                      Contact us
                    </Link>
                  </li>
                </ul>

                
              </div>
            </nav>
      {/* desktop nav */}
      <nav className={`w-full left-0 shadow-custom1 h-20 bg-white ${isScrolled ? 'fixed top-0 z-50' : 'lg:absolute '}  lg:items-center lg:justify-between lg:px-[50px] hidden lg:block`} >
  <ul className='flex gap-x-4 items-center h-full'>
    <li className='flex items-center mr-32'>
      <Link to="#home" onClick={() => onUpdateActiveLink('home')}>
        <img src={Logo} alt='Logo' className='h-12 w-72' />
      </Link>
    </li>
    <li>
      <Link
        smooth to="#home"
        className={`border-r pr-4 hover:text-accent transition-all duration-300 text-black border-secondary ${activeLink === 'home' ? 'active' : ''}`}
        onClick={() => onUpdateActiveLink('home')}
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        smooth to="#about"
        className={`border-r pr-4 hover:text-accent transition-all duration-300 text-black border-secondary ${activeLink === 'about' ? 'active' : ''}`}
        onClick={() => onUpdateActiveLink('about')}
      >
        About
      </Link>
    </li>
    <li>
      <Link
        smooth to="#services"
        className={`border-r pr-4 hover:text-accent transition-all duration-300 text-black border-secondary ${activeLink === 'services' ? 'active' : ''}`}
        onClick={() => onUpdateActiveLink('services')}
      >
        Services
      </Link>
    </li>
    <li>
      <Link
        smooth to="#hirarchy"
        className={`border-r pr-4 hover:text-accent transition-all duration-300 text-black border-secondary ${activeLink === 'hirarchy' ? 'active' : ''}`}
        onClick={() => onUpdateActiveLink('hirarchy')}
      >
        Hirarchy
      </Link>
    </li>
    <li>
      <Link
        smooth to="#contact"
        className={`border-r pr-4 hover:text-accent transition-all duration-300 text-black border-secondary ${activeLink === 'contact' ? 'active' : ''}`}
        onClick={() => onUpdateActiveLink('contact')}
      >
        Contact
      </Link>
    </li>
  </ul>
</nav>




    </div>
  );
};

export default Navbar;