import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";
import Image from "next/image";

interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: ReviewPageParams;
  searchParams?: {};
}

export async function generateMetadata({ params: { slug } }: ReviewPageProps) {
  const { title } = await getReview(slug);
  return { title };
}

export async function generateStaticParams(): Promise<ReviewPageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ReviewPage({
  params: { slug },
}: ReviewPageProps) {
  const review = await getReview(slug);

  console.log("[ReviewPage] rendering", slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
      </div>
      <Image
        src={review.image}
        alt="alt2"
        width={640}
        height={360}
        className="mb-2 rounded-lg"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
}
