import { FaArrowRight } from "react-icons/fa";
import sampleVideo from "../assets/sampleVideo.mp4";
import React, { useState, useEffect } from "react";
import VideoComponent from "../components/VideoComponent";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import AboutImge from "../assets/imgAbout.png";
import AliceCarousel from "react-alice-carousel";

import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import ImageSlider1 from "../components/ImageSlider1";
import ImageSlider2 from "../components/ImageSlider2";

const Home = () => {
  return (
    <>
      <div class=" w-full">
        <div class="grid grid-cols-12  text-center container mx-auto">
          <div class=" text-start p-10 col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-9 xl:col-span-7">
            <h1 class="text-black  font-bold font-sans  text-5xl flex flex-col">
              Ignite Your Brand’s Potential <span>with Neon Strategies</span>
            </h1>
          </div>
        </div>

        {/* welcome */}
        <div class="grid grid-cols-12 gap-5 p-10 pr-3 container mx-auto">
          <div class="col-span-12 sm:col-span-12 md:col-span-4  lg:col-span-4 xl:col-span-4   ">
            <h1 className="text-md md:text-sm font-bold font-sans">
              WELCOME TO NEON STRATEGIES
            </h1>
          </div>
          <div class=" col-span-12 sm:col-span-12 md:col-span-7  lg:col-span-7 xl:col-span-7 ">
            <p className="font-sans font-normal">
              At Neon Strategies, we illuminate your brand with innovative and
              dynamic marketing solutions. Our team of experts is committed to
              transforming your vision into reality with strategies that deliver
              measurable results and sustainable growth.
            </p>

            <div className="flex mt-6">
              <a
                href=""
                className="text-decoration-none underline text-sm font-sans font-normal"
              >
                Start Your Journey with Us!
              </a>

              <span className="ml-3">
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>

        {/* video */}
        <div class="grid grid-cols-12  text-center container mx-auto">
          <div className="text-start p-4 col-span-12">
            <VideoComponent />
          </div>
        </div>

        {/* what we do */}

        <div class="grid grid-cols-12 gap-5 p-10 pr-3 mt-6 container mx-auto">
          <div class="col-span-12 sm:col-span-12 md:col-span-4  lg:col-span-4 xl:col-span-4   ">
            <h1 className="text-md md:text-sm font-bold font-sans text-start">
              WHAT WE DO
            </h1>
          </div>
          <div class=" col-span-12 sm:col-span-12 md:col-span-7  lg:col-span-6 xl:col-span-6 ">
            <p className="font-sans font-normal text-3xl ">
              A comprehensive range of marketing services designed to elevate
              your brand and drive success.
            </p>
          </div>
        </div>

        {/* what we do marketing */}

        <div class="grid grid-cols-12 gap-5 p-10 pr-3 mt-2 container mx-auto">
          <div class="col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-5 xl:col-span-5   ">
            <h1 className="text-xl  font-bold font-sans text-start">
              Digital Marketing
            </h1>

            <p className="font-sans font-normal text-sm mt-5 ">
              At Neon Strategies, we harness the power of digital marketing to
              elevate your brand and connect you with your target audience. Our
              comprehensive digital marketing services are designed to drive
              traffic, increase engagement, and boost conversions.
            </p>
            <div className="flex gap-2 mt-8">
              <div className="bg-gray-200 rounded-3xl p-2 w-24 h-10 text-gray-700 text-center text-sm">
                SEO
              </div>
              <div className="bg-gray-200 rounded-3xl p-2 w-44 h-10 text-gray-700 text-center text-sm ">
                Social Media Marketing
              </div>

              <div className="bg-gray-200 rounded-3xl p-2 w-40 h-10 text-gray-700 text-center text-sm">
                Content Marketing
              </div>
            </div>

            <div className="flex mt-9">
              <a
                href=""
                className="text-decoration-none underline text-sm font-sans font-normal hover:text-red-500"
              >
                Learn More
              </a>

              <span className="ml-3 mt-1">
                <FaArrowRight />
              </span>
            </div>
          </div>

          <div class=" col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-7 xl:col-span-7 items-center">
            <ImageSlider1 />
          </div>
        </div>

        {/* what we do Branding */}

        <div class="grid grid-cols-12 gap-5 p-10 pr-3 mt-2 container mx-auto">
          <div class="col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-5 xl:col-span-5   ">
            <h1 className="text-xl  font-bold font-sans text-start">
              Branding
            </h1>

            <p className="font-sans font-normal text-sm mt-5 ">
              At Neon Strategies, we understand that a strong brand is the
              foundation of any successful business. Our branding services are
              designed to create a memorable and impactful brand identity that
              resonates with your target audience and sets you apart from the
              competition.
            </p>
            <div className="flex gap-2 mt-8">
              <div className="bg-gray-200 rounded-3xl p-2 w-40 h-10 text-gray-700 text-center text-sm">
                Brand Strategy
              </div>
              <div className="bg-gray-200 rounded-3xl p-2 w-44 h-10 text-gray-700 text-center text-sm ">
                Logo Design
              </div>

              <div className="bg-gray-200 rounded-3xl p-2 w-40 h-10 text-gray-700 text-center text-sm">
                Brand Identity
              </div>
            </div>

            <div className="flex mt-9">
              <a
                href=""
                className="text-decoration-none underline text-sm font-sans font-normal hover:text-red-500"
              >
                Learn More
              </a>

              <span className="ml-3 mt-1">
                <FaArrowRight />
              </span>
            </div>
          </div>

          <div class=" col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-7 xl:col-span-7 ">
            <ImageSlider2 />
          </div>
        </div>

        {/* what we do Creative Services */}

        <div class="grid grid-cols-12 gap-5 p-10 pr-3 mt-2 container mx-auto">
          <div class="col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-5 xl:col-span-5   ">
            <h1 className="text-xl  font-bold font-sans text-start">
              Creative Services
            </h1>

            <p className="font-sans font-normal text-sm mt-5 ">
              At Neon Strategies, our Creative Services team is dedicated to
              bringing your vision to life with innovative and captivating
              designs. We believe that creativity is at the heart of effective
              marketing, and we strive to create visual content that not only
              captures attention but also drives engagement and results.
            </p>
            <div className="flex gap-2 mt-8">
              <div className="bg-gray-200 rounded-3xl p-2 w-40 h-10 text-gray-700 text-center text-sm">
                Graphic Design
              </div>
              <div className="bg-gray-200 rounded-3xl p-2 w-44 h-10 text-gray-700 text-center text-sm ">
                Photography
              </div>
            </div>

            <div className="flex mt-9">
              <a
                href=""
                className="text-decoration-none underline text-sm font-sans font-normal hover:text-red-500"
              >
                Learn More
              </a>

              <span className="ml-3 mt-1">
                <FaArrowRight />
              </span>
            </div>
          </div>

          <div class=" col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-7 xl:col-span-7 ">
            <ImageSlider2 />
          </div>
        </div>

        {/* About us */}

        <div class="grid grid-cols-12 gap-8 p-10 pr-3 mt-6 container mx-auto">
          <div class="col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-4 xl:col-span-4   ">
            <h1 className="text-md  font-bold font-sans text-start">
              ABOUT US
            </h1>
          </div>
          <div class=" col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-7 xl:col-span-7 ">
            <h1 className="text-xl  font-semibold font-sans text-start">
              Our Mission
            </h1>
            <p className="font-sans font-normal text-md mt-3">
              To light up your brand with cutting-edge marketing strategies that
              drive growth and enhance brand visibility.
            </p>

            <p className="mt-3 font-sans font-normal text-md">
              Neon Strategies is a full-service marketing agency dedicated to
              energizing your brand through creative and effective marketing
              solutions. Founded in 2017, we have been at the forefront of
              marketing innovation, helping businesses of all sizes achieve
              their goals.
            </p>

            <button className="flex bg-blue-800 text-white rounded-3xl p-3 mt-6 text-sm hover:bg-gray-600 ">
              Contact Us Today
              <span className="ml-3 mt-1 text-white">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>

{/* about image */}
        <div class="grid grid-cols-12  mt-3 ">
          <div class="col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-12 xl:col-span-12   ">
            <div className="relative   mx-0">
              <img src={AboutImge} alt="" className="w-full h-auto" />

              <button className="absolute bottom-8 right-20 flex bg-opacity-70  border-2 border-gray-200 text-gray-200 rounded-3xl p-3 mt-6 text-xs hover:bg-blue-300 hover:text-white ">
                Let's get in touch
                <span className="ml-3 mt-1 text-gray-200">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>


        {/* FAQ */}

             {/* what we do */}

             <div class="grid grid-cols-12 gap-5 p-10 pr-3 mt-6 container mx-auto">
          <div class="col-span-12 sm:col-span-12 md:col-span-4  lg:col-span-4 xl:col-span-4   ">
            <h1 className="text-lg md:text-sm font-bold font-sans text-start">
            FAQ
            </h1>
          </div>
          <div class=" col-span-12 sm:col-span-12 md:col-span-7  lg:col-span-6 xl:col-span-6 ">
          <h1 className="text-2xl  font-semibold font-sans text-start">
          Find Your Answers Here
            </h1>
            <p className="font-sans font-normal text-md mt-5 ">
            Our services at Neon Strategies are tailored to meet the unique needs of your business,
             ensuring that your brand not only stands out but also connects deeply with your audience.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};
export default Home;
