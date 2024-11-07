import React from "react";
import NavBar_Logout from "./NavBar_Logout";
import { useParams,useNavigate } from "react-router-dom";

function DiagnosticForm() {
  const navigate = useNavigate();
  const { hhNumber } = useParams();


  return (
    <div>
      <NavBar_Logout />
      <div className="bg-gradient-to-b from-black to-gray-800 text-white p-10 font-mono">
        <p className="text-center text-2xl">
          Feature Not Implemented Yet
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-teal-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110 hover:bg-teal-600"
          onClick={() => {
            navigate("/diagnostic/"+hhNumber);
          }}
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
}

export default DiagnosticForm;
