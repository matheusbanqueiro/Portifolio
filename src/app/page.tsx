import Image from 'next/image';
import SwitchMode from '../components/Header/SwitchMode';
import Language from '../components/Header/Language';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </div>
  );
}
