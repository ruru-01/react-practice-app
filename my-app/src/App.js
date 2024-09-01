import { Routes, Route } from 'react-router-dom'
import Toppage from './pages/Toppage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Toppage />} />
      </Routes>
    </div>
  )
}

export default App;