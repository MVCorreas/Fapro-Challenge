import { EditEntity } from "../../../components/EditEntity";
import { LeftPanel } from "@/app/components/LeftPanel";
import { NavBarDashboard } from "@/app/components/NavBar";

const EditEntityPage = ({ params }) => {
  const { id } = params;
  return (
    <div className="flex min-h-screen overflow-auto ">
      <LeftPanel />
      <div className="flex flex-col w-full">
        <div className="w-full">
          <NavBarDashboard />
        </div>
        <div
          className="flex-1 "
          style={{
            backgroundImage: "url('/PurpleBackground.png')",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "40%",
          }}
        >
          <EditEntity entityId={id} />
        </div>
      </div>
    </div>
  );
};

export default EditEntityPage;
