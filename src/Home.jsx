import Reviews from "./components/Parent";
import Homepage from "./components/Hpage";
import Content from "./components/Intro";
import Blog from "./components/Blog";
import Req from "./components/REQ";
import Pcount from "./components/PencilCount";
import Footer from "./components/Footer";
import Course from "./components/Course";
import Profile from "./components/Profile";
import Pricing from "./components/Pricing";
import Header from "./components/Header";

function Home() {
  return (
      <div>
          <Header/>
      {/* homepage */}
      <Homepage />

      {/* content */}
      <Content />

      {/* hero image + overlay */}
    {/* Hero Section */}

    <Profile/>

      {/* COURCES (your Course component already made responsive) */}
      <Course/>

      {/* Pencil Image Scroll Section */}
      <Pcount />

      {/* Parent says heading */}
      <div>
        <div className="font-bold flex text-4xl justify-center relative bottom-96 p-10 gap-5 max-sm:text-2xl max-sm:gap-3 max-sm:bottom-0 max-sm:p-4">
          <h1 className="text-blue-600 ">What Parent</h1>
          <h1 className="text-orange-400 ">  Says About Us</h1>
        </div>
        <h1 className="text-center text-gray-400 w-[900px] ml-72 mt-3 p-5 relative bottom-96 max-sm:w-full max-sm:ml-0 max-sm:px-3 max-sm:bottom-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero temporibus placeat dolorum, perferendis voluptatem est nisi excepturi obcaecati, fugit labore possimus dolor dignissimos sed.
        </h1>
      </div>

      {/* parents opinion */}
      <Reviews />

      {/* REQ A QUOTE */}
      <Req />

      <Pricing/>

      {/* blog */}
      <Blog/>

      <Footer/>
    </div>
  )
}
export default Home
