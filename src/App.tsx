import Homepage from './pages/Homepage'
import Bookspage from './pages/Bookspage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  
  return (
    <div className='  min-h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/books" element={<Bookspage/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
