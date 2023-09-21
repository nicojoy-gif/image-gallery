import React from "react";
import Navbar from "./Navbar";
import a from "../Assets/2. Bring a phone while enjoying coffee.png";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-cyan-900">
      <Navbar />
      <section className="grid  lg:grid-cols-2 grid-cols-1 m-auto">
        <div className="text-white text-start flex flex-col justify-center mx-auto">
          <h1 className="text-white text-5xl py-3 font-bold">Drag And Drop </h1>
          <p className="text-4xl ">The User Interface</p>
          <p className="py-5 text-xl font-medium">
            Unleash Your Creativity, One Image at a Time.
          </p>
          <div>
            <button className="bg-black py-2 rounded-xl hover:bg-cyan-800 my-5 w-48 text-center font-medium">
              <NavLink to="/Login">GET STARTED</NavLink>
            </button>
          </div>
        </div>
        <div className=" p-4 ">
          <img src={a} alt="background" className="" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
