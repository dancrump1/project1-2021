import PropTypes from "prop-types";
import React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";

const AnimationsDemonstration = () => {
  return (
    <div>
      <section style={{ padding: "15px" }}>
        <motion.div
          style={{
            width: "50px",
            height: "70px",
            backgroundColor: "lightgrey",
            border: "15px solid teal",
            overflow: "hidden",
          }}
          whileHover={{ x: "500px" }}
          transition={{ type: "tween" }}
        >
          Don't touch me
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: "60px",
            marginTop: "30px",
            backgroundColor: "lightgrey",
          }}
        >
          I like spin
        </motion.div>
      </section>
    </div>
  );
};

AnimationsDemonstration.propTypes = {};

export default AnimationsDemonstration;
