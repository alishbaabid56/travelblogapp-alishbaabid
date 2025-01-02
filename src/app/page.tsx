"use client"


import HomePage from "@/components/Homepage";
import Navbar from "../components/Navbar";
import PostList from "./PostList/page";
import Reviews from "./review";
import Footer from "@/components/Footer";
import AboutUs from "./about/page";
import { useState } from "react";
import TravelGuides from "./travelguide/page";

export default function Home() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <div>
      <Navbar />
      <HomePage/>
      <AboutUs/>
      <TravelGuides/>
      <Reviews/>
      <Footer />
     
      </div>
   
  );
}