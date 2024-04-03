const API = process.env.NEXT_PUBLIC_API_URL

export const getCategories = async () => {
  const categories = await fetch(`${API}/categories`)
  return categories.json()
}
export const getSubCategories = async (categoryId: Number) => {
  const subCategories = await fetch(
    `${API}/categories/${categoryId}/sub-categories/`
  )
  return subCategories.json()
}

export const getDuasByCategory = async (categoryId: Number) => {
  const duas = await fetch(`${API}/categories/${categoryId}/duas`)
  return duas.json()
}
export const getDuasBySubCategory = async (
  categoryId: Number,
  subcategoryID: Number
) => {
  const duas = await fetch(
    `${API}/categories/${categoryId}/sub-categories/${subcategoryID}/duas`
  )
  return duas.json()
}
