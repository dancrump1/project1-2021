import PropTypes from "prop-types";
import React from "react";
import { motion } from "framer-motion";
import photo from "./editedDecentPic.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="pageContainer">
      <div className="photoContainer">
        <img src={photo} alt="something" className="profilePhoto" />
      </div>
      <main>
        <p className="homePageText">
          Welcome to my playground of front end coding attempts.
        </p>
        <p className="homePageText">
          Here I hope to start playing with new ideas and fun coding projects,
          but also hopefully use this as a staging area for all of my code to
          come
        </p>
      </main>
    </div>
  );
};

Home.propTypes = {};

export default Home;
