import CategoryPage from '@/components/Category/CategoryPage'
import LeftSidebar from '@/components/LeftSidebar/LeftSidebar'
import Navbar from '@/components/Navbar/Navbar'
import Setting from '@/components/Setting/Setting'

export default async function Home() {
  return (
    <main className='relative h-[100vh] flex gap-6 p-6 max-xl:p-0'>
      <LeftSidebar />
      <div className='w-full ml-7 max-xl:m-0'>
        <Navbar />
        <div className=' flex justify-between pt-7'>
          <CategoryPage />
          <Setting />
        </div>
      </div>
    </main>
  )
}
