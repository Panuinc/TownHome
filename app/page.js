import React from "react";
import Home from "./components/Home";
import Regis from "./components/Regis";
import Idea from "./components/Idea";
import Gallery from "./components/Gallery";
import Model from "./components/Model";
import Location from "./components/Location";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
      <Home />
      <Regis />
      <Idea />
      <Gallery />
      <Model />
      <Location />
    </div>
  );
}
