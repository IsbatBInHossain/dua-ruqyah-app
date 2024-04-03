const API = process.env.NEXT_PUBLIC_API_URL

export const getCategories = async () => {
  const categories = await fetch(`${API}/categories`)
  return categories.json()
}
export const getSubCategories = async () => {
  const categories = await fetch(`${API}/sub-categories/`)
  return categories.json()
}
