import { getCategories } from '@/lib/api/apis'
import { IoIosSearch } from 'react-icons/io'

const CategoryAside = async () => {
  const categories = await getCategories()
  return (
    <aside className=' w-96 h-[calc(100vh-14%)] max-lg:hidden rounded-xl bg-white dark:bg-background-1-dark overflow-y-auto scrollbar'>
      <div className=' w-full h-full flex flex-col'>
        <div className=' py-4 bg-primary text-center text-white font-medium'>
          <h2>Categories</h2>
        </div>
        <form>
          <div className='mx-4 mt-3 flex items-center border p-3 rounded-md border-slate-300 '>
            <div className='mr-2'>
              <IoIosSearch className='text-2xl' />
            </div>
            <input
              type='text'
              placeholder='Search Categories'
              className='w-full flex-shrink rounded-md border-none outline-none'
            />
          </div>
        </form>
      </div>
    </aside>
  )
}

export default CategoryAside
