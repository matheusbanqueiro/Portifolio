import Image from 'next/image';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex  items-center justify-center">
          <Image
            src="/feliz.png"
            alt="Matheus Logo"
            width={250}
            height={250}
            priority
          />
          <a className="text-3xl font-bold">Oi, bem-vindo ao meu <span className="text-secondary"><br/>portifólio</span></a>
        </div >
      </main>
    </div>
  );
}
