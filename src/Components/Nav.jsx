import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <section className='bg-red-100 w-full'>
      <div className="w-10/12 m-auto flex items-center justify-between h-24">
        <div className="">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={155}
            height={38}
          />
        </div>
        <div className="">
          <div className="links text-clr1 flex justify-center items-center gap-9">
            <Link href="">Product</Link>
            <Link href="">Pricing</Link>
            <Link href="">Partners</Link>
            <Link href="">Company</Link>
          </div>
        </div>
        <div className="">
          <div className="buttons flex justify-center items-center gap-2">
            <button type="button" className="navOutlineBtn">get demo</button>
            <button type="button" className="navFilledBtn">Login</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nav