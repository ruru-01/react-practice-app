import { Routes, Route } from 'react-router-dom'
import Toppage from './pages/Toppage'
import { Header } from './pages/Header';
import { Detail } from './pages/Detail';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Toppage />} />
      <Route path='/posts/:id' element={<Detail />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;