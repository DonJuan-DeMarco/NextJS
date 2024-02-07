import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Reviews",
};

export default async function HomePage() {
  const featuredReview = await getFeaturedReview();
  console.log("featuredReview: ", featuredReview);
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only best for the best</p>
      <div className="border bg-amber-50 rounded-lg hover:shadow-xl font-orbitron font-semibold w-80 sm:w-full">
        <Link
          href={`/reviews/${featuredReview.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <Image
            src={featuredReview.image}
            alt="alt1"
            width={320}
            height={180}
            className=" rounded-t-lg sm:rounded-l-lg sm:rounded-r-none"
          />
          <h2 className="py-1 text-center sm:px-2">{featuredReview.title}</h2>
        </Link>
      </div>
    </>
  );
}
