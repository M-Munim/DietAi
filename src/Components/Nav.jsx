// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Nav = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <section className='w-full fixed top-0 z-50 bg-transparent'>
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Nav = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pathname = usePathname();
  const showHomeLink = pathname === "/Trial" || pathname === "/Categories" || pathname === "/Weightloss" || pathname === "/Diabetes" || pathname === "/Fertility";

  return (
    <section
      className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in-out ${scrolling ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="w-10/12 mx-auto flex items-center justify-between h-24">
        <div className="w-4/12">
          <Link href='/'>
            <Image src="/Logo.svg" alt="Logo" width={155} height={38} className='inline' />
          </Link>
        </div>

        <div className="hidden lg:flex flex-grow justify-between w-8/12">
          <div className="links text-clr1 flex justify-center items-center gap-9">
            <Link href="/">Home</Link>
            {!showHomeLink && (
              <>
                <Link href="#about">About</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#reviews">Reviews</Link>
                <Link href="#">Blog</Link>
              </>
            )}
          </div>
          <div className="buttons flex items-center gap-2 ml-4">
            <Link href="/SignUp">
              <button type="button" className="navOutlineBtn">Sign Up</button>
            </Link>
            <Link href="/SignIn">
              <button type="button" className="navFilledBtn">
                Login
              </button>
            </Link>
          </div>
        </div>

        <button onClick={toggleMobileMenu} className="lg:hidden flex items-center justify-end">
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-20 right-5 bg-white shadow-md w-5/12 md:w-3/12 z-50">
          <div className="flex flex-col items-center py-4">
            <Link href="#">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Reviews</Link>
            <Link href="#">Blog</Link>
            <button type="button" className="navOutlineBtn mt-4">Get Demo</button>
            <button type="button" className="navFilledBtn mt-2">Login</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Nav;