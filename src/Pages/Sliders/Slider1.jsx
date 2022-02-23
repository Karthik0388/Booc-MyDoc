import React, { Fragment } from "react";
import { BsSearch } from "react-icons/bs";

const Slider1 = () => {
  return (
    <Fragment>
      <section className="w-100 h-[550px] bg-blue-200 ">
        <h1 className=" text-white font-bold text-4xl absolute mt-20 ml-36">
          {" "}
          Search Doctors <br />& Make an Appointment{" "}
        </h1>
        <article className="w-4/5 m-auto flex h-[500px] items-center justify-center ">
          <div className="text-white basis-1/2 flex justify-center">
            <input
              className="w-[500px] h-14  rounded-2xl text-center"
              type="text"
              name="search"
              placeholder="Search Doctors & Hospitals"
            />
            <span className="relative">
              <BsSearch className="h-6 w-6 fill-gray-400 absolute top-4 right-[467px]" />
            </span>
            <button className="bg-orange-400 ml-4 pl-6 pr-6 h-14 rounded-2xl">
              Search
            </button>
          </div>
          <div className="basis-1/2 flex justify-center">
            <img src="Doctors.jpg" alt="Doctors.jpg" className="w-4/5  h-80 cover-full" />
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default Slider1;
