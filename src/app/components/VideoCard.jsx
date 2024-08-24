import { MainButton } from "./Buttons"
import { useRouter } from "next/navigation";

export const VideoCard = () => {
    const router = useRouter();
    
  
    const handleRegister = () => {
      router.push("/register");
    };

    return (
      <section
     
        className=" translate-y-10 animate-slideUp h-[500px] animate-slideUpAndFade delay-500" 
       
      >
       
          <div className="flex flex-col justify-center">
        <div className="flex justify-center mt-6">
        <div className="card card-side bg-base-100 shadow-2xl w-[45%] mb-12 h-96">
          <div className="card-body">
            <h2 className="card-title text-4xl text-violet-400">Get started today</h2>
            <p className="text-2xl">You make the most of your time, we help you make money.</p>
            <div className="card-actions justify-end">
             <MainButton name='Get Started' onClick={handleRegister} styles={{with: '20%'}}/>
            </div>
          </div>
          <figure className="w-full p-4">
            <video
              src="/CardVideo.mp4"
              alt="Movie Trailer"
              className="w-full h-auto rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            />
          </figure>
        </div>
        </div>
        </div>
      </section>
    )
}