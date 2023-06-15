import Image from "next/image";
import Link from "next/link";
import { Author } from "./_child/Author";

const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right"
}

const Section1 = () => {
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20 ">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending </h1>

        {Slide()}
      </div>
    </section>
  );
};

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image
            src={"/images/img1.jpg"}
            alt="Slide Image"
            width={600}
            height={600}
          ></Image>
        </Link>
      </div>
      <div className="info flex flex-col justify-center">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Business, Travel
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            -15 June, 2023
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
          >
            my name is tata. I am ha ha.
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis eaque
          ex consequuntur ab repellat dolorum alias assumenda provident deserunt
          ut, excepturi velit blanditiis rem ipsam, facere earum expedita non
          officia?
        </p>
        <Author/>
      </div>
    </div>
  );
}

export default Section1;
