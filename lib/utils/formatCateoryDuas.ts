import { Dua } from '@/types'
import { getDuasByCategory } from '../api/apis'

export default async function (
  cateoryId: number
): Promise<Record<number, Dua[]>> {
  const sortedDuas: Record<number, Dua[]> = {}

  const duas = await getDuasByCategory(cateoryId)

  duas.forEach((dua: Dua) => {
    const subcategoryName = dua.subcat_id
    sortedDuas[subcategoryName] = sortedDuas[subcategoryName] || []
    sortedDuas[subcategoryName].push(dua)
  })

  return Promise.resolve(sortedDuas)
}
