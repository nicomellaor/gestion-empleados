import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Add from './pages/Add'
import Edit from './pages/Edit'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/search" element={<Search />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App