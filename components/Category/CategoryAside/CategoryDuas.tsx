'use client'
import { getDuasBySubCategory } from '@/lib/api/apis'
import { DuaType } from '@/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Props {
  subcategoryId: number
  categoryId: number
  subcategoryURL: string
}

const CategoryDuas = ({ subcategoryId, categoryId, subcategoryURL }: Props) => {
  const router = useRouter()
  const [duas, setDuas] = useState<DuaType[] | null>(null)

  const handleClick = (e: any, id: number) => {
    e.preventDefault()
    router.push(`/duas/${subcategoryURL}&dua_id=${id}`)
    const duaRefDiv = document.getElementById(`dua_id_${id}`)
    if (duaRefDiv) {
      duaRefDiv.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const fetchDuas = async () => {
      const duas = await getDuasBySubCategory(categoryId, subcategoryId)
      setDuas(duas)
    }

    fetchDuas()
  }, [categoryId, subcategoryId])
  return (
    <>
      {duas &&
        duas.map(dua => {
          return (
            <div key={dua.dua_id} onClick={e => handleClick(e, dua.id)}>
              <div className='flex items-center'>
                <Image
                  src='/assets/dua.svg'
                  alt='arrow'
                  width={20}
                  height={20}
                  className='-translate-y-1 mr-2'
                />
                <p className='text-xs my-3 text-left w-[95%] dark:text-gray-300 cursor-pointer'>
                  {dua.dua_name_en}
                </p>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default CategoryDuas
