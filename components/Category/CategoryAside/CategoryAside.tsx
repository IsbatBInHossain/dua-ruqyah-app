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

  useEffect(() => {
    const fetchCategories = async () => {
      const categories: CategoryType[] = await getCategories()
      setCategories(categories)
    }
    fetchCategories()
  }, [])

  return (
    <div className=' w-[430px] h-screen sticky max-lg:hidden rounded-xl bg-white dark:bg-background-1-dark'>
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
  )
}

export default CategoryAside
