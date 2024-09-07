import { Hero } from "@/components";
import Image from "next/image";
import GlassNavbar from "@/components/GlassNavbar";
export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Our Fleet</h1>

        </div>

      </div>
    </main>
  );
}
