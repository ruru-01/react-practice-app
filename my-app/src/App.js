import { Routes, Route } from 'react-router-dom'
import Toppage from './pages/Toppage'
import { Header } from './pages/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Toppage />} />
      </Routes>
    </div>
  )
}

export default App;