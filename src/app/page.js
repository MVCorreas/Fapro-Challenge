import Image from "next/image";
import { Landing } from "./views/Landing";

export default function Home() {
  return (
    <main className="h-full flex flex-col">
      <Landing />
    </main>
  );
}
