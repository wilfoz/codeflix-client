import Image from 'next/image';

export const UserProfile = () => (
  <div className='flex items-center space-x-2 md:space-x-4'>
    <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
    <Image
      src='/profile.png'
      alt='profile'
      width={40}
      height={45}
      className='cursor-pointer rounded'
    />
  </div>
);
