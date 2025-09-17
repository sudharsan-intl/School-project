import Home from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./About"
import Teacher from "./Teacher"
import Maincourse from "./Maincourse"
import Price from "./Price"
import Mainblog from "./Mainblog"
import Contact from "./Contact"
function App() {
        return (


                <BrowserRouter>

                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/About" element={<About />} />
                                <Route path="/Teacher" element={<Teacher />} />
                                <Route path="/Maincourse" element={<Maincourse />} />
                                <Route path="/price" element={<Price />} />
                                <Route path="/mainblog" element={<Mainblog />} />
                                <Route path="/contact" element={<Contact />} />
                        </Routes>








                </BrowserRouter>







        )







}
export default App