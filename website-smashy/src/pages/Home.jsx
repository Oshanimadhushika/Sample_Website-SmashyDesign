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
import FAQItem from "../components/FAQItem";

import Battery from "../assets/battery.png";
import Hand from "../assets/hand.png";
import File from "../assets/file.png";
import Monitor from "../assets/monitor.png";
import { FaRocket } from "react-icons/fa6";
import Colomns from "../components/Colomns";
import { MdBatteryCharging90 } from "react-icons/md";
import { BsHandIndexThumbFill } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiFacebook } from "react-icons/ci";
import { TbCircleLetterX } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";

import Mobile from "../assets/mobile.jpg";

import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: false,    
     
    });
  }, []);

  const faq = [
    {
      question: "What services does Neon Strategies offer?",
      answer:
        "We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).",
    },
    {
      question: "How does Neon Strategies approach a new project?",
      answer:
        "We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).",
    },
    {
      question: "Can you help improve our existing marketing strategies?",
      answer:
        "We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).",
    },
    {
      question: "What industries does Neon Strategies specialize in?",
      answer:
        "We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).",
    },
    {
      question:
        "How long does it take to see results from a marketing campaign?",
      answer:
        "We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).",
    },
  ];

  const process = [
    {
      icon: <MdBatteryCharging90 />,
      topic: "Research & Analysis",
      paragraph:
        "Our team conducts thorough market research and competitive analysis to gain insights into your industry and audience. We use this data to inform our strategies and ensure they are aligned with current market trends and customer behaviors.",
    },

    {
      icon: <BsHandIndexThumbFill />,
      topic: "Creative Concepting",
      paragraph:
        "Our creative team brainstorms and develops innovative concepts that align with your brand and strategy. We focus on creating compelling visuals and messages that resonate with your audience and differentiate your brand from the competition.",
    },

    {
      icon: <FaFileAlt />,
      topic: "Implementation",
      paragraph:
        "With a solid strategy and creative concepts in place, we move to the implementation phase. Our team executes the marketing plan across various channels, ensuring each element is aligned and working towards your goals. This includes launching campaigns, creating content, and optimizing your digital presence.",
    },

    {
      icon: <FaRocket />,
      topic: "Monitoring & Optimization",
      paragraph:
        "We continuously monitor the performance of our campaigns and strategies using advanced analytics tools. By tracking KPIs and other metrics, we gain insights into what’s working and what can be improved. We make data-driven adjustments to optimize performance and maximize ROI.",
    },
  ];

  return (
    <>
      <div class=" w-full">
        <div class="grid grid-cols-12  text-center container mx-auto">
          <div class=" text-start p-10 col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-9 xl:col-span-7" data-aos="fade-up">
            <h1 class="text-black  font-bold font-sans  text-5xl flex flex-col">
              Ignite Your Brand’s Potential <span>with Neon Strategies</span>
            </h1>
          </div>
        </div>

        {/* welcome */}
        <div class="grid grid-cols-12 gap-5 p-10 pr-3 container mx-auto" data-aos="fade-up">
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
        <div class="grid grid-cols-12  text-center container mx-auto" >
          <div className="text-start p-4 col-span-12">
            <VideoComponent />
          </div>
        </div>

        {/* what we do */}

        <div class="grid grid-cols-12 gap-5 p-10 pr-3 mt-6 container mx-auto" data-aos="fade-up">
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

        <div class="grid grid-cols-12 gap-5 p-10 pr-3 mt-2 container mx-auto" data-aos="fade-up">
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

        <div class="grid grid-cols-12 gap-5 p-10 pr-3 mt-2 container mx-auto" data-aos="fade-up">
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

        <div class="grid grid-cols-12 gap-5 p-10 pr-3 mt-2 container mx-auto" data-aos="fade-up">
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

        <div class="grid grid-cols-12 gap-8 p-10 pr-3 mt-6 container mx-auto" data-aos="fade-up">
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
        <div class="grid grid-cols-12  mt-3 " data-aos="fade-up">
          <div class="col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-12 xl:col-span-12   ">
            <div className="relative   mx-0">
              <img src={AboutImge} alt="" className="w-full h-auto" />

              <button className="absolute bottom-8 right-20  flex  bg-opacity-70 sm:justify-center border-2 border-gray-200 text-gray-200 rounded-3xl p-3 mt-6 text-xs hover:bg-blue-300 hover:text-white ">
                Let's get in touch
                <span className="ml-3 mt-1 text-gray-200">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}

        <div class="grid grid-cols-12 gap-5 p-10 pr-3 mt-6 container mx-auto" data-aos="fade-up">
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
              Our services at Neon Strategies are tailored to meet the unique
              needs of your business, ensuring that your brand not only stands
              out but also connects deeply with your audience.
            </p>
          </div>

          <div class=" col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-12 xl:col-span-12 mt-5 ">
            <div className="w-full">
              {faq.map((faqData, index) => (
                <FAQItem
                  key={index}
                  question={faqData.question}
                  answer={faqData.answer}
                />
              ))}
            </div>
          </div>
        </div>

        {/* our process */}

        <div class="grid grid-cols-12 gap-5   mt-6  bg-gray-100  lg:p-28  xl:p-28 md:p-28 sm:p-16 p-16 pb-0" data-aos="fade-up">
          <div class="col-span-12 sm:col-span-12 md:col-span-4  lg:col-span-4 xl:col-span-4   ">
            <h1 className="text-md md:text-sm font-bold font-sans text-start">
              OUR PROCESS AT NEON STRATEGIES
            </h1>
          </div>
          <div class=" col-span-12 sm:col-span-12 md:col-span-7  lg:col-span-6 xl:col-span-6 ">
            <p className="font-sans font-normal text-3xl ">
              Our process at Neon Strategies is designed to be thorough,
              flexible, and client-focused
            </p>
          </div>
        </div>

        {/* colomns */}

        <div class="grid grid-cols-12 gap-5 lg:p-28  xl:p-28 md:p-28 sm:p-16 p-16 bg-gray-100 pt-0" data-aos="fade-up">
          <div class=" col-span-12 sm:col-span-12 md:col-span-6  lg:col-span-4 xl:col-span-4 p-5 ">
            <h1 className="text-lg md:text-sm font-bold font-sans text-start">
              We ensures your marketing remains effective and relevant.
            </h1>
            <p className="font-sans font-normal text-sm mt-4 ">
              At Neon Strategies, we believe that a well-defined process is key
              to delivering exceptional results. Our approach is collaborative,
              transparent, and tailored to meet the unique needs of each client.
              Here’s a step-by-step overview of how we work:
            </p>
          </div>

          {process.slice(0, 4).map((column, index) => (
            <div
              key={index}
              className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 text-center p-3"
            >
              <Colomns
                icon={column.icon}
                topic={column.topic}
                paragraph={column.paragraph}
              />
            </div>
          ))}

          <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 text-center">
            <div className="flex justify-center items-center mt-4">
              <div className="flex justify-center pt-16">
                <button className="flex bg-opacity-70 border-2 border-black text-black rounded-3xl p-3 mt-6 text-xs hover:bg-blue-200 w-full text-center">
                  Contact Us to Get Started
                  <span className="ml-3 mt-1 text-black">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* nice to meet */}

        <div class="grid grid-cols-12 gap-4 p-10 pr-3 mt-6 container mx-auto " data-aos="fade-up">
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6 mt-6">
            <div>
              <h1 className="text-5xl  font-bold font-sans text-start">
                Nice to Meet You!
              </h1>
            </div>

            <div className="space-y-16 pt-9">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                  placeholder="Your Phone Number"
                />
              </div>

              <div>
                <select
                  id="referral"
                  name="referral"
                  className="mt-1 block w-full border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                >
                  <option
                    className="text-gray-300"
                    value=""
                    disabled
                    selected
                    hidden
                  >
                    How do you know about us?
                  </option>
                  <option value="friend">Friend</option>
                  <option value="socialMedia">Social Media</option>
                  <option value="searchEngine">Search Engine</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <input
                  id="project"
                  name="project"
                  rows="4"
                  className="mt-1 block w-full border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                  placeholder="Brief your project"
                ></input>
              </div>
            </div>
          </div>

          <div class=" col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-6 xl:col-span-6 ">
            <div className="flex justify-center items-center rounded-lg p-20 object-cover ">
              <img
                src={Mobile}
                alt=""
                className="w-auto h-auto rounded-xl text-center align-middle"
              />
            </div>
          </div>
        </div>

        {/* contact 2*/}

        <div class="grid grid-cols-12 gap-5 p-10 pr-3 mt-6 container mx-auto " data-aos="fade-up">
          <div class="col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-12 xl:col-span-12  ">
            <div className="flex justify-center">
              <button className="p-3 bg-blue-800 text-white hover:bg-gray-400 hover:text-black flex justify-center rounded-3xl xl:w-1/5 lg:w-1/5 md:w-1/5 sm:w-1/3 w-1/3">
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-3xl font-bold font-sans text-center mt-3 w-2/3">
                We’d love to hear from you! Whether you’re ready to start your
                project or just have a question, feel free to reach out.
              </p>
            </div>

            <p className="text-center text-md font-normal mt-4">
              info@neostrategies.com
            </p>
          </div>
        </div>

        {/* contact 3*/}

        <div class="grid grid-cols-12 gap-8 p-10 pr-3 mt-6 container mx-auto " data-aos="fade-up">
          <div class="col-span-12 sm:col-span-12 md:col-span-4  lg:col-span-4 xl:col-span-4   ">
            <h1 className="font-bold text-md lg:text-start xl:text-start md:text-start sm:text-center text-center">
              Address
            </h1>
            <p className="lg:text-start xl:text-start md:text-start sm:text-center text-center">
              <h1 className="text-sm font-normal mt-1">Neon Strategies Ltd.</h1>
              <h1 className="text-sm font-normal mt-1">
                123 Marketing Street{" "}
              </h1>
              <h1 className="text-sm font-normal mt-1">London,W1A 1AA</h1>
              <h1 className="text-sm font-normal mt-1">United Kingdom</h1>{" "}
            </p>
          </div>

          <div class="col-span-12 sm:col-span-12 md:col-span-4  lg:col-span-4 xl:col-span-4   ">
            <h1 className="text-center">Monday - Friday: 9:00 AM - 6:00 PM</h1>
          </div>

          <div class="col-span-12 sm:col-span-12 md:col-span-4  lg:col-span-4 xl:col-span-4   ">
            <h1 className="font-bold text-md text-center">FOLLOW US</h1>
            <div className="flex gap-3 text-3xl text-center justify-center mt-6">
              <a href="">
                <TiSocialLinkedinCircular />
              </a>
              <a href="">
                <CiFacebook />
              </a>

              <a href="">
                <TbCircleLetterX />
              </a>

              <a href="">
                <IoLogoInstagram />
              </a>
            </div>
          </div>
        </div>

        <footer className=" border-t border-gray-200" >
          <div class="grid grid-cols-12 gap-8 container mx-auto p-3">
            <div class="col-span-12 sm:col-span-12 md:col-span-4  lg:col-span-4 xl:col-span-4   ">
              <div className="text-start">
                <h1 className="text-start">
                  © 2024 Neon Strategies, All rights reserved.
                </h1>
              </div>
            </div>

            <div class="col-span-12 sm:col-span-12 md:col-span-4  lg:col-span-4 xl:col-span-4   ">
              <div className="">
                <h1 className="lg:text-center xl:text-center md:text-center sm:text-start text-start">
                  Privacy Policy I Term & Conditions
                </h1>
              </div>{" "}
            </div>

            <div class="col-span-12 sm:col-span-12 md:col-span-4  lg:col-span-4 xl:col-span-4   ">
              <div className="">
                <h1 className="lg:text-center xl:text-center md:text-center sm:text-start text-start ">
                  Website by Smashy Design
                </h1>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Home;
