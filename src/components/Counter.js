import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../Store/index';
const Counter = () => {
  const counter = useSelector(state=>state.counter.counter)
  const show = useSelector(state=>state.counter.showCounter)
  const dispatch = useDispatch()

  const incrementby5Counter=()=>{
    dispatch(counterActions.incrementby5(5))
  }
  const decrementby5Counter=()=>{
    dispatch(counterActions.decrementby5(5));
  }
  const incrementCounter=()=>{
    dispatch(counterActions.increment());
  }
  const decrementCounter=()=>{
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.showCounter());
  };
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button className={classes.btn} onClick={incrementCounter}>
          Increment
        </button>
        <button className={classes.btn} onClick={decrementCounter}>
          Decrement
        </button>
      </div>
      <div>
        <button className={classes.btn} onClick={incrementby5Counter}>
          IncrementBy5
        </button>
        <button className={classes.btn} onClick={decrementby5Counter}>
          DecrementBy5
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
