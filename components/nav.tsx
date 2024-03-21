import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../public/image 279.svg";


function nav() {
  return (
    <div className='max-w-[1440px] min-h-[80px]  '>
        <div className='max-w-[1150px] m-auto    border-red-400 min-h-[58px]'>
<div className='flex items-end  justify-between'>
<div className='hidden md:flex'>
    <ul className='flex gap-[40px]'>
    <li>
        <Link href='#home' className=' font-[400] text-[#333333]'>Home</Link>
    </li>
    <li>
        <Link href='#about'>About</Link>
    </li>
    <li>
        <Link href='#products'>Products</Link>
    </li>
    </ul>
</div>

<div className='m-auto'>
    <Image src={Logo} width={64} height={64} alt="logo" />
</div>
<div className='hidden md:flex'>
    <ul className='flex gap-[40px]'>
    <li>
        <Link href='#features' className=' font-[400] text-[#333333]'>Features</Link>
    </li>
    <li>
        <Link href='#award'>Awards</Link>
    </li>
    <li>
        <Link href='#faq'>FAQ</Link>
    </li>
    </ul>
</div>
</div>

        </div>
    </div>
  )
}

export default nav