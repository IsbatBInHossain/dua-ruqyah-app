import Image from 'next/image'

const SettingCard = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <li className='rounded-lg overflow-hidden cursor-pointer bg-gray-50 border-x-[1px] border-b-[1px]'>
      <div className='group rounded-l-md overflow-hidden'>
        <div className='flex items-center gap-4 p-2 border-l-[4px] border-secondary group-hover:border-l-[4px] group-hover:border-primary transition-all'>
          <div className=' bg-secondary flex p-3 rounded-full items-center justify-center'>
            <Image id='cat-img' src={icon} width={20} height={20} alt={title} />
          </div>
          <h2 className='text-accent-1 text-sm'>{title} Settings</h2>
        </div>
      </div>
    </li>
  )
}

export default SettingCard
