import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/AboutUs.css";
import NavBar from "./NavBar";
import hospitalImage from "../images/hospital.png";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={hospitalImage}
          alt="Hospital"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-16">
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Our Team</h2>
              <ul className="space-y-2">
                <li>Aritro Saha</li>
                <li>Aneek Kumar Saha</li>
                <li>Biswajyoti Dutta</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Project</h2>
              <p>Blockchain for Medical Records</p>
              <p>Subject: Foundation of Blockchain (BCSE324L)</p>
              <p>Faculty: Senthil Prakash P N</p>
              <p>SLOT: F2+TF2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="bg-teal-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110 hover:bg-teal-600"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default AboutUs;