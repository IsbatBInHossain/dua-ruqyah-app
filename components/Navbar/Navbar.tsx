import { FaSortDown } from 'react-icons/fa'
import { IoIosSettings, IoIosSearch } from 'react-icons/io'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import Image from 'next/image'
import profile from '@/public/assets/profile.svg'
import duaLogo from '@/public/assets/dua-logo.svg'

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between bg-transparent md:max-xl:bg-white max-xl:p-7'>
      <div className=' flex flex-row items-center justify-between w-9/12 md:max-xl:w-10/12'>
        <div className=' text-center flex gap-2 items-center md:max-xl:hidden'>
          <MdKeyboardArrowLeft className=' w-6 h-6 hidden max-md:block' />
          <h1 className='text-2xl max-md:text-xl'>Duas Page</h1>
        </div>
        <div className=' flex-row items-center gap-4 hidden md:max-xl:flex'>
          <Image src={duaLogo} alt='Dua logo' width={50} height={50}></Image>
          <h1 className='text-xl font-semibold'>Dua & Ruqyah</h1>
        </div>
        <div className=' flex items-center'>
          <form className=' w-96 max-md:hidden block'>
            <label
              htmlFor='dua'
              className='w-full h-max flex justify-between p-1 rounded-md bg-white max-xl:bg-secondary cursor-text shadow'
            >
              <input
                type='text'
                id='dua'
                placeholder='Search by Dua Name'
                className='outline-none bg-transparent text-sm ml-3 w-full'
              />
              <div className='bg-slate-100 max-xl:bg-white text-gray-500 px-3 py-1 rounded-md cursor-pointer'>
                <IoIosSearch className='w-8 h-8' />
              </div>
            </label>
          </form>
        </div>
      </div>

      <div className='flex flex-row max-lg:flex-row-reverse items-center justify-end gap-5'>
        <button className='flex items-center gap-2 max-md:hidden'>
          <Image src={profile} alt='profile icon' width={45} height={45} />
          <FaSortDown className='w-3 h-3' />
        </button>
        <IoIosSettings className='w-6 h-6 text-primary hidden max-2xl:block' />
      </div>
    </nav>
  )
}

export default Navbar
