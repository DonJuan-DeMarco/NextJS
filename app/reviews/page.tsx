import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "next/image";
import { getReviews } from "@/lib/reviews";

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row gap-3 flex-wrap">
        {reviews.map((review, idx) => (
          <li
            key={`${review.slug}${idx}`}
            className=" border w-80 bg-amber-50 rounded-lg hover:shadow-xl font-orbitron font-semibold"
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt="alt1"
                width={320}
                height={180}
                className=" rounded-t-lg"
              />
              <h2 className="py-1 text-center">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
