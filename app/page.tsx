import LeftSidebar from '@/components/LeftSidebar/LeftSidebar'
import Navbar from '@/components/Navbar/Navbar'

export default function Home() {
  return (
    <main className='relative h-[100vh] flex gap-6 p-6 max-lg:p-0'>
      <LeftSidebar />
      <div className='w-full ml-7 max-lg:m-0'>
        <Navbar />
      </div>
    </main>
  )
}
