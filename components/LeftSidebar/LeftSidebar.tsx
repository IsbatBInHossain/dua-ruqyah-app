'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { menuList } from '@/constants/constants'

const LeftSidebar = () => {
  return (
    <aside className='w-max h-[calc(100vh-7%)] max-lg:hidden p-5 rounded-3xl bg-white overflow-y-auto scrollbar'>
      <ul className='flex flex-col items-center gap-6'>
        <li>
          <Link
            href={'/'}
            className='block mb-10 hover:drop-shadow-[0_0px_10px_rgb(0,0,0,0.3)] duration-200'
          >
            <Image
              src={'https://duaruqyah.com/assets/dua-logo.svg'}
              alt='Dua logo'
              width={55}
              height={55}
            ></Image>
          </Link>
        </li>
        {menuList.map(menu => (
          <li key={menu.name}>
            <Link
              href={menu.link}
              className='p-3 block bg-gray-100 hover:bg-gray-200 group duration-200 rounded-full'
            >
              <Image
                src={menu.icon}
                alt={menu.name}
                className=' group-hover:scale-110 duration-300'
                width={20}
                height={20}
              ></Image>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={'/'}
            className='p-3 my-10 block bg-primary text-white hover:drop-shadow-[0_0px_10px_rgb(0,0,0,0.3)] duration-200 rounded-lg'
          >
            <BiSolidDonateHeart className='w-6 h-6' />
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default LeftSidebar
