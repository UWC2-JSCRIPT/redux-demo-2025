import { useDispatch, useSelector } from "react-redux"
import { RootState } from './store'
import { decrement, increment, incrementByAmount } from "./counterSlice"

export default function Counter() {
  const count = useSelector((state:RootState) => state.value )
  const dispatch = useDispatch()
  

  return (
    <>
      Counter value is {count}
      <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
      </div>
    </>
  )
}
