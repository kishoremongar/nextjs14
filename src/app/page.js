import Image from 'next/image';

export default function Home() {
  const testt = 1111ds180;
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      hello world
      <Image
        src='/vercel.svg'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
