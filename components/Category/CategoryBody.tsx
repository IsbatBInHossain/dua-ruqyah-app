'use client'

import React, { useEffect, useState } from 'react'
import { Dua, SubCategoryRecord } from '@/types'
import { useSearchParams } from 'next/navigation'
import DuaCard from '../DuaCard/DuaCard'
import formatCateoryDuas from '@/lib/utils/formatCateoryDuas'

const CategoryBody = () => {
  const [duas, setDuas] = useState<SubCategoryRecord | null>(null)

  const params = new URLSearchParams(useSearchParams())
  const categoryId = Number(params.get('cat_id'))

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
          <div key={subcatId} className='mb-5'>
            <div className='mb-5 p-3 rounded-xl bg-white'>
              <h2 className=' font-medium mb-3'>
                <span className=' text-primary '>Section: </span>
                {subcatObject.name}
              </h2>
            </div>
            {subcatObject.duas.map(dua => (
              <DuaCard dua={dua} />
            ))}
          </div>
        ))}
    </div>
  )
}

export default CategoryBody
