import './App.css';
import Home from './Components/Home';
import Solutions from './Components/JoinUs';
import Navbar from './Components/Navbar';
import Features from './Features';
function App() {
  return (
    <div className='container'>
    <div className='home'>
    <Navbar/>
    <Home />
    </div>
    <Solutions/>
    <Features />
    </div>
  )
}

export default App;