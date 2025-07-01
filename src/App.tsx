import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/layout/Navbar'
// import { Button } from './components/ui/button'
// import { increment } from './redux/features/counter/counterSlice'
// import { useAppDispatch, useAppSelector } from './redux/hooks'

function App() {
  // const dispatch = useAppDispatch()
  // const count = useAppSelector((state) => state.counter.value)
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />
        {/* <button onClick={() => dispatch(increment(1))}>
        count is {count}
      </button>
      <br />
      <Button onClick={() => dispatch(increment(1))}>
        Increment
      </Button> */}
    </>
  )
}

export default App
