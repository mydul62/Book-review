import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 underline">Go back to home</Link>
    </div>
    </div>
  );
};

export default ErrorPage;