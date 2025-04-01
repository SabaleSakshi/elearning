import React from "react";
import AboutImg from "../assets/aboutImg.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

function About() {
  return (
    <div className="flex px-4 m-6 justify-between mt-30 py-8">
      {/* Image Section */}
      <div className="md:w-1/3 mb-6 md:mb-0">
        <img
          src={AboutImg}
          alt="About Us Image"
          className="w-full h-auto object-cover  rounded-lg shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-2/3  md:pl-8 flex flex-col justify-center">
        <h1 className="text-3xl  text-center font-bold mb-4">ABOUT US</h1>
        <p className="text-base mb-6">
          At ElevateU, we’re on a mission to make education
          accessible, engaging, and practical for everyone. Our platform offers
          a diverse range of courses led by industry experts, designed to help
          you learn new skills, grow professionally, or explore your passions.
        </p>
        <p className="text-base mb-6">
          With interactive content, flexible learning options, and a global
          community of learners, we combine innovation and expertise to deliver
          a dynamic learning experience. Whether you're upskilling, reskilling,
          or starting fresh, we’re here to support you every step of the way.
        </p>
        <p className="text-base mb-6">
          Join us and transform your learning journey today!
        </p>

        {/* Features List */}
        <ul className="grid grid-cols-2 gap-4 text-gray-700">
          <li className="flex items-center">
            <FaArrowRightLong className="text-blue-500 mr-2" />
            Skilled Instructor
          </li>
          <li className="flex items-center">
            <FaArrowRightLong className="text-blue-500 mr-2" />
            International Certificate
          </li>
          <li className="flex items-center">
            <FaArrowRightLong className="text-blue-500 mr-2" />
            Online Classes
          </li>
          <li className="flex items-center">
            <FaArrowRightLong className="text-blue-500 mr-2" />
            Personal Mentor
          </li>
          <li className="flex items-center">
            <FaArrowRightLong className="text-blue-500 mr-2" />
            24*7 Doubt Solving Engine
          </li>
          <li className="flex items-center">
            <FaArrowRightLong className="text-blue-500 mr-2" />
            Daily Assessments
          </li>
        </ul>
        <div className="flex  mt-8">
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
