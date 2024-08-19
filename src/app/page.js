import Image from "next/image";
import { MainScreen } from "./components/MainScreen";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainScreen />
    </main>
  );
}
