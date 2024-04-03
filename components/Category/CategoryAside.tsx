'use client'
import { IoIosSearch } from 'react-icons/io'
import CategoryCard from './CategoryCard'
import { Category } from '@/types'
import { useState } from 'react'

const CategoryAside = ({ categories }: { categories: Category[] }) => {
  const [categoryIndex, setCategoryIndex] = useState(1)

  return (
    <div className=' w-80 h-[calc(100vh-14%)] max-lg:hidden rounded-xl bg-white dark:bg-background-1-dark'>
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
          {categories.map(category => (
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
