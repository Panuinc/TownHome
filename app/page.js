import React from "react";
import Home from "./components/Home";
import Regis from "./components/Regis";
import Idea from "./components/Idea";
import Gallery from "./components/Gallery";
import Model from "./components/Model";
import Location from "./components/Location";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2 pt-28 xl:pt-36">
      <div id="home" className="w-full">
        <Home id="home" />
      </div>
      <div id="regis" className="w-full">
        <Regis />
      </div>
      <div id="idea" className="w-full">
        <Idea />
      </div>
      <div id="gallery" className="w-full">
        <Gallery />
      </div>
      <div id="house-model" className="w-full">
        <Model />
      </div>
      <div id="location" className="w-full">
        <Location />
      </div>
    </div>
  );
}
