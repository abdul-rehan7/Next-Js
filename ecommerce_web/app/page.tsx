import Categories from "@/components/Categories";
import Promotion from "@/components/Promotion";
import Services from "@/components/Services";
import { Imageslider } from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Imageslider/>
      <Services/>
      <Promotion/>
      <Categories/>
    </main>
  );
}
