import { Hero, SearchBar, CustomFilter } from "@/components";
import Image from "next/image";
import GlassNavbar from "@/components/GlassNavbar";
import { fetchCars } from "@/utils";
import { div } from "framer-motion/client";


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
        <section>
            We have cars
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black font-bold">Oops, no Reuslts</h2>
          <p>{allcars?.message}</p>
        </div>
        
      )}
    </main>
  );
}
