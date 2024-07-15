import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <section className="">
      <div className="top h-96 bg-bg1">
        <div className=" flex justify-between items-center w-10/12 m-auto">
          <div className="left">
            <p className="">Start Automating Your Calls <br />For Free Now</p>

            <form action="">
              <input type="email" name="" id="" />
            </form>
            <button className="">start your free trail</button>
            <p className="">Or schedule a demo with sales</p>
            <div className="border-dotted w-44 border"></div>
            <p className="">Site Map</p>

            <div className="links">
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

          <div className="right bg-red-400">
            <Image
              src="/footerRobot.svg"
              alt="Footer_Logo"
              width={401}
              height={410}
            />
          </div>
        </div>
      </div>

      <div className="bottom bg-clr4 h-10 flex items-center justify-center">
        <p className="text-white">PTCL Training Center, IT Park, Peshawar Pakistan | info@techbot.com | Terms of Service | Cookie Policy | © Copyright 2022 techbot, Inc.</p>
      </div>
    </section>
  )
}

export default Footer