import { FaRegArrowAltCircleRight,FaArrowRight } from "react-icons/fa";
const WhatWeDo=()=>{
    return(
        <>
          <div >
            <h1 className="text-md md:text-sm font-bold font-sans text-start">
              Digital Marketing
            </h1>

            <p className="font-sans font-normal text-3xl ">
              At Neon Strategies, we harness the power of digital marketing to
              elevate your brand and connect you with your target audience. Our
              comprehensive digital marketing services are designed to drive
              traffic, increase engagement, and boost conversions.
            </p>
            <div className="flex">
              <div className="bg-gray-200 rounded-full p-2">SEO</div>
              <div className="bg-gray-200 rounded-full p-2">
                Social Media Marketing
              </div>

              <div className="bg-gray-200 rounded-full p-2">
                Content Marketing
              </div>
            </div>

            <div className="flex mt-6">
              <a
                href=""
                className="text-decoration-none underline text-sm font-sans font-normal"
              >
                Learn More
              </a>

              <span className="ml-3">
                <FaArrowRight />
              </span>
            </div>
          </div>

         
        
        
        
        </>
    )
}
export default WhatWeDo;