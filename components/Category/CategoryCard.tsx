import { Category } from '@/types'
import Image from 'next/image'

interface CategoryCardProps {
  category: Category
  index: Number
  setIndex: (newIndex: number) => void
}

const CategoryCard = ({ category, index, setIndex }: CategoryCardProps) => {
  return (
    <div
      className={`mx-4 mt-3 flex items-center p-3 cursor-pointer hover:bg-background-2 rounded-xl ${
        index == category.cat_id ? 'bg-background-2' : 'bg-white'
      }`}
      onClick={() => setIndex(category.cat_id)}
    >
      <div className=' rounded-md bg-background-1 p-2'>
        <Image
          src={`/assets/categories/${category.cat_icon}.svg`}
          alt={category.cat_name_en}
          width={40}
          height={40}
        />
      </div>
      <div className=' flex flex-col gap-2 ml-2'>
        <h3 className=' font-semibold '>{category.cat_name_en}</h3>
        <p className=' text-gray-400 text-xs'>
          Subcategory: {category.no_of_subcat}
        </p>
      </div>
    </div>
  )
}

export default CategoryCard
