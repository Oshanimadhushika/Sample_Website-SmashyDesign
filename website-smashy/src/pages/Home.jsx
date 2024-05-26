import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div class="container mx-auto">
        <div class="grid grid-cols-12  text-center ">
          <div class=" text-start p-10 col-span-12 sm:col-span-12 md:col-span-12  lg:col-span-9 xl:col-span-7">
            <h1 class="text-black  font-bold font-sans  text-5xl flex flex-col">
              Ignite Your Brand’s Potential <span>with Neon Strategies</span>
            </h1>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-5 p-10 pr-3">
          <div class="col-span-12 sm:col-span-12 md:col-span-4  lg:col-span-4 xl:col-span-4   ">
            <h1 className="text-md md:text-sm font-bold font-sans">WELCOME TO NEON STRATEGIES</h1>
          </div>
          <div class=" col-span-12 sm:col-span-12 md:col-span-7  lg:col-span-7 xl:col-span-7 ">
            <p className="font-sans font-normal">
              At Neon Strategies, we illuminate your brand with innovative and
              dynamic marketing solutions. Our team of experts is committed to
              transforming your vision into reality with strategies that deliver
              measurable results and sustainable growth.
            </p>

            <div className="flex mt-6">
             
              <a href="" className="text-decoration-none underline text-sm font-sans font-normal">
                Start Your Journey with Us!
               
              </a>

              <span className="ml-3">
                  <FaArrowRight />
                </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
