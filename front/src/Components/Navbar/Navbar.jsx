import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { RiPhoneFill, RiMenu3Line } from 'react-icons/ri';
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
        setIsNavOpen(false); // Close the mobile nav when scrolling
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
    <div className={`relative ${isScrolled ? 'lg:sticky fixed top-0 z-50' : 'lg:sticky top-0 z-10'}`}>
      {!isScrolled && (
        <div className='mx-auto lg:relative flex flex-col lg:flex-row bg-black'>
          <div className='flex flex-col lg:flex-row justify-between items-center w-full pl-20'>
            <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-10'>
              {/* email */}
              <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
                <div className='text-white flex flex-row text-sm'>
                  <TbMailFilled className='text-xl text-red-400'/>
                  <div className='text-white text-sm'>ngsglobal2024@gmail.com</div>
                </div>
              </div>
              {/* phone */}
              <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
                <RiPhoneFill className='text-xl text-red-400' />
                <div className='text-white text-sm'>(+251) 932091406|9211323833</div>
              </div>
              {/* working hours */}
              <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
                <MdAccessTimeFilled className='text-xl text-red-400'/>
                <div className='text-white text-sm'>9:00AM to 8:00PM</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* desktop nav */}
      <nav className={`w-full left-0 shadow-custom1 h-20 bg-white ${isScrolled ? 'fixed top-0 z-50' : 'lg:absolute'} lg:items-center lg:justify-between lg:px-[50px] hidden lg:flex`}>
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
              Products
            </Link>
          </li>
          <li>
            <Link
              smooth to="#contact"
              className={`hover:text-accent transition-all duration-300 text-black ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <nav className={`w-full left-0 shadow-custom1 h-20 bg-white flex items-center justify-between px-4 lg:hidden ${isScrolled ? 'fixed top-0 z-50' : 'absolute'}`}>
        <Link to="#home" onClick={() => onUpdateActiveLink('home')}>
          <img src={Logo} alt='Logo' className='h-12 w-72' />
        </Link>
        <button onClick={handleNavToggle} className="text-3xl text-black">
          <RiMenu3Line />
        </button>
        {isNavOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg lg:hidden">
          <ul className='flex flex-col items-center'>
            <li className='w-full text-center py-4 border-b'>
              <Link
                smooth to="#home"
                className={`hover:text-accent transition-all duration-300 text-black ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => { onUpdateActiveLink('home'); handleNavToggle(); }}
              >
                Home
              </Link>
            </li>
            <li className='w-full text-center py-4 border-b'>
              <Link
                smooth to="#about"
                className={`hover:text-accent transition-all duration-300 text-black ${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => { onUpdateActiveLink('about'); handleNavToggle(); }}
              >
                About
              </Link>
            </li>
            <li className='w-full text-center py-4 border-b'>
              <Link
                smooth to="#services"
                className={`hover:text-accent transition-all duration-300 text-black ${activeLink === 'services' ? 'active' : ''}`}
                onClick={() => { onUpdateActiveLink('services'); handleNavToggle(); }}
              >
                Services
              </Link>
            </li>
            <li className='w-full text-center py-4 border-b'>
              <Link
                smooth to="#hirarchy"
                className={`hover:text-accent transition-all duration-300 text-black ${activeLink === 'hirarchy' ? 'active' : ''}`}
                onClick={() => { onUpdateActiveLink('hirarchy'); handleNavToggle(); }}
              >
                Products
              </Link>
            </li>
            <li className='w-full text-center py-4 border-b'>
              <Link
                smooth to="#contact"
                className={`hover:text-accent transition-all duration-300 text-black ${activeLink === 'contact' ? 'active' : ''}`}
                onClick={() => { onUpdateActiveLink('contact'); handleNavToggle(); }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      </nav>

      
    </div>
  );
};

export default Navbar;
