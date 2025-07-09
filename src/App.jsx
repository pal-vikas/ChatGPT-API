import { Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Img from "./pages/Img"
import logo from "./assets/logo.svg"

function App() {

  return (
    <>

      <div className="border-b border-neutral-100  py-3">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link to="/"> <img src={logo} className="h-8" alt="logo" /></Link>
       
        <div className="flex gap-5 font-bold text-neutral-600">
          <Link to="/image"> Generate Images</Link>
          <Link to="/about">About Us</Link>
        </div>
         </div>

      </div>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="image" element={<Img/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
