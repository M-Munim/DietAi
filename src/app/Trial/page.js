import Link from "next/link";
import { IoReturnDownBackSharp } from "react-icons/io5";

const page = () => {
  return (

    <section className='w-full h-screen flex items-center justify-center'>
      <div className="bg-white w-8/12 h-3/5 rounded-xl shadow-lg">
        <div className="top bg-red-200 h-10 w-full flex items-center justify-end p-5 text-2xl" >
          <Link href="/">
            <IoReturnDownBackSharp />
          </Link>
        </div>
        <div className="bottom"></div>
      </div>
    </section>
  )
}

export default page