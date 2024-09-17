import Hero from "@/app/home/Hero";
import ParkList from "@/app/home/ParkList";
import SearchBar from "@/app/home/SearchBar";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col justify-center gap-20">
      <Hero />
      <SearchBar />
      <ParkList />
    </main>
  );
}
