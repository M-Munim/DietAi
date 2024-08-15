import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <div className="top h-96 bg-bg1 relative">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-10/12 m-auto px-4">
          <div className="left w-full lg:w-1/2 mt-16 flex items-center lg:items-start justify-center flex-col">
            <p className="text-2xl lg:text-4xl font-semibold leading-7 text-white mb-4 text-center lg:text-left">
              Start Automating Your Calls For Free Now
            </p>

            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full lg:w-[414px] h-10 px-3 rounded-md bg-transparent border-2 border-white mb-2 placeholder:text-white"
              />
            </form>
            <button className="footerOutlineBtn tracking-widest"><Link href="/Trial">
              start your free trail
            </Link></button>
            <p className="text-xs text-white opacity-65 my-4 text-center lg:text-left">
              Or schedule a demo with sales
            </p>
            <div className="border-dashed w-full lg:w-[414px] border border-white"></div>
            <p className="text-white font-bold my-3 text-center lg:text-left">Site Map</p>

            <div className="links text-[10px] lg:text-sm flex flex-wrap gap-2 justify-center lg:justify-start text-[#E5E5E5]">
              <Link href="">Home</Link>
              <Link href="">Benefits</Link>
              <Link href="">Features</Link>
              <Link href="">Industries</Link>
              <Link href="">Pricing</Link>
              <Link href="">Partners</Link>
              <Link href="">About Us</Link>
              <Link href="">Blogs</Link>
              <Link href="">Casestudies</Link>
            </div>
          </div>
          <Image
            src="/footerRobot.svg"
            alt="Footer_Logo"
            width={401}
            height={410}
            className="absolute -top-20 right-0 lg:right-28 hidden lg:block"
          />
        </div>
      </div>

      <div className="bottom bg-clr4 h-10 flex items-center justify-center">
        <p className="text-white text-xs text-center lg:text-sm">
          PTCL Training Center, IT Park, Peshawar Pakistan | info@techbot.com | Terms of Service | Cookie Policy | © Copyright 2022 techbot, Inc.
        </p>
      </div>
    </section>
  );
};

export default Footer;