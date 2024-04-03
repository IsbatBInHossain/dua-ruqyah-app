'use client'

import { getCategories } from '@/lib/api/apis'
import CategoryAside from './CategoryAside'
import { Category } from '@/types'

const CategoryPage = async () => {
  const categories: Category[] = await getCategories()
  return (
    <div className=''>
      <CategoryAside categories={categories} />
    </div>
  )
}

export default CategoryPage
