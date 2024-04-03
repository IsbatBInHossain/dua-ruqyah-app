'use client'
import { getSubCategories } from '@/lib/api/apis'
import { SubCategory } from '@/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CategoryDuas from './CategoryDuas'
import { useRouter } from 'next/navigation'

const SubCategory = ({
  categoryId,
  categoryUrl,
}: {
  categoryId: number
  categoryUrl: string
}) => {
  const [subCategories, setSubCategories] = useState<SubCategory[] | null>(null)
  const subcatUrl = `${categoryUrl}&?subcat_id=`
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSubCategories(categoryId)
      setSubCategories(data)
    }

    fetchData()
  }, [categoryId])

  const handleClick = (e: any, subcat_id: number) => {
    e.preventDefault()
    router.push(`/duas/${subcatUrl}${subcat_id}`)
  }

  return (
    <div className='border-l-2 border-dotted border-primary ml-6 my-2'>
      {subCategories &&
        subCategories.map((subCategory: SubCategory) => (
          <div
            key={subCategory.subcat_id}
            className='flex flex-col justify-start items-start gap-y-2 ml-3 cursor-pointer'
          >
            <div className='flex flex-row my-2'>
              <div className='bg-primary -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5'></div>

              <div
                className='flex flex-col justify-start items-start '
                onClick={e => handleClick(e, subCategory.id)}
              >
                <h5 className='font-semibold block my-2'>
                  {subCategory.subcat_name_en}
                </h5>

                <div>
                  <CategoryDuas
                    subcategoryId={subCategory.id}
                    categoryId={categoryId}
                    subcategoryURL={`${subcatUrl}${subCategory.subcat_id}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default SubCategory
