import Image from "next/image";
import { Landing } from "./components/Landing";

export default function Home() {
  return (
    <main className="h-full flex flex-col">
      <Landing />
    </main>
  );
}
