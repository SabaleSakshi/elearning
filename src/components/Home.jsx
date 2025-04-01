import React from "react";
import HomeImg from "../assets/homeImg.png";
import Testimonials from "./Testimonials";
import CardsSection from "./CourseContent";
import About from "./About";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

function Home() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setStartCount(true);
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-6 md:p-8 lg:p-8 space-y-8 lg:space-y-0 mt-12 md:mt-16 lg:mt-20">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Unlock Your <span className="text-blue-500">Potential</span> with Online Learning
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            Explore expert-led courses, master in-demand skills, and achieve
            your goals—anytime, anywhere.
          </p>
          <div className="flex flex-col md:flex-row justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
            {!isAuthenticated ? (
              <button
                onClick={() => loginWithRedirect()}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Get Started
              </button>
            ) : (
              <Link
                to="/dashboard"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Get Started
              </Link>
            )}

            <Link
              to="/courses"
              className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={HomeImg} alt="HomeImage" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto" />
        </div>
      </div>
      
      <div className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-lg text-white">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-white">
                {startCount && <CountUp start={0} end={100} duration={3} />}+
              </h3>
              <p>Courses</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-white">
                {startCount && <CountUp start={0} end={10000} duration={3} />}+
              </h3>
              <p>Students Enrolled</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-white">
                {startCount && <CountUp start={0} end={500} duration={3} />}+
              </h3>
              <p>Trusted by Companies</p>
            </div>
          </div>
        </div>
      </div>

      <About />
      <CardsSection />
      <Testimonials />
    </>
  );
}

export default Home;
