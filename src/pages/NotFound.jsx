import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 p-4">
      <FaExclamationTriangle className="text-6xl text-red-500 mb-4 animate-bounce" />
      <h1 className="text-6xl font-bold mb-2">404</h1>
      <p className="text-lg md:text-xl text-center mb-6 px-2">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300"
      >
        Return Home
      </a>
    </div>
  );
};

export default NotFound;
