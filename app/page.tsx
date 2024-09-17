import Hero from "@/components/home/Hero";
import ParkList from "@/components/home/ParkList";
import SearchBar from "@/components/home/SearchBar";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col justify-center gap-20">
      <Hero />
      <SearchBar />
      <ParkList />
    </main>
  );
}
