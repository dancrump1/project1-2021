import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "./Store";

// BASE APP
function ReduxDemonstration() {
  const dispatch = useDispatch();
  const {
    add,
    minus,
    increaseX,
    decreaseX,
    increaseY,
    decreaseY,
  } = counterSlice.actions;

  const reduxValue = useSelector((state) => state.value);
  const xValue = useSelector((state) => state.x);
  const yValue = useSelector((state) => state.y);
  const reduxXPlusYValue = xValue + yValue;

  return (
    <div>
      <input
        type="button"
        id="add"
        value="Add 1 +"
        onClick={() => dispatch(add())}
      />
      <input
        type="button"
        id="minus"
        value="Minus 1 -"
        onClick={() => dispatch(minus())}
      />
      <div>Value: {reduxValue}</div>

      <section>
        <div>
          <input
            type="button"
            value="Increase x by 1"
            onClick={() => dispatch(increaseX())}
          />
          <input
            type="button"
            value="Decrease x by "
            onClick={() => dispatch(decreaseX())}
          />
        </div>
        <div>
          <input
            type="button"
            value="Increase y by 1"
            onClick={() => dispatch(increaseY())}
          />
          <input
            type="button"
            value="Decrease y by 1"
            onClick={() => dispatch(decreaseY())}
          />
        </div>
        <div>Value of x: {xValue}</div>
        <div>Value of y: {yValue}</div>
        <div>Sum of x and y: {reduxXPlusYValue}</div>
      </section>
    </div>
  );
}

export default ReduxDemonstration;
