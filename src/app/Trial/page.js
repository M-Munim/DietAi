"use client";

import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (

    <section className='w-full flex items-center justify-center my-40'>
      <div className="w-11/12 h-auto md:h-[666px] rounded-[51px] shadow-lg">
        <div className="flex items-center justify-between flex-col-reverse md:flex-row rounded-[51px]" id="start">
          <div className="left w-full md:w-[58%] flex flex-col justify-center items-start gap-5 p-5 md:p-7 z-20">
            <div className="logo mb-4">
              <Image
                src="/logo.svg"
                alt="dietBg"
                width={190}
                height={47}
                className=""
              />
            </div>

            <div className="">
              <h1 className="font-bold text-lg md:text-[34px] leading-5 md:leading-9">AI-Powered Nutrition Solutions: <br />
                Tailor-Made Diet Plans for Your
                Well-being</h1>
              <p className="mt-3 md:leading-5 text-justify text-sm md:text-base">Welcome to DietMate AI - Your Personalized Nutrition Solution! Say
                goodbye to generic diet plans and hello to a tailored approach
                designed just for you. With simple questions, our AI-powered web
                app crafts a personalized diet plan to suit your unique needs. Fast,
                easy, and downloadable as a PDF - achieving your health goals has
                never been simpler. Let's get started on your journey to well-being
                today!</p>

              <h2 className="font-bold text-lg md:text-2xl mt-4 mb-1">Features</h2>
              <ul className="list-disc ml-5 text-sm md:text-base">
                <li>AI-Powered Nutrition Solutions</li>
                <li>Get a personalized diet plan</li>
                <li>Fast and easy to use</li>
                <li>Download as pdf</li>
              </ul>
            </div>

            <div className="flex items-center justify-center flex-col md:flex-row gap-3 w-full">
              <button className="quizFilledBtn tracking-widest">
                <Link href="/Generate">
                  GET PERSONALIZED DIET PLAN
                </Link>
              </button>
              <button className="quizOutlineBtn">DIET PLANS</button>
            </div>
          </div>
          <div className="right w-full md:w-[42%] flex items-start justify-end md:relative rounded-[51px] p-0 absolute z-10 md:opacity-100 opacity-25">
            <Image
              src="/dietBg.svg"
              alt="dietBg"
              width={100}
              height={766}
              className="absolute right-4 md:-right-[9px] w-[408px] md:w-[488px]"
            />
            <div className=" h-[666px] w-[323px] md:bg-[#00BD61] rounded-[51px]">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page