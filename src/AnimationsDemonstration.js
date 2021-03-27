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
            height: "50px",
            backgroundColor: "blue",
          }}
          whileHover={{ x: "500px" }}
          transition={{ type: "tween" }}
        >
          Don't touch me
        </motion.div>

        <AnimateSharedLayout>
          <motion.div
            style={{
              background: "white",
              width: "40px",
              height: "40px",
              marginTop: "50px",
              display: "grid",
              gridTemplateAreas: `'1 2''3 4'`,
            }}
            layout
          >
            <motion.div
              style={{
                width: "10px",
                height: "10px",
                gridArea: "1",
              }}
              whileHover={{ x: "500px" }}
              transition={{ type: "tween" }}
              layout
            >
              1
            </motion.div>
            <motion.div
              style={{
                width: "10px",
                height: "10px",
                gridArea: "2",
              }}
              whileHover={{ x: "500px" }}
              transition={{ type: "tween" }}
              layout
            >
              2
            </motion.div>
            <motion.div
              style={{
                width: "10px",
                height: "10px",
                gridArea: "3",
              }}
              whileHover={{ x: "500px" }}
              transition={{ type: "tween" }}
              layout
            >
              3
            </motion.div>
            <motion.div
              style={{
                width: "10px",
                height: "10px",
                gridArea: "4",
              }}
              whileHover={{ x: "500px" }}
              transition={{ type: "tween" }}
              layout
            >
              4
            </motion.div>
          </motion.div>
        </AnimateSharedLayout>
      </section>
    </div>
  );
};

AnimationsDemonstration.propTypes = {};

export default AnimationsDemonstration;
