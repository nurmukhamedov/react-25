import Register from './components/Lesson8/Register';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Lesson8/Home';
import Login from './components/Lesson8/Login';
import About from './components/Lesson8/About';

function App() {

  const isLoggedIn = localStorage.getItem('email') && localStorage.getItem('password');


  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount(prevCount => prevCount + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // });


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {isLoggedIn ? <Route path='/about' element={<About />} /> : <Route path='/about' element={<Navigate to='/register' />} />}
      </Routes>
    </>
  )
}

export default App
