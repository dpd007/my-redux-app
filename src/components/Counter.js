import classes from "./Counter.module.css";
//for accessing store which is sent from <App />
import { useSelector, useDispatch } from "react-redux";
import { counterActions as actions } from "../store/index";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(actions.increment());
  };
  const increaseHandler = () => {
    dispatch(actions.increase(5));
  };
  const decrementHandler = () => {
    dispatch(actions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(actions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
