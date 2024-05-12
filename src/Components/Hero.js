import React from "react";

function Hero() {
  return (
    <section className=" w-full  h-screen flex justify-center items-center dark:bg-gray-900 ">
      <div className="p-5 text-center  w-[600px] max-w-full ">
        <h1 className="mb-3">
          All Your Digital Products
          <p className="text-primary-400">Is One Click Away</p>
        </h1>
        <p className="font-medium text-xl/relaxed  text-black dark:text-white">
          Start Exploring State of the Art Assets Now!
        </p>
        <div className="flex flex-col md:flex-row  justify-evenly mt-9 gap-4">
          <button className="btn max-w-full bg-primary-600 hover:bg-primary-400 text-white px-9 py-3">
            Get Started
          </button>
          <button className="btn max-w-full  text-primary-600 hover:text-primary-400 shadow-xl dark:shadow-lg px-9 py-3">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
