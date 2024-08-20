import Image from "next/image";
import { useRouter } from "next/navigation";
import useEaseIn from '../../hooks/useEaseIn';

export const AboutSection = () => {
  const router = useRouter();
  const sectionsRef = useEaseIn();
 
  const handleFindOutMore = () => {
    router.push("/");
  };

  return (
    <section
      ref={(el) => (sectionsRef.current[0] = el)}
      className="opacity-0 translate-y-10 transition-opacity transition-transform duration-1500 ease-out animate-slideUp" 
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-light text-yellow-400 mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi there! And welcome to my little abode. I am a Full Stack
            developer from Mendoza, Argentina. Exactly! One of the Great Wine
            Capitals. Not that I love wine, which I don’t; but it is a
            historical icon of my land, and I am a fervent lover of tradition
            and cultural inheritance. And so, let me tell you more about me, and
            the story about my path towards web development.
          </p>
          <button
            className="mt-6 btn btn-primary"
            onClick={handleFindOutMore}
          >
            FIND OUT MORE
          </button>
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/Background2.jpg"
            alt="aboutImage"
            width={900}
            height={900}
            priority
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
