import { Hero, SearchBar, CustomFilter } from "@/app/components";
import Image from "next/image";
import GlassNavbar from "@/app/components/GlassNavbar";
import { fetchCars } from "@/utils";
import { div } from "framer-motion/client";
import { CarCard } from "@/app/components";
import Features from "./components/Features";
import carData from '@/public/cars/cars.json'


export default async function Home() {

  const allcars = await fetchCars();
  const isDataEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;

  console.log(allcars)
  return (
    <main className="overflow-hidden ">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Our Fleet</h1>
          <p>Explore cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
        </div>
        <div className="home__filter-container">
          <CustomFilter title="fuel"/>
          <CustomFilter title="year"/>
        </div>
      </div>
      

      {!isDataEmpty ? (
        <section className="p-16">
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
    
      <Features/>
     
    </main>
  );
}
