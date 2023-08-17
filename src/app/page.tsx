import Image from "next/image";
import SwitchMode from "../../components/SwitchMode";
import Language from "../../components/Language";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </div>
  );
}
