import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
const Counter = () => {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()

  const incrementCounter=()=>{
    dispatch({type:'incrementby5'})
  }
  const decrementCounter=()=>{
    dispatch({type:'decrementby5'})
  }

  const toggleCounterHandler = () => {};
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button className={classes.btn} onClick={incrementCounter}>
          Increment
        </button>
        <button className={classes.btn} onClick={decrementCounter}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
