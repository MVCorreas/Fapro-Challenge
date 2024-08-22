import Image from "next/image";
import { useRouter } from "next/navigation";
import useEaseIn from '../hooks/useEaseIn';
import { MainButton, OutlinedButton } from "../utility/Buttons";

export const AboutSection = () => {
  const router = useRouter();
  const sectionsRef = useEaseIn();
 
  const handleFindOutMore = () => {
    router.push("/");
  };

  return (
    <section
    ref={(el) => (sectionsRef.current[0] = el)}
      className="opacity-0 translate-y-10 animate-slideUp h-90vh text-white " 
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        <div className="flex flex-col justify-center">
        <span className="text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-bold-700 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-900 via-purple-400 to-amber-600">
            ABOUT US
          </span>
          <div className="text-lg leading-relaxed mb-20 text-black w-[500px]">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus corporis ratione quaerat iusto cupiditate illo, deleniti culpa nesciunt sit ducimus molestiae rem doloribus quia similique. Harum recusandae animi ipsam neque.
          </div>
          <MainButton
            name='Find Out More'
            onClick={handleFindOutMore}
          />
            
      
        </div>
        <div className="relative w-full h-full">
        <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <Image
            src="/Window2.jpg"
            alt="aboutImage"
            width={800}
            height={800}
            priority
            className="object-cover rounded-full"
          />
          </div>
          <div className="diff-item-2">
          <Image
            src="/Window1.jpeg"
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
