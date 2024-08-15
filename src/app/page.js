'use client';

import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Home() {

  const data = [
    {
      id: 1,
      title: "Radical Improvement in KPIs",
      head: "Improve CX or Reduce Cost",
      body: "Ultimately the barrier to a great customer service experience is too many requests for too few agents. Problem solved.",
    },

    {
      id: 2,
      title: "Easy & Risk-Free To Try",
      head: "Cheap in Money and Time",
      body: "RedRoute is free for 30 days and takes 30 minutes to turn on. Lunch break? Boring all hands? House on fire? Dip your toe with 10% of calls for a day.",
    },

    {
      id: 3,
      title: "Results On Day 1",
      head: "No Exaggeration",
      body: "You will see the reduction in call volume, improvement in hold time, missed calls, AHT, cost/call, CSAT, NPS, CLTV…instantly.",
    },
  ]

  const cardData = [
    {
      id: 1,
      image: "/laptop.svg",
      title: "How Brooklinen Launched RedRoute’s Voice Assistant",
      date: "March 22, 2022|Perspectives",
      body: "Opus Research hosted our CEO, Brian Schiff, and Brooklinen's Sr ...",
    },

    {
      id: 2,
      image: "/laptop.svg",
      title: "Launch & Learn: Gorgias + RedRoute",
      date: "February 2, 2022|Perspectives",
      body: "Last November, RedRoute built a Gorgias integration to give brands ...",
    },

    {
      id: 3,
      image: "/laptop.svg",
      title: "How to Keep Calm and Carry On this Holiday Season",
      date: "December 22, 2021|Perspectives",
      body: "The holidays came in hot this year, and CS teams ...",
    },
  ]
  return (
    <main className="relative overflow-hidden">
      <div className="w-96 h-96 lg:w-[689px] lg:h-[670px] md:w-[489px] md:h-[470px] bg-clr5 rounded-full blur-3xl absolute -top-20 -right-10 z-10"></div>
      {/* One */}
      <section className="w-10/12 m-auto my-32 relative z-20">
        <div className="flex-col lg:flex-row flex items-center justify-between">
          <div className="left w-full lg:w-1/2py-10">
            <h1 className="text-6xl font-black uppercase text-clr5 text-center lg:text-start">Automate Your <br className="hidden lg:block" />
              diet plan, <span className="text-clr2"> with <br className="hidden lg:block" />
                dietmate ai</span></h1>
            <h2 className="text-clr6 uppercase text-center lg:text-start text-base font-bold tracking-widest mt-5 mb-14">Risk-Free Performance Pricing</h2>
            {/* m-auto lg:ms-auto */}
            <button className="mainFilledBtn tracking-widest">
              <Link href="/Trial">
                start your free trail
              </Link>
            </button>
          </div>
          <div className="right w-1/2">
            <Image
              src="/MainImg.svg"
              alt="Main_Img"
              width={338}
              height={470}
              className="block ms-auto my-5"
            />
          </div>
        </div>
      </section>

      {/* Two */}
      <section className="w-10/12 m-auto my-32 relative z-20 py-10">
        <div className="w-96 h-96 lg:w-[689px] lg:h-[670px]   md:w-[489px] md:h-[470px] bg-clr5 rounded-full blur-3xl absolute top-80 -left-10 z-10"></div>
        <div className="w-11/12 m-auto relative z-30">
          <div className="top w-11/12 lg:w-10/12 m-auto text-center mb-5">
            <p className="text-clr5 font-bold text-base uppercase tracking-widest mb-8 leading-7">the basic <br />
              <span className="text-clr2 font-black text-3xl lg:text-[40px] uppercase mt-0 tracking-normal">What does our app do?</span></p>
            <p className="text-clr5 text-base lg:text-xl leading-5">DietMateAI, creates personalized diet plans based on user responses to multiple-choice questions. Users can view or download these plans for $19.9 USD each. They can sign up using Google, Facebook, or email/password, generate new plans, view all plans, and receive free weekly nutrition newsletters/blogs</p>
          </div>

          <div className="bottom">
            <div className="top flex items-center justify-between">
              <div className="left">
                <Image
                  src="/customer.svg"
                  alt="customer"
                  width={280}
                  height={236}
                  className="w-36 md:w-48 lg:w-[280px]"
                />
              </div>
              <div className="right">
                <Image
                  src="/service.svg"
                  alt="service"
                  width={280}
                  height={236}
                  className="w-36 md:w-48 lg:w-[280px]"
                />
              </div>
            </div>

            <div className="bottom flex items-center justify-between w-10/12 m-auto mt-3 lg:mt-10">
              <div className="left w-1/3 flex items-center justify-center">
                <Image
                  src="/VectorL.svg"
                  alt="VectorL"
                  width={221}
                  height={138}
                  className="w-28 md:w-40 lg:w-[221px]"
                />
              </div>
              <div className="mid relative w-1/3 flex items-center justify-center">
                <Image
                  src="/robot.svg"
                  alt="robot"
                  width={280}
                  height={236}
                  className="absolute w-36 md:w-48 lg:w-[280px]"
                />

                <Image
                  src="/MainImg.svg"
                  alt="robot"
                  width={115}
                  height={161}
                  className="z-20 relative w-12 md:w-20 lg:w-[115px]"

                />
              </div>
              <div className="right w-1/3 flex items-center justify-center">
                <Image
                  src="/VectorR.svg"
                  alt="VectorR"
                  width={221}
                  height={138}
                  className="w-28 md:w-40 lg:w-[221px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-44 w-full md:w-10/12 lg:w-8/12 m-auto relative z-30">
          <Swiper
            cssMode={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex items-center justify-center flex-col gap-10">
                <Image
                  src="/panda.svg"
                  alt="service"
                  width={130}
                  height={130}
                />

                <p className="mb-16 w-11/12 lg:w-8/12 m-auto text-center">&quot;Automation has obvious proven ROI, and TechBot has brought it to the almighty phone channel.&quot;</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center flex-col gap-10">
                <Image
                  src="/panda.svg"
                  alt="service"
                  width={130}
                  height={130}
                />

                <p className="mb-16 w-11/12 lg:w-8/12 m-auto text-center">&quot;Automation has obvious proven ROI, and TechBot has brought it to the almighty phone channel.&quot;</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center flex-col gap-10">
                <Image
                  src="/panda.svg"
                  alt="service"
                  width={130}
                  height={130}
                />

                <p className="mb-16 w-11/12 lg:w-8/12 m-auto text-center">&quot;Automation has obvious proven ROI, and TechBot has brought it to the almighty phone channel.&quot;</p>
              </div>
            </SwiperSlide>
          </Swiper>

          <button className="swipperOutlineBtn block m-auto mt-14">
            <Link href="">
              read our case studies
            </Link>
          </button>
        </div>
      </section>

      {/* Three */}
      <section className="w-11/12 lg:w-12/12 m-auto my-32 relative py-10">
        <div className="relative z-30">
          <div className="top w-10/12 m-auto text-center mb-16">
            <p className="text-clr5 font-bold text-base uppercase tracking-widest mb-8 leading-7">Imagine Doubling Your Staff<br />
              <span className="text-clr2 font-black text-3xl lg:text-[40px] uppercase mt-0 tracking-normal">What Would That Do To Your Metrics?</span></p>
          </div>

          <div className="bottom flex flex-col md:flex-row gap-4 items-center justify-center">
            {data.map((info) => (
              <div className="w-[326px] md:w-[226px] lg:w-[326px] h-[414px] md:h-[344px] lg:h-[414px] bg-bg1 rounded-lg flex-col flex items-center justify-start py-6 gap-24" key={info.id}>
                <div className="bg-black bg-blend-color-burn w-72 md:w-[220px] lg:w-72 h-12 flex items-center justify-center rounded-xl text-center">
                  <p className="text-sm font-bold uppercase text-white tracking-wide">{info.title}</p>
                </div>

                <div className="w-72 md:w-[220px] lg:w-72 text-center text-white">
                  <p className="font-bold">{info.head} <br /> <br /> <span className="font-normal text-sm">{info.body}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four */}
      <section className="w-10/12 m-auto my-32 relative py-10">
        <div className="w-11/12 m-auto relative z-30">
          <div className="top w-10/12 m-auto text-center mb-12">
            <p className="text-clr5 font-bold text-base uppercase tracking-widest mb-8 leading-7">supported <br />
              <span className="text-clr2 font-black text-[40px] uppercase mt-0 tracking-normal">integration</span></p>
          </div>

          <div className="flex justify-center items-center gap-3 flex-wrap">
            <div className="relative flex justify-center items-center my-3">
              <Image
                src="/Rectangle 28.svg"
                alt="Rectangle"
                width={170}
                height={179}
              />

              <Image
                src="/whatsapp.svg"
                alt="Rectangle"
                width={68}
                height={70}
                className="absolute"
              />
            </div>

            <div className="relative flex justify-center items-center my-3">
              <Image
                src="/Rectangle 29.svg"
                alt="Rectangle"
                width={170}
                height={179}
              />

              <Image
                src="/Group 63.svg"
                alt="Rectangle"
                width={122}
                height={70}
                className="absolute"
              />
            </div>

            <div className="relative flex justify-center items-center my-3">
              <Image
                src="/Rectangle 28.svg"
                alt="Rectangle"
                width={170}
                height={179}
              />

              <Image
                src="/messenger.svg"
                alt="Rectangle"
                width={68}
                height={70}
                className="absolute"
              />
            </div>

            <div className="relative flex justify-center items-center my-3">
              <Image
                src="/Rectangle 29.svg"
                alt="Rectangle"
                width={170}
                height={179}
              />

              <Image
                src="/FreeSWITCH_logo 1.svg"
                alt="Rectangle"
                width={100}
                height={30}
                className="absolute"
              />
            </div>

            <div className="relative flex justify-center items-center my-3">
              <Image
                src="/Rectangle 28.svg"
                alt="Rectangle"
                width={170}
                height={179}
              />

              <Image
                src="/sms.svg"
                alt="Rectangle"
                width={68}
                height={70}
                className="absolute"
              />
            </div>

            <div className="relative flex justify-center items-center my-3">
              <Image
                src="/Rectangle 29.svg"
                alt="Rectangle"
                width={170}
                height={179}
              />

              <Image
                src="/asterisk.svg"
                alt="Rectangle"
                width={68}
                height={70}
                className="absolute"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Five */}
      <section className="w-10/12 m-auto my-32 relative py-10">
        <div className="relative z-30">
          <div className="top text-center mb-12">
            <p className="text-clr5 font-bold text-base uppercase tracking-widest mb-8 leading-7">what we’re<br />
              <span className="text-clr2 font-black text-3xl lg:text-[40px] uppercase mt-0 tracking-normal">Seeing, Saying, and Thinking.</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
            {cardData.map((data) => (
              <div className="w-[375px] h-[500px] bg-bg1 rounded-lg flex items-center justify-start flex-col py-5" key={data.id}>
                <Image
                  src={data.image}
                  alt="Rectangle"
                  width={345}
                  height={200}
                  className="mb-4"
                />

                <p className="w-[345px] text-xl font-extrabold text-white leading-6">{data.title}</p>

                <p className="w-[345px] text-xs text-white opacity-70 my-3">{data.date}</p>

                <p className="w-[345px] text-white leading-4 mb-20">{data.body}</p>

                <button className="cardFilledBtn">
                  <Link href="">
                    read more...
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
