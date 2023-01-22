import Homepage from './pages/Homepage'
import Bookspage from './pages/Bookspage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Sportpage from './pages/Sportpage';

function App() {
  
  return (
    <div className='min-h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/books" element={<Bookspage/>}/>
          <Route path="/sport" element={<Sportpage/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
