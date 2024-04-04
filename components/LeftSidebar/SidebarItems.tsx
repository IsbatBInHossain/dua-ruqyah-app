import Link from 'next/link'
import Image from 'next/image'

interface MenuItemProps {
  name: string
  icon: string
  link: string
}

const SidebarItems = ({ item }: { item: MenuItemProps }) => {
  return (
    <li key={item.name}>
      <Link
        href={item.link}
        className='p-3 block bg-gray-100 hover:bg-gray-200 group duration-200 rounded-full dark:bg-background-2-dark'
      >
        <Image
          src={item.icon}
          alt={item.name}
          className=' group-hover:scale-110 duration-300 dark:fill-white'
          width={20}
          height={20}
        ></Image>
      </Link>
    </li>
  )
}

export default SidebarItems
