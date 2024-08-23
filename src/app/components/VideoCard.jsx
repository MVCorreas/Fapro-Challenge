import { MainButton } from "./Buttons"
import { useRouter } from "next/navigation";

export const VideoCard = () => {
    const router = useRouter();
    
  
    const handleRegister = () => {
      router.push("/register");
    };

    return (
        <div className="flex justify-center mt-6">
        <div className="card card-side bg-base-100 shadow-xl w-[55%] mb-12">
          <div className="card-body">
            <h2 className="card-title text-4xl text-violet-400">Get started today</h2>
            <p className="text-2xl">You make the most of your time, we help you make money.</p>
            <div className="card-actions justify-end">
             <MainButton name='Get Started' onClick={handleRegister} styles={{with: '20%'}}/>
            </div>
          </div>
          <figure className="w-1/2 p-6">
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
    )
}