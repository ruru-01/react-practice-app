import { Routes, Route } from 'react-router-dom'
import Toppage from './pages/Toppage'
import { Header } from './pages/Header';
import { Detail } from './pages/Detail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Toppage />} />
      <Route path='/posts/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App;