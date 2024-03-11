"use client";
import { useDispatch } from "react-redux";
import { testOpen } from "../../../store/slices/personnelSlice";

function Button() {
  const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <button onClick={() => dispatch(testOpen())}>click me</button>
    </div>
  );
}
export default Button;
