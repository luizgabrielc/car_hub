"use client";
import { CustomFilter, Hero, SearchBar } from "@/components";
// import { fetchCars } from "@/utils";
import { useEffect } from "react";

export default async function Home() {
  // useEffect(() => {
  //   fetchCars().then((allCars) => console.log("allCars", allCars)).catch(console.log);
  // }, []);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
}
