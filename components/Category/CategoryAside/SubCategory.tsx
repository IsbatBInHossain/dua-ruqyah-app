'use client'
import { getSubCategories } from '@/lib/api/apis'
import { SubCategoryType } from '@/types'
import React, { useEffect, useState } from 'react'
import CategoryDuas from './CategoryDuas'
import { useRouter, useSearchParams } from 'next/navigation'

const SubCategory = ({
  categoryId,
  categoryUrl,
}: {
  categoryId: number
  categoryUrl: string
}) => {
  const [subCategories, setSubCategories] = useState<SubCategoryType[] | null>(
    null
  )
  const subcatUrl = `${categoryUrl}&subcat_id=`
  const router = useRouter()
  const params = new URLSearchParams(useSearchParams().toString())
  const subcatId = Number(params.get('subcat_id'))

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
    const subcatRefDiv = document.getElementById(`subcat_id_${subcat_id}`)
    if (subcatRefDiv) {
      subcatRefDiv.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='border-l-2 border-dotted border-primary ml-6 my-2'>
      {subCategories &&
        subCategories.map((subCategory: SubCategoryType) => (
          <div
            key={subCategory.id}
            className='flex flex-col justify-start items-start gap-y-2 ml-3 cursor-pointer'
          >
            <div className='flex flex-row my-2'>
              <div className='bg-primary -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5'></div>

              <div
                className='flex flex-col justify-start items-start '
                onClick={e => handleClick(e, subCategory.id)}
              >
                <h5
                  className={`font-semibold block my-2 ${
                    subCategory.id == subcatId
                      ? 'text-primary'
                      : 'text-lettering'
                  }`}
                >
                  {subCategory.subcat_name_en}
                </h5>

                <div
                  className={`${
                    subCategory.id == subcatId ? 'block' : 'hidden'
                  }`}
                >
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
