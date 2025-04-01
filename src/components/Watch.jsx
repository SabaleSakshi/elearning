import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../store";

function Watch() {
const [searchParams] = useSearchParams();
const courseId = searchParams.get("id"); 
console.log(courseId);
const coursesList=useSelector((store)=>store.courses);
console.log(coursesList);
const course = coursesList.filter((course)=>course.id==courseId);
const link=course[0].youtubeId

    return (
        <div className="flex justify-center mt-30">
          <iframe
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/videoseries?list=${link}&rel=0`}
            title="YouTube Playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
}

export default Watch;
