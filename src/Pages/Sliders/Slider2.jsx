import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";

const Slider2 = () => {
  return (
    <section className="w-100  h-[500px]">
      <article className="w-4/5 m-auto flex h-[500px]  justify-between items-center">
        <div className="basis-2/5 flex justify-end flex-col bg-white p-20 rounded-lg">
          <span>
            <FaUserPlus className="h-24 w-24 fill-orange-400" />
          </span>
          <p>I'm a New Patient</p>
        </div>
        <div className="basis-2/5 flex justify-start flex-col bg-white p-20 rounded-md">
          <span>
            <FaUserMd className="h-24 w-24 fill-orange-400" />
          </span>
          <p>I'm a Doctor / Health Care Provider</p>
        </div>
      </article>
    </section>
  );
};

export default Slider2;
