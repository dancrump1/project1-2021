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
      <label for="add">Add 1</label>
      <input
        type="button"
        id="add"
        name="add"
        label="+"
        onClick={() => dispatch(add())}
      />
      <label for="add">Subtract 1</label>
      <input
        type="button"
        id="minus"
        name="minus"
        onClick={() => dispatch(minus())}
      />
      <div>Value: {reduxValue}</div>

      <section>
        <div>
          <label for="totalXUp">Increase x by 1</label>
          <input
            type="button"
            id="totalXUp"
            name="totalXUp"
            label="+"
            onClick={() => dispatch(increaseX())}
          />
          <label for="totalXDown">Decrease x by 1</label>
          <input
            type="button"
            id="totalXDown"
            name="totalXDown"
            label="-"
            onClick={() => dispatch(decreaseX())}
          />
        </div>
        <div>
          <label for="totalYUp">Increase y by 1</label>
          <input
            type="button"
            id="totalYUp"
            name="totalYUp"
            label="+"
            onClick={() => dispatch(increaseY())}
          />
          <label for="totalYDown">Decrease y by 1</label>
          <input
            type="button"
            id="totalYDown"
            name="totalYDown"
            label="-"
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
