'use client'
import { IoIosSearch } from 'react-icons/io'
import CategoryCard from './CategoryCard'
import { CategoryType } from '@/types'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getCategories } from '@/lib/api/apis'

const CategoryAside = () => {
  const params = new URLSearchParams(useSearchParams().toString())
  const catId = Number(params.get('cat_id')) || 1
  const [categoryIndex, setCategoryIndex] = useState(catId)
  const [categories, setCategories] = useState<CategoryType[] | null>(null)

  const hideWhenBreakpointReached = () => {
    const category = document.querySelector<HTMLElement>('#category_aside')!
    category.classList.add('max-lg:-translate-x-full')
    ;(category.nextSibling as HTMLElement).style.display = 'none'
  }

  useEffect(() => {
    const fetchCategories = async () => {
      const categories: CategoryType[] = await getCategories()
      setCategories(categories)
    }
    fetchCategories()
  }, [])

  return (
    <>
      <div
        id='category_aside'
        className=' w-[430px] z-50 h-screen sticky rounded-xl transition-all duration-300 bg-white dark:bg-background-1-dark max-2xl:min-w-[340px] max-lg:fixed max-lg:rounded-r-none max-lg:left-0 max-lg:h-[100vh] max-lg:top-0 -max-lg:translate-x-full'
      >
        <div className=' w-full h-full flex flex-col'>
          <div className=' py-4 bg-primary rounded-t-xl text-center text-white font-medium'>
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
          <aside className='overflow-y-auto scrollbar'>
            {categories &&
              categories.map(category => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  index={categoryIndex}
                  setIndex={setCategoryIndex}
                />
              ))}
          </aside>
        </div>
      </div>
      <div
        onClick={hideWhenBreakpointReached}
        className='bg-green-950 opacity-50 max-2xl:w-screen max-2xl:h-screen max-2xl:z-10 absolute top-0 left-0 -z-10  hidden'
      ></div>
    </>
  )
}

export default CategoryAside
