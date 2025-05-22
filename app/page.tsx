

import Navbar from "./components/Navbar";
import Hero from "./components/Herosection";
import Categories from "./components/Categories";
import Catalog from "./components/Catalogue";
import Tourist from "./components/Tourists";
import Places from "./components/Places";
import Hosting from "./components/Hosting";

import Testimonial from "./components/Testimonial";





export default async function Home() {
   

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
    
    <Testimonial />
    
  
    
    
    

    </div>
   </>
    
  );
}
