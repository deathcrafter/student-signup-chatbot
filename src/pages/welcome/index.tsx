import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center">
        Enter into Student Info System!
      </h1>
      <Link
        to="/chatbot"
        title="Click to get started"
        className="border-2 border-blue-500 rounded-md py-2 px-4 m-2 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
      >
        Enroll Now
      </Link>
    </div>
  );
}
