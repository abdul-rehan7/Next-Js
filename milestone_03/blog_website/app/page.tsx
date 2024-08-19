import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Image from "next/image";
import CommentSection from "../components/CommentSection";

export default function Home() {
  return (
    <main className="">
     <Section1/>
     <Section2/>
     <CommentSection/>
    </main>
  );
}
