import React, { Fragment } from "react";
import { BsSearch } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      {/* Navbar one starts here */}
      <section className="w-100 h-18 bg-black ">
        <article className="w-4/5 m-auto flex h-20 items-center ">
          <div className="text-white basis-1/4 flex justify-start font-bold h-20 items-center">
            <Link
              className="text-white basis-1/4 flex justify-start font-bold h-20 items-center"
              to="/"
            >
              Book <img className="h-14 w-14" src="Logo.png" alt="log.png" />
              My Doc
            </Link>
          </div>
          <div className="text-white basis-1/2 flex h-20 items-center justify-center">
            <ul className="w-4/5 m-auto flex justify-between">
              <li>
                <Link
                  className="font-bold text-white hover:text-orange-400 rounded-md p-2 pl-4 pr-4"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li>
                <a
                  className="font-bold text-white hover:text-orange-400 rounded-md p-2 pl-4 pr-4"
                  href=""
                >
                  DOCTORS
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-white hover:text-orange-400 rounded-md p-2 pl-4 pr-4"
                  href=""
                >
                  PATIENTS
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-white hover:text-orange-400 rounded-md p-2 pl-4 pr-4"
                  href=""
                >
                  PAGES
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-white hover:text-orange-400 rounded-md p-2 pl-4 pr-4"
                  href=""
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-white hover:text-orange-400 rounded-md p-2 pl-4 pr-4"
                  href=""
                >
                  ADMIN
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white basis-1/4 flex justify-end">
            <ul className="flex justify-between ">
              <li className="flex h-20 items-center ">
                <Link
                  to="/register"
                  className="font-bold flex hover:hover:text-orange-400 "
                >
                  <span>
                    <FaUserCheck className=" mt-1 mr-2" />
                  </span>
                  Sign up
                </Link>
              </li>
              <li className="flex h-20 items-center ">
                <Link
                  to="/login"
                  className="font-bold flex ml-6 hover:hover:text-orange-400 rounded-md p-2"
                >
                  <span className="mr-2">
                    <FaSignInAlt className="mt-1" />
                  </span>
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default NavBar;
