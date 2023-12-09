import Nav from './Nav'
import About from './pages/About'
import Home from './pages/Home'
import Project from './pages/Projects';
import Contact from './pages/Contact';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default App;