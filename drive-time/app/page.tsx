import { Hero, SearchBar, CustomFilter } from "@/app/components";
import Image from "next/image";
import GlassNavbar from "@/app/components/GlassNavbar";
import { fetchCars } from "@/utils";
import { div } from "framer-motion/client";
import { CarCard } from "@/app/components";
import Features from "./components/Features";
import carData from '@/public/cars/cars.json'
import Counter from "./components/Counter";
import FeaturesTwo from "./components/FeaturesTwo";
import Contact from "./components/Contact";
import Logos from "./components/Logos";


export default async function Home() {

  const allcars = await fetchCars();
  const isDataEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;

  console.log(allcars)
  return (
    <main className="overflow-hidden ">
      <Hero />
      <div className="mt-12 padding-x  max-width" id="discover">
        <div className="text-start">
          <h1 className="text-6xl font-bold" id="fleet"> Our Collection</h1>
          <p className="font-md">Explore cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
        </div>
        
      </div>
      

      {!isDataEmpty ? (
        <section className="px-14 py-10">
            <div className="home__cars-wrapper">
            {carData.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
            </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black font-bold">Oops, no Reuslts</h2>
          <p>{allcars?.message}</p>
        </div>
        
      )}   

      <section className="bg-white h-screen">
      <Counter/>

      </section>
      <section className="pb-24">
        <Logos/>
      </section>
      <FeaturesTwo/>

      <Features/>
      <section id="contact" className="bg-features bg-cover">
        <Contact/>
      </section>
     
    </main>
  );
}
