import { FaCirclePlay, FaRegBookmark, FaRegLightbulb } from 'react-icons/fa6'
import { GoShareAndroid } from 'react-icons/go'
import { MdContentCopy, MdOutlineReport } from 'react-icons/md'
import '@/app/globals.css'

const DuaFooter = ({ dua }) => {
  return (
    <div className='md:flex justify-between items-center mt-8'>
      <div>
        {dua.audio && (
          <div className='flex gap-4 items-center'>
            <button>
              <FaCirclePlay className=' text-primary w-11 h-11' />
            </button>
            <audio src={dua.audio} />
          </div>
        )}
      </div>
      <div className='flex gap-8'>
        <button title='Copy'>
          <MdContentCopy className=' w-6 h-6 text-gray-500' />
        </button>
        <button title='Bookmark'>
          <FaRegBookmark className=' w-6 h-6 text-gray-500' />
        </button>
        <button title='Memorize'>
          {<FaRegLightbulb className=' w-6 h-6 text-gray-500' />}
        </button>
        <button title='Share'>
          <GoShareAndroid className=' w-6 h-6 text-gray-500' />
        </button>
        <button title='Report'>
          <MdOutlineReport className=' w-6 h-6 text-gray-500' />
        </button>
      </div>
    </div>
  )
}

export default DuaFooter
