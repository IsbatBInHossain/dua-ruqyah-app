'use client'
import { getDuasBySubCategory } from '@/lib/api/apis'
import { Dua } from '@/types'
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
  const [duas, setDuas] = useState<Dua[] | null>(null)

  const handleClick = (e: any, id: number) => {
    e.preventDefault()
    router.push(`/duas/${subcategoryURL}&dua_id=${id}`)
    const outletDiv = document.getElementById(`dua_id_${id}`)
    if (outletDiv) {
      outletDiv.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const fetchDuas = async () => {
      const duas = await getDuasBySubCategory(categoryId, subcategoryId)
      setDuas(duas)
    }

    fetchDuas()
  })
  return (
    <>
      {duas &&
        duas.map(dua => {
          return (
            <div
              key={dua.dua_id}
              onClick={e => handleClick(e, dua.id)}
              className={`${
                subcategoryId == dua.subcat_id ? 'block' : 'hidden'
              }`}
            >
              <div className='flex items-center'>
                <Image
                  src='/assets/dua.svg'
                  alt='arrow'
                  width={20}
                  height={20}
                  className='-translate-y-1 mr-2'
                />
                <p className='text-2xs my-3 text-left w-[95%] dark:text-gray-300 cursor-pointer'>
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
