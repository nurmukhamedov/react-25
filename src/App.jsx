
import './App.css';
import Home from './components/Home';
import ComponentMain from './components/Lesson-6/ComponentMain';
import { ThemeProvider } from './components/Lesson-6/ThemeContext';


function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
        <ComponentMain />
      </ThemeProvider>
    </>
  )
}

export default App
