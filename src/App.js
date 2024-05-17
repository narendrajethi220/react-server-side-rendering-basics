import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";

const App = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold uppercase">
        Server-Side Rendering
      </h1>
      <ul className="flex flex-rows justify-around border-2 w-[70%] m-auto font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/articles" exact element={<Articles />} />
      </Routes>
    </>
  );
};

export default App;
