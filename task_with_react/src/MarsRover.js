import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementX,
  incrementY,
  decrementX,
  decrementY,
  rotateRight,
  rotateLeft,
} from "./store/roverSlice";
import "./main.css";
import Swal from "sweetalert2";

const MarsRover = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { rover } = useSelector((state) => state);
  const headings = ["NORTH", "EAST", "SOUTH", "WEST"];

  function moveForward() {
    const forwards = {
      0: () => dispatch(incrementY()),
      1: () => dispatch(incrementX()),
      2: () => dispatch(decrementY()),
      3: () => dispatch(decrementX()),
    };
    forwards[rover.heading]();
  }

  function moveBackward() {
    const backwards = {
      0: () => dispatch(decrementY()),
      1: () => dispatch(decrementX()),
      2: () => dispatch(incrementX()),
      3: () => dispatch(incrementY()),
    };
    backwards[rover.heading]();
  }

  function left() {
    dispatch(rotateLeft());
  }

  function right() {
    dispatch(rotateRight());
  }

  const movementFunctions = {
    F: moveForward,
    B: moveBackward,
    L: left,
    R: right,
  };

  const formHandler = (e) => {
    e.preventDefault();

    const inputRegEx = /^[FBLR]+$/;

    const upperCaseInput = input.toUpperCase();

    if (inputRegEx.test(upperCaseInput)) {
      for (let i = 0; i < upperCaseInput.length; i++) {
        movementFunctions[upperCaseInput[i]]();
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Command!",
      });
    }
  };

  return (
    <div data-testid="marsRover" className="mars-rover">
      <form onSubmit={formHandler}>
        <label htmlFor="command">Command:</label>
        <input
          type="text"
          id="command"
          placeholder="Enter command value"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" id="btn">
          Calculate
        </button>
        <span className="note">
          Note: your command must contain at least on of these characters: f or
          b or l or r
        </span>
      </form>

      <p id="result">
        ({rover.x},{rover.y}) {[headings[rover.heading]]}
      </p>
    </div>
  );
};

export default MarsRover;
