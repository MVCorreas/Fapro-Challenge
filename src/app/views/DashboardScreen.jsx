import { LeftPanel } from "../components/LeftPanel"
import { NavBarDashboard } from "../utility/NavBar"
import { MainScreen } from "../components/Main"

export const DashBoardScreen = () => {
    return (
        <div className="flex h-screen overflow-auto">
      <div className="w-[12.5%]">
        <LeftPanel />
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full">
          <NavBarDashboard />
        </div>
        <div className="flex-1 bg-[#f1f5f9] ">
          <MainScreen />
        </div>
      </div>
    </div>
    )
}