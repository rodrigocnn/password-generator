import { GlobalStyle } from "./styles/global";
import { Generator } from "./components/generator";
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="container">
         <GlobalStyle />
         <Generator/>
      </div>
    </div>
  )
}

export default App
