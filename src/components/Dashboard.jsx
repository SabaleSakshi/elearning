import { useSelector, useDispatch } from "react-redux";
import { dashboardActions } from "../store/dashboardSlice";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const courses = useSelector((store) => store.dashboard);
  const dispatch = useDispatch();

  function handleUnenrollBtn(card) {
    dispatch(dashboardActions.removeFromBoard(card));
  }

  const courseLength = courses.length;
  console.log(courseLength);
  return (
    <div className="container mx-auto p-4 m-30">
      {/* Show "No courses Enrolled" only when courseLength is 0 */}
      {courseLength === 0 ? (
        <h1 className="text-2xl font-bold text-center">No courses Enrolled</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {courses.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-80"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <div className="mb-4">
                  <iframe
                    className="w-full h-48 pointer-events-none"
                    src="https://www.youtube.com/embed/videoseries?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&rel=0"
                    title="YouTube Playlist"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-gray-600 pb-4">{card.description}</p>
                <Link
                  to={`/watch?id=${card.id}`}
                  className="bg-blue-500 text-white mr-5 px-6 py-2 mt-auto rounded-md cursor-pointer hover:bg-green-600 transition"
                >
                  Watch
                </Link>
                <button
                  className="bg-green-500 text-white px-6 py-2 mt-auto rounded-md cursor-pointer hover:bg-green-600 transition"
                  onClick={() => handleUnenrollBtn(card)}
                >
                  Unenroll
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
