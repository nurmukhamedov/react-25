
import Router from './components/Routes/Router';
import './App.css';


function App() {

  const myStyle = {
    color: 'red',
    background: 'black'
  }

  return (
    <>

      <h1 style={myStyle}>
        Hello world
      </h1>
      <Router />
    </>
  )
}

export default App
