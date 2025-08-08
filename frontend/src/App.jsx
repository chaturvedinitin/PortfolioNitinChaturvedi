import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Header from './components/Header.jsx'
import Projects from './pages/Projects.jsx'
import Education from './pages/Education.jsx'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/edu' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
