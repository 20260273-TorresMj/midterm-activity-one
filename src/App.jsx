import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Students from "./pages/Students"
import StudentDetails from "./pages/StudentDetails"
import About from "./pages/About"

function App() {
  return (
    <div>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/student/:id" element={<StudentDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  )
}

export default App