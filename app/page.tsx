
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Herosection";
import Categories from "./components/Categories";
import Catalog from "./components/Catalogue";
import Tourist from "./components/Tourists";
import Places from "./components/Places";
import Hosting from "./components/Hosting";
import Aboutus from "./Aboutus/Aboutus";
import Testimonial from "./components/Testimonial";
import Contactus from "./Contactus/Contactus";
import Signin from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Google from "./Components/Google";
import Userprofile from "./users/Userprofile";



export default async function Home() {
   const data = await fetch("https://api.escuelajs.co/api/v1/products")
    const res = await data.json()
    // console.log(res)

  return (
   <>
    <div className="">
     <Navbar />
    <Hero />
    <Categories />
    <Catalog />
    <Tourist />
    <Places />
    <Hosting />
    <Aboutus />
    <Testimonial />
    <Contactus />
    {/* <Signin /> */}
    {/* <SignUp /> */}
    {/* <Google /> */}
    {/* <Userprofile /> */}

    </div>
   </>
    
  );
}
