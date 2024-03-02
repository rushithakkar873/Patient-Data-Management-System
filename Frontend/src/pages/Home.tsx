import React from "react";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-main">
      {/* Header with a subtle background to differentiate it */}
      <header className="text-white py-5 px-4 md:px-6 lg:px-8 flex justify-between items-center bg-black bg-opacity-50">
        <h1 className="text-2xl font-bold">GPT-MedAssist</h1>
        <Button variant={'outline'} className="bg-black px-5">
            <Link to={"/auth/login"}>Login</Link>
        </Button>
      </header>

      {/* Main content with more space at the top */}
      <div className="flex-grow flex flex-col items-center justify-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white typing-animation">
            GPT-MedAssist: Revolutionize Your Healthcare Experience
          </h2>
          <p className="text-sm md:text-base text-gray-400 text-center max-w-3xl">
            Introducing the GPT-Enhanced Patient Data Management System.
            Securely input your health details and let cutting-edge AI do the
            rest, offering insights and suggestions like never before. Transform
            patient care with us, where innovation meets trust and efficiency.
          </p>
          <div className="mt-4">
            {" "}
            {/* Adjusted space for the Get Started button */}
            <Button variant={'outline'} className="py-5 px-7">
              <Link to={"/auth/signup"}>Get Started</Link>
            </Button>
          </div>
      </div>

      {/* Footer with a subtle background to differentiate it */}
      <footer className="text-gray-400 py-5 text-center bg-black bg-opacity-50">
        <span>
          ©️ {new Date().getFullYear()} GPT-MedAssist. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Home;
