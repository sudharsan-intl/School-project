import Header from "./components/Header";
import Content from "./components/Intro";
import Req from "./components/REQ";
import Pcount from "./components/PencilCount";
import Reviews from "./components/Parent";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function About() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Image */}
      <div className="w-full md:h-[450px] overflow-hidden">
  <img
    className="w-full h-full object-cover object-top" 
    src="/img/about.jpg"
    alt="About Us Hero"
  />
</div>


      {/* Title */}
      <h1 className="text-5xl bg-gradient-to-t from-purple-500 via-teal-400 to-pink-300 bg-clip-text text-transparent text-center font-extrabold relative bottom-64">
        About Us
      </h1>

      {/* Content Section */}
      <div className="relative md:top-40">
        <Content />
      </div>

      {/* Pencil Count */}
      <div className="pt-10 md:pt-36">
        <Pcount />
      </div>

      {/* Parent Review Title + Description */}
      <div className="relative">
        <div>
          <div className="font-bold flex text-4xl justify-center relative bottom-96 p-10 gap-5 max-sm:text-2xl max-sm:gap-3 max-sm:bottom-32 max-sm:p-4">
            <h1 className="text-blue-600">What Parent</h1>
            <h1 className="text-orange-400">Says About Us</h1>
          </div>
          <h1 className="text-center text-gray-400 w-[900px] ml-72 mt-3 p-5 relative bottom-96 max-sm:w-full max-sm:ml-0 max-sm:px-3 max-sm:bottom-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero
            temporibus placeat dolorum, perferendis voluptatem est nisi excepturi
            obcaecati, fugit labore possimus dolor dignissimos sed.
          </h1>
        </div>

        {/* Reviews Component */}
        <div className="relative bottom-16">
          <Reviews />
        </div>
      </div>

      {/* Request Section */}
      <div className="relative md:bottom-40">
        <Req />
      </div>
<div>
    <Blog/>
</div>
<div>
    <Footer/>
</div>

    </div>

  );
}

export default About;
