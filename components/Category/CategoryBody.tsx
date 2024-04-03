'use client'

import React, { useEffect, useState } from 'react'
import { Dua } from '@/types'
import { useSearchParams } from 'next/navigation'
import DuaCard from '../DuaCard/DuaCard'
import formatCateoryDuas from '@/lib/utils/formatCateoryDuas'

const CategoryBody = () => {
  const [duas, setDuas] = useState<Record<number, Dua[]> | null>(null)

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
      {duas && // Ensure "duas" is not null before mapping
        Object.entries(duas).map(
          (
            [subcatId, duasOfSubcat] // Map over object entries
          ) => (
            <div key={subcatId} className='mb-5'>
              <div className=''>
                <h2 className='text-lg font-medium mb-3'>{subcatId}</h2>
              </div>
              {duasOfSubcat.map(dua => (
                <DuaCard dua={dua} />
              ))}
            </div>
          )
        )}
    </div>
  )
}

export default CategoryBody
