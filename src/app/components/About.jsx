import Image from "next/image";
import { useRouter } from "next/navigation";
import useEaseIn from "../hooks/useEaseIn";
import { MainButton } from "./Buttons";

export const AboutSection = () => {
  const router = useRouter();
  const sectionsRef = useEaseIn();

  const handleFindOutMore = () => {
    router.push("/");
  };

  return (
    <section
      ref={(el) => (sectionsRef.current[0] = el)}
      className="opacity-0 translate-y-10 animate-slideUp h-90vh text-white animate-slideUpAndFade delay-500"
      id="about"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-400 via-red-100 to-transparent rounded-full h-[300px] w-[300px] blur-xl absolute bottom-[350px] left-40 transform translate-x-1/4 translate-y-1/2 opacity-50 z-20"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-8">
        <div className="flex flex-col justify-center">
          <span className="text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-900 via-teal-500 to-rose-400">
            ABOUT US
          </span>
          <div className="font-light text-3xl leading-relaxed mb-20 text-slate-700 w-[500px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            corporis ratione quaerat iusto cupiditate illo, deleniti culpa
            nesciunt sit ducimus molestiae rem doloribus quia similique. Harum
            recusandae animi ipsam neque.
          </div>
          <MainButton
            name="Find Out More"
            onClick={handleFindOutMore}
            bgColor="bg-dark-teal"
            hoverColor="hover:bg-light-teal"
            style={{ width: "60px" }}
          />
        </div>
        <div className="relative w-full h-full">
          <div className="diff aspect-[16/9]">
            <div className="diff-item-1">
              <Image
                src="/Assets/About1.avif"
                alt="aboutImage"
                width={800}
                height={800}
                priority
                className="object-cover rounded-full"
              />
            </div>
            <div className="diff-item-2">
              <Image
                src="/Assets/About2.jpeg"
                alt="aboutImage"
                width={800}
                height={800}
                priority
                className="object-cover rounded-full"
              />
            </div>
            <div className="diff-resizer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
