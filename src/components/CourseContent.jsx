import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { dashboardActions } from '../store/dashboardSlice';
import { useAuth0 } from "@auth0/auth0-react";


function CardsSection() {
  const { loginWithRedirect, isAuthenticated} = useAuth0();
  const dispatch = useDispatch();
  const dashboard = useSelector((store)=>store.dashboard)
  // const coursesFound = dashboard.indexOf(cardsData.id)>=0;
 console.log(dashboard);
  const cardsData = useSelector((store)=>store.courses);
 
  // console.log(cardsData[0].id);
  // State to hold the selected category; default is 'all'
  const [selectedCategory, setSelectedCategory] = useState('all');

  // List of categories for the anchors
  const categories = ['all', 'web development', 'dsa', 'python', 'ui ux design'];

  // Function to handle anchor clicks
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter the cards based on the selected category
  const filteredCards =
    selectedCategory === 'all'
      ? cardsData
      : cardsData.filter((card) => card.category === selectedCategory);

  function handleEnrollBtn(card){
    
     dispatch(dashboardActions.addToBoard(card));
   
  }
  function handleUnenrollBtn(card){
    dispatch(dashboardActions.removeFromBoard(card));
  }

  return (
    <div className="container mx-auto p-4" id='coursesBox'>
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Recommended Courses</h1>

      {/* Navigation Section */}
      <nav className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium focus:outline-none transition 
              ${selectedCategory === category 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {filteredCards.map((card) => {
          const isEnrolled = dashboard.some((item)=>item.id==card.id);
          return(
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-80"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <div className="mb-4">
              <iframe
            className="w-full h-48 pointer-events-none"
            src={`https://www.youtube.com/embed/videoseries?list=${card.youtubeId}&rel=0`}
            title="YouTube Playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
              </div>
              <p className="text-gray-600 pb-4">{card.description}</p>
              {!isEnrolled ? (
                  <button
                    className="bg-blue-500 text-white px-6 py-2 mt-auto rounded-md hover:bg-blue-600 transition"
                    onClick={() => {
                      if (isAuthenticated) {handleEnrollBtn(card)}
                      else{loginWithRedirect()}
                      }
                    }
                  >
                    Enroll
                  </button>
                ) : (
                  <button
                    className="bg-green-500 text-white px-6 py-2 mt-auto rounded-md cursor-not-allowed"
                    onClick={() => handleUnenrollBtn(card)}
                  >
                    Enrolled
                  </button>
                )}
            </div>
          </div>
        )})}
        
      </div>
    </div>
  );
}

export default CardsSection;
