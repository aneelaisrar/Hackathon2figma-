                                          import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Featured from "./components/featured";
import Latest from  "./components/latest";
import Footer from  "./components/Footer";
import Unique from "./components/unique";
import TrendingProducts from "./components/Trendingproducts";
import Discount from "./components/Discount";
import TopCategories from "./components/TopCategores";
import Newslater from "./components/Newslater";
import Blog from   "./components/blog";
import Offers from "./components/offers";
//


export default function Home() {
  return (
    <div>
    
     
<Navbar/>
      <Hero/>
      <Featured/>
      <Latest/>
      <Offers/>
      <Unique/>
      <TrendingProducts/>
      <Discount/>
      <TopCategories/>
      <Newslater/>
      <Blog/>
      <Footer/>
    
    </div>

    
  );
}



