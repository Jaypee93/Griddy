import "./App.css";
import Jonathan from "./components/Jonathan/Jonathan";
import Daniel from './components/Daniel/Daniel'
import Kira from "./components/Kira/Kira"
import Jeanette from './components/Jeanette/Jeanette'

function App() {
  return (
    <div className="container">
      <Jonathan />
      <Daniel />
      <Kira/>
      <Jeanette />
    </div>
  )
}

export default App;
