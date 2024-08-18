
import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <section className="py-16">
      <div className="mx-auto md:px-20 p-4">
        <h1 className="font-bold text-center text-4xl pb-12">Trending</h1>

        <Slide /> {/* Ensure Slide is used here */}
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid lg:grid-cols-2 gap-2">
      <div className="image flex justify-center">
        <Link href={"/"}>
          <Image src="/imgs/img1.jpg" alt="image" width={400} height={400} />
        </Link>
      </div>
      <div className="info flex flex-col justify-center ">
        <div className="cat">
          <Link className="text-teal-500 hover:text-teal-700" href={"/"}>
            Businss, Travel{" "}
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href={"/"}>
            Aug 17, 2024{" "}
          </Link>
        </div>
        <div className="title py-3">
          <Link
            className="text-3xl lg:text-5xl font-bold text-gray-800 hover:text-gray-600"
            href={"/"}
          >
            {" "}
            Revolution of Education due to Rapid Changes in Technology
          </Link>
        </div>
        <p className="text-gray-500 py-3 text-justify">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed
          ipsam explicabo quis repellendus vero nobis dolore repellat fugit
          assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis sequi rerum odio quos voluptatibus nam.
        </p>
      </div>
    </div>
  );
}
