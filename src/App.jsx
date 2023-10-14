import "./App.css";
import Jonathan from "./components/Jonathan/Jonathan";
import Daniel from './components/Daniel/Daniel'
import Kira from "./components/Kira/Kira"
import Jeanette from './components/Jeanette/Jeanette'
import Patrick from './components/Patrick/Patrick'

function App() {
  return (
    <div className="container">
      <Jonathan />
      <Daniel />
      <Kira/>
      <Jeanette />
      <Patrick />
    </div>
  )
}

export default App;
