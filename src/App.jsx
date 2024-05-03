import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewData from './pages/ViewData'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddData from './pages/AddData'
import UpdateData from './pages/UpdateData'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewData />} />
          <Route path="/add" element={<AddData />} />
          <Route path="/update/:id" element={<UpdateData />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
