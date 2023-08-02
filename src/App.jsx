import { Routes, Route } from 'react-router-dom'
import SelectCharacter from "./pages/SelectCharacter"
import CreateCharacter from './pages/CreateCharacter'
import GameBoard from './pages/GameBoard'
import "./app.css"

function App() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid" style={{ padding: "1rem 1rem" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-4 h5-xs">Dev's Quest: Journey to FullStack</h1>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route index element={<SelectCharacter />} />
        <Route path="/character/:id" element={<GameBoard />} />
        <Route path="/create-character" element={<CreateCharacter />} />
      </Routes>
    </>
  )
}

export default App
