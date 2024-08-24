import { LeftPanel } from "../components/LeftPanel"
import { NavBarDashboard } from "../components/NavBar"
import { MainScreen } from "../components/Main"

export const DashBoardScreen = () => {
    return (
    <div className="flex min-h-screen h-full overflow-auto">
     
        <LeftPanel />
     
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