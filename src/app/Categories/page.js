import React from 'react'
import { categories } from '../data'
import Link from 'next/link';

const page = () => {
  return (
    <section className='min-h-screen flex items-center justify-center'>
      <div className="flex items-center justify-center gap-3">
        {
          categories.map((data) => (

            <Link href={data.link}>
              <button className="quizFilledBtn tracking-widest">
                {data.title}
              </button>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default page

