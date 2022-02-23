import React, { Fragment, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const Slider3 = () => {
  let [state, setState] = useState("");

  return (
    <Fragment>
      <section className="w-100 h-[500px] bg-blue-200">
        <h1 className="font-bold text-white text-center text-3xl">CHOOSE YOUR SPECIALIST DOCTORS</h1>
        <article className="w-11/12 m-auto h-[500px] flex justify-between items-center ">
          <div className="bg-white  p-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvYM1uBz2gzlcOYWCZQYAJfUAvwZRO6d4SQ&usqp=CAU"
              alt="Doctor.jpg"
            />
            <h1 className="font-bold">Eric Buckles</h1>
            <p>MBBS, MDS - Cosmetics Surgeon</p>
            <span className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </span>
            <button className="bg-orange-400 mt-2 rounded-2xl  p-2 font-bold  text-white">
              Book Now
            </button>
          </div>
          <div className="bg-white p-8">
            <img
              src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4="
              alt="Doctor.jpg"
              className="w-22 h-56"
            />
            <h1 className="font-bold">Eric Buckles</h1>
            <p>MBBS, MDS - Cosmetics Surgeon</p>
            <span className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </span>
            <button className="bg-orange-400 mt-2 rounded-2xl  p-2 font-bold  text-white">
              Book Now
            </button>
          </div>
          <div className="bg-white p-8">
            <img
              src="https://image.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg"
              alt="Doctor.jpg"
              className="w-22 h-56"
            />
            <h1 className="font-bold">Eric Buckles</h1>
            <p>MBBS, MDS - Cosmetics Surgeon</p>
            <span className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </span>
            <button className="bg-orange-400 mt-2 rounded-2xl  p-2 font-bold  text-white">
              Book Now
            </button>
          </div>
          <div className="bg-white p-8">
            <img
              src="https://yt3.ggpht.com/ytc/AKedOLSKtGMWDQ43_1SKX53sKoIFBotUtJqi4wL-GUTkWA=s900-c-k-c0x00ffffff-no-rj"
              alt="Doctor.jpg"
              className="w-22 h-56"
            />
            <h1 className="font-bold">Eric Buckles</h1>
            <p>MBBS, MDS - Cosmetics Surgeon</p>
            <span className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </span>
            <button className="bg-orange-400 mt-2 rounded-2xl  p-2 font-bold  text-white">
              Book Now
            </button>
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default Slider3;
