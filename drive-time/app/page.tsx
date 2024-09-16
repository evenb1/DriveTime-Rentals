import { Hero, SearchBar, CustomFilter } from "@/components";
import Image from "next/image";
import GlassNavbar from "@/components/GlassNavbar";
export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      <SearchBar/>
      <CustomFilter/>
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
    </main>
  );
}
