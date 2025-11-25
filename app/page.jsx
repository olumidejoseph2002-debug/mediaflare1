// import Image from "next/image"
import About from "../components/About"
import Services from "../components/Services"
import Team from "../components/Team"
import Client from "../components/Client"
import Nav from "../components/Nav"
import HeroSection from "../components/HeroSection"
import Testimonials from "../components/Testimonials"
import Contacts from "../components/Contacts"
import Footer from "../components/Footer"
import Lever from "../components/Lever"


export const metadata = {
  title: "MediaFlare",
  description: "One-Pager Website",
};

 
const page = () => {
  return (
    <main className=" bg-gray-100 flex flex-col items-center justify-center ">

      <Nav /> 
      <HeroSection />
      <Lever />
      <About />
      <Services />
      <Team />
      <Client />
      <Testimonials />
      <Contacts />
      <Footer />
      
    </main>

  )
}

export default page