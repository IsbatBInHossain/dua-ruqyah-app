import CategoryAside from './CategoryAside'
import CategoryBody from './CategoryBody'

const CategoryPage = async () => {
  return (
    <div className=' flex gap-6'>
      <CategoryAside />
      <CategoryBody />
    </div>
  )
}

export default CategoryPage
