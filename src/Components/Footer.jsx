import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <section className="">
      <div className="top h-96 bg-bg1 relative">
        <div className="flex justify-between items-center w-10/12 m-auto ">
          <div className="left w-full lg:w-1/2 mt-16 flex items-center lg:items-start justify-center flex-col">
            <p className="text-[32px] font-semibold leading-7 w-[414px] text-white mb-4">Start Automating Your Calls For Free Now</p>

            <form action="">
              <input type="email" name="" id="" placeholder="Email" className="w-[414px] h-10 px-3 rounded-md bg-transparent border-2 outline-none border-white mb-2 placeholder" />
            </form>
            <button className="footerOutlineBtn tracking-widest">start your free trail</button>
            <p className="text-xs text-white opacity-65 my-4">Or schedule a demo with sales</p>
            <div className="border-dashed w-[414px] border"></div>
            <p className="text-white font-bold my-3">Site Map</p>

            <div className="links text-[8px] flex items-center justify-start gap-4 text-[#E5E5E5]">
              <Link href="">Home</Link>
              <Link href="">Benefits</Link>
              <Link href="">Features</Link>
              <Link href="">Industries</Link>
              <Link href="">Pricing</Link>
              <Link href="">Partners</Link>
              <Link href="">About Us</Link>
              <Link href="">Blogs</Link>
              <Link href="">Casestudies
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/footerRobot.svg"
          alt="Footer_Logo"
          width={401}
          height={410}
          className="absolute -top-20 right-28  hidden lg:block"
        />
      </div>

      <div className="bottom bg-clr4 h-10 flex items-center justify-center">
        <p className="text-white text-xs text-center lg:text-sm">PTCL Training Center, IT Park, Peshawar Pakistan | info@techbot.com | Terms of Service | Cookie Policy | © Copyright 2022 techbot, Inc.</p>
      </div>
    </section>
  )
}

export default Footer