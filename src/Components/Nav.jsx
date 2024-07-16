'use client';
// import Image from "next/image"
// import Link from "next/link"

// const Nav = () => {

//   return (
//     <section className='w-full absolute top-0 z-20'>
//       <div className="w-10/12 m-auto flex items-center justify-between h-24">
//         <div className="">
//           <Image
//             src="/Logo.svg"
//             alt="Logo"
//             width={155}
//             height={38}
//           />
//         </div>
//         <div className="">
//           <div className="links text-clr1 flex justify-center items-center gap-9">
//             <Link href="">Product</Link>
//             <Link href="">Pricing</Link>
//             <Link href="">Partners</Link>
//             <Link href="">Company</Link>
//           </div>
//         </div>
//         <div className="">
//           <div className="buttons flex justify-center items-center gap-2">
//             <button type="button" className="navOutlineBtn">get demo</button>
//             <button type="button" className="navFilledBtn">Login</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Nav
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className='w-full absolute top-0 z-50'>
      <div className="w-10/12 m-auto flex items-center justify-between h-24">
        <div className="">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={155}
            height={38}
          />
        </div>
        <div className="hidden lg:flex">
          <div className="links text-clr1 flex justify-center items-center gap-9">
            <Link href="">Product</Link>
            <Link href="">Pricing</Link>
            <Link href="">Partners</Link>
            <Link href="">Company</Link>
          </div>
        </div>
        <div className="hidden lg:flex">
          <div className="buttons flex justify-center items-center gap-2">
            <button type="button" className="navOutlineBtn">get demo</button>
            <button type="button" className="navFilledBtn">Login</button>
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="mobile-menu-button">
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
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 right-10 rounded-lg w-5/12 md:w-3/12 bg-white shadow-md z-50">
          <div className="flex flex-col items-center py-4">
            <Link href="" className="my-2">Product</Link>
            <Link href="" className="my-2">Pricing</Link>
            <Link href="" className="my-2">Partners</Link>
            <Link href="" className="my-2">Company</Link>
            <button type="button" className="navOutlineBtn mt-4">get demo</button>
            <button type="button" className="navFilledBtn mt-2">Login</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Nav;
