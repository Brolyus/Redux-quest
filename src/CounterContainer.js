import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});
const CounterComponent = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button onClick={() => dispatch({ type: "ADD 10" })}>Add 10</button>
    <button onClick={() => dispatch({ type: "ADD" })}>Add 1</button>
    <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    <button onClick={() => dispatch({ type: "REMOVE" })}>Remove 1</button>
    <button onClick={() => dispatch({ type: "REMOVE 10" })}>Remove 10</button>
  </div>
);
export default connect(mapStateToProps)(CounterComponent);