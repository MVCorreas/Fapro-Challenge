import { LeftPanel } from "../components/LeftPanel"
import { Header } from "../components/Header"
import { MainScreen } from "../components/Main"

export const DashBoardScreen = () => {
    return (
        <div className="flex h-screen overflow-auto">
      <div className="w-[12.5%]">
        <LeftPanel />
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full">
          <Header />
        </div>
        <div className="flex-1 bg-[#f1f5f9] ">
          <MainScreen />
        </div>
      </div>
    </div>
    )
}