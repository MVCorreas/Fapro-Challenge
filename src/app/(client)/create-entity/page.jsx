import { CreateEntity } from "@/app/components/CreateEntity";
import { NavBarDashboard } from "@/app/components/NavBar";
import { LeftPanel } from "@/app/components/LeftPanel";

export default function CreateEntityPage() {
  return (
    <div className="flex min-h-screen h-full overflow-auto ">
    <div className="w-[12.5%]">
      <LeftPanel />
    </div>
    <div className="flex flex-col w-full">
      <div className="w-full">
        <NavBarDashboard />
      </div>
      <div className="flex-1 bg-slate-900 ">
        <CreateEntity />
      </div>
    </div>
  </div>
  );
}
