import React, { Fragment } from "react";
import { GrMapLocation } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <Fragment>
      <section className="w-100 bg-white h-20">
        <article className="w-4/5 m-auto flex h-20 justify-center items-center">
          <div className="basis-1/2 flex justify-start items-center">
            <span>
              <GrMapLocation className="h-10 w-10" />
            </span>
            <p className="ml-4 font-bold">
              3556 Gandhi Bazzar, Basavngudi, <br /> Karnataka, Pin:560050
            </p>
          </div>
          <div className="basis-1/2 flex justify-end">
            <span>
              <FaFacebook className="h-10 w-10 m-2" />
            </span>
            <span>
              <BsTwitter className="h-10 w-10 m-2" />
            </span>
            <span>
              <AiFillInstagram className="h-10 w-10 m-2" />
            </span>
          </div>
        </article>
      </section>
      {/* Footer starts here */}
      <section className="w-100 h-[500px] bg-black text-white">
        <article className="w-4/5 m-auto h-[500px] flex justify-between items-center ">
          <h2 className="text-3xl font-bold">Book My Doc</h2>
          <div>
            <ul>
              <li className="text-2xl font-bold p-2">For Patients</li>
              <li>Search for Doctors</li>
              <li>Login</li>
              <li>Register</li>
              <li>Booking</li>
              <li>Patients Dashboard</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-2xl font-bold p-2">For Doctors</li>
              <li>Appointments</li>
              <li>Chat</li>
              <li>Login</li>
              <li>Register</li>
              <li>Doctor Dashboard</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-2xl font-bold p-2">Sitemap</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Payment</li>
              <li>Shipment</li>
              <li>Return Policy</li>
            </ul>
          </div>
         
        </article>
      </section>
    </Fragment>
  );
};

export default Footer;
