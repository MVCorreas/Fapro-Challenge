import { CreateEntity } from "@/app/components/CreateEntity";
import { NavBarDashboard } from "@/app/components/NavBar";
import { LeftPanel } from "@/app/components/LeftPanel";

export default function CreateEntityPage() {
  return (
    <div className="flex min-h-screen overflow-auto ">
      <LeftPanel />
    <div className="flex flex-col w-full">
      <div className="w-full">
        <NavBarDashboard />
      </div>
      <div className="flex-1 " style={{
          backgroundImage: "url('/PurpleBackground.png')",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '40%',
        }}>
        <CreateEntity />
      </div>
    </div>
  </div>
  );
}
