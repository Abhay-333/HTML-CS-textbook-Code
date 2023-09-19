import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='h-20 bg-blue-600 flex text-xl items-center justify-between px-8'>
        <h1>Logo</h1>
        <div className='flex gap-10'>
        <Link href="/About">About</Link>
        <Link href="/Product">Product</Link>
        <Link href="/Courses">Courses</Link>
        </div>
    </div>
  );
};

export default Header;
