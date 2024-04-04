'use client'
import formatToValidUrlString from '@/lib/utils/formatToValidUrlString'
import { CategoryType } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import SubCategory from './SubCategory'

interface CategoryCardProps {
  category: CategoryType
  index: Number
  setIndex: (newIndex: number) => void
}

const CategoryCard = ({ category, index, setIndex }: CategoryCardProps) => {
  const router = useRouter()
  const categoryId = category.cat_id
  const categoryUrl = `${formatToValidUrlString(category.cat_name_en)}?cat_id=${
    category.cat_id
  }`

  const handleClick = () => {
    setIndex(categoryId)
    router.push(`/duas/${categoryUrl}`)
  }

  return (
    <div className='flex flex-col'>
      <div
        className={`mx-4 mt-3 flex items-center p-3 cursor-pointer hover:bg-background-2 rounded-xl ${
          index == categoryId ? 'bg-background-2' : 'bg-white'
        }`}
        onClick={handleClick}
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
      {index == category.cat_id && (
        <SubCategory categoryId={categoryId} categoryUrl={categoryUrl} />
      )}
    </div>
  )
}

export default CategoryCard
