import React from 'react'
import { DuaType } from '@/types'
import Image from 'next/image'
import DuaFooter from './DuaFooter'

const DuaCard = ({ dua }: { dua: DuaType }) => {
  return (
    <div
      id={'dua_id_' + dua.id}
      className='mb-5 p-6 rounded-xl bg-white'
      key={dua.dua_id}
    >
      <div className='flex items-center gap-3'>
        <Image src='/assets/duacard.svg' alt='icon' width={35} height={35} />
        <h3 className='font-semibold text-green-600'>
          {dua.id}. {dua.dua_name_en}
        </h3>
      </div>

      <div>
        {dua.top_en && <p className='mt-5'>{dua.top_en}</p>}
        {dua.dua_arabic && (
          <p className='text-right text-2xl tracking-wider font-bold my-8'>
            {dua.dua_arabic}
          </p>
        )}
        {dua.transliteration_en && (
          <p className='italic my-5 text-slate-700'>
            <span className='font-semibold text-xl '>Transliteration: </span>
            {dua.transliteration_en}
          </p>
        )}
        {dua.translation_en && (
          <p className='my-5 text-slate-600'>
            <span className='font-semibold'>Translation: </span>
            {dua.translation_en}
          </p>
        )}
        {dua.bottom_en && (
          <p className='mt-5 text-slate-600'>{dua.bottom_en}</p>
        )}
      </div>

      {dua.refference_en && (
        <div className='mt-5'>
          <h4 className='text-green-600 font-bold'>Reference:</h4>
          <p className='mt-1 text-xl mb-5'>{dua.refference_en}</p>
        </div>
      )}
      <DuaFooter dua={dua} />
    </div>
  )
}

export default DuaCard
