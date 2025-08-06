import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Register from "./Register"
import User from "./User"
import Admin from "./Admin"
import Reset from "./Reset"

function App() {

  return (

    <BrowserRouter basename="/LMS">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App