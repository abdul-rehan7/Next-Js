import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
     <Hero title="Welcome to my portfolio website" para="I am the para of this page"/>
    </main>
  );
}
