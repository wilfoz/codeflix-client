import { PlayIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Movie } from '../types/movie';
import Link from 'next/link';

export const Banner = ({ movie }: { movie: Movie }) => (
  <div className='mb-10 lg:mb-20'>
    <div className='flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
        <video
          className='z-20 hidden h-full w-full opacity-50 transition duration-1000 ease-in-out lg:block'
          src={movie.videoFileURL}
          autoPlay
          loop
          muted
          poster={movie.bannerFileURL}
        />
        <Image
          src={movie.bannerFileURL}
          alt={movie.title}
          fill={true}
          className='object-cover object-top opacity-30 filter lg:hidden'
        />
      </div>
      <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
        {movie.title}
      </h1>
      <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
        {movie.description}
      </p>
    </div>
    <div className='flex space-x-4'>
      <Link href={`/watch/${movie.id}`}>
        <button className='flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
          <PlayIcon className='h-6' />
          Play
        </button>
      </Link>
      <button className='flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
        <InformationCircleIcon className='h-6' />
        More Info
      </button>
    </div>
  </div>
);
