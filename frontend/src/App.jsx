import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Work from './components/Work.jsx'
import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'

function App() {

  return (
    <Router>
      <Header />
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
