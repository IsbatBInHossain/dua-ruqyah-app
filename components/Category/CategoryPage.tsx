import { getCategories } from '@/lib/api/apis'
import CategoryAside from './CategoryAside'
import { Category } from '@/types'

const CategoryPage = async () => {
  return (
    <div className=''>
      <CategoryAside />
    </div>
  )
}

export default CategoryPage
