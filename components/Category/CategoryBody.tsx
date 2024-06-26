'use client'

import React, { useEffect, useState } from 'react'
import { SubCategoryRecord } from '@/types'
import { useSearchParams } from 'next/navigation'
import DuaCard from '../DuaCard/DuaCard'
import formatCateoryDuas from '@/lib/utils/formatCateoryDuas'
import { MdOutlineMenu } from 'react-icons/md'

const CategoryBody = () => {
  const [duas, setDuas] = useState<SubCategoryRecord | null>(null)

  const params = new URLSearchParams(useSearchParams())
  const categoryId = Number(params.get('cat_id'))

  const toggleCategory = () => {
    const category = document.getElementById('category_aside')!
    category.classList.remove('max-lg:-translate-x-full')
    ;(category.nextSibling as HTMLElement).style.display = 'block'
  }

  useEffect(() => {
    const fetchDuas = async () => {
      const formattedDua = await formatCateoryDuas(categoryId)

      setDuas(formattedDua)
    }
    fetchDuas()
  }, [])

  return (
    <div className='h-screen overflow-y-auto scrollbar mx-auto w-[97%]'>
      {duas &&
        Object.entries(duas).map(([subcatId, subcatObject]) => (
          <div key={subcatId} className='mb-5' id={`subcat_id_${subcatId}`}>
            <div
              className='mb-5  p-3 rounded-xl bg-white gap-3 items-center hidden max-lg:flex'
              onClick={toggleCategory}
            >
              <MdOutlineMenu className=' w-6 h-6 text-center mb-3' />
              <h2 className=' font-medium mb-3'>Dua's Importance</h2>
            </div>
            <div className='mb-5 p-3 rounded-xl bg-white'>
              <h3 className=' font-medium mb-3'>
                <span className=' text-primary '>Section: </span>
                {subcatObject.name}
              </h3>
            </div>
            {subcatObject.duas.map(dua => (
              <DuaCard dua={dua} key={dua.id} />
            ))}
          </div>
        ))}
    </div>
  )
}

export default CategoryBody
