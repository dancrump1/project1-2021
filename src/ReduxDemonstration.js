import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "./Store";

// BASE APP
function ReduxDemonstration() {
  const dispatch = useDispatch();
  const { add, minus } = counterSlice.actions;

  const reduxValue = useSelector((state) => state.value);

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
    </div>
  );
}

export default ReduxDemonstration;
