                                          import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/featured";
import Footer from  "./components/Footer";
import Unique from "./components/unique";
import TrendingProducts from "./components/Trendingproducts";
import Discount from "./components/Discount";
import TopCategories from "./components/TopCategores";
import Newslater from "./components/Newslater";
import Offers from "./components/offers";
import Blog from "./components/blog"
import LatestProducts from "./components/LatestProducts";
//


export default function Home() {
  return (
    <div>
     
     
      <Header/>
      <Hero/>
      <Featured/>
      <LatestProducts/>
      <Offers/>
      <Unique/>
      <TrendingProducts/>
      <Discount/>
      <TopCategories/>
      <Blog/>
      <Newslater/>
      <Footer/>
    
    
    </div>

    
  );
}



