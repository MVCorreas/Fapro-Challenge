import Image from "next/image";

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    title: "Head of Sales Company1",
    imageSrc: "/Person1.webp",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aspernatur error voluptatum quas iste repudiandae aliquid necessitatibus, veritatis dicta enim magnam itaque deleniti cum exercitationem laboriosam. Id veniam itaque sint.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CEO Company2",
    imageSrc: "/Person3.jpeg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aspernatur error voluptatum quas iste repudiandae aliquid necessitatibus, veritatis dicta enim magnam itaque deleniti cum exercitationem laboriosam. Id veniam itaque sint.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Founder & CEO Company3",
    imageSrc: "/Person2.png",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aspernatur error voluptatum quas iste repudiandae aliquid necessitatibus, veritatis dicta enim magnam itaque deleniti cum exercitationem laboriosam. Id veniam itaque sint.",
  },
];

export const Reviews = () => {
  return (
    <section className="translate-y-10 animate-slideUp h-[600px] animate-slideUpAndFade delay-500">
      <p className="text-5xl font-200 lg:leading-normal text-dark-teal text-center">
        Find out why company leaders choose us.
      </p>
      <div className="flex flex-row justify-center items-center gap-4">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="card bg-base-100 w-96 shadow-2xl m-4 transform transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="card-body gap-4">
              <div className="flex flex-col justify-center items-center gap-1">
                <Image
                  src={review.imageSrc}
                  width={100}
                  height={100}
                  alt={`Image of ${review.name}`}
                  className="rounded-full mb-4"
                />

                <p className="text-md text-center mb-4">
                  <i>"{review.review}"</i>
                </p>
                <p className="font-bold text-lg text-dark-pink">{review.name}</p>
                <p className="">{review.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
