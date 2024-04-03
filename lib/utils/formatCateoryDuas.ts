import { Dua, SubCategory, SubCategoryObject, SubCategoryRecord } from '@/types'
import { getDuasByCategory, getSubCategories } from '../api/apis'

export default async function (cateoryId: number): Promise<SubCategoryRecord> {
  const sortedDuas: Record<number, SubCategoryObject> = {}

  const duas = await getDuasByCategory(cateoryId)
  const subcategories = await getSubCategories(cateoryId)

  subcategories.forEach((subcategory: SubCategory) => {
    const subObj = { name: subcategory.subcat_name_en, duas: [] }
    sortedDuas[subcategory.id] = subObj
  })

  duas.forEach((dua: Dua) => {
    const subcategoryName = dua.subcat_id
    sortedDuas[subcategoryName].duas.push(dua)
  })

  return Promise.resolve(sortedDuas)
}
