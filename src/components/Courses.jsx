import React from "react";
import js from "../assets/js.jpg";
import html from "../assets/html.jpg";
import react from "../assets/react.png";
import Youtube from "./Youtube";



const courses = [
  {
    id: 1,
    image: js,
    title: "Ultimate JavaScript Course",
    description: "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
  },
  {
    id: 2,
    image: html,
    title: "HTML",
    description: "This course provides a comprehensive introduction to HTML (HyperText Markup Language), the backbone of web development. You will learn how to structure web pages using HTML elements, create links, embed media, and follow best practices for modern web design. By the end of the course, you will be able to build a fully functional webpage from scratch.",
  },
  {
    id: 3,
    image: react,
    title: "React",
    description: "This course is designed to teach you React.js, the most popular JavaScript library for building modern web applications. You will learn how to create interactive user interfaces, manage state efficiently, and work with APIs. By the end of this course, you will have the skills to build dynamic, high-performance web applications from scratch.",
  },
];

const CoursesPage = () => {
  return (
    <div className="p-6">
  <h1 className="text-3xl text-center font-bold mb-20">Courses Recommended</h1>
  <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-3 gap-7">
    {courses.map((course) => (
      <div 
        key={course.id} 
        className="bg-white shadow-md rounded-xl flex flex-col h-full min-h-56 max-w-sm"
      >
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full rounded-t-xl h-fit" 
        />
        <div className="p-4 flex flex-col flex-grow">
          <div className="text-xl font-semibold">{course.title}</div>
          <p className="text-sm text-gray-600 font-semibold text-left mt-4 mb-4 flex-grow">
            {course.description}
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 mt-auto rounded-md hover:bg-blue-600 transition" >
            Start Watching
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default CoursesPage;
