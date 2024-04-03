'use client'
import { settingMenu } from '@/constants/constants'
import SettingCard from './SettingCard'

const Setting = () => {
  const hideWhenBreakpointReached = () => {
    const settings = document.querySelector<HTMLElement>('#settings')!
    settings.classList.add('max-2xl:translate-x-full')
    ;(settings.nextSibling as HTMLElement).style.display = 'none'
  }
  return (
    <>
      <div
        id='settings'
        className=' w-[290px] min-w-[270px] h-[calc(100vh-120px)] overflow-y-auto bg-white p-4 transition-all duration-300 rounded-3xl max-2xl:min-w-[340px] max-2xl:fixed max-2xl:rounded-r-none max-2xl:right-0 max-2xl:h-[100vh] max-2xl:top-0 max-2xl:translate-x-full z-20 max-sm:min-w-[270px]'
      >
        <h2 className='text-center text-xl text-accent-1 my-4 mb-8'>
          Settings
        </h2>
        <ul className='flex flex-col gap-4'>
          {settingMenu.map(item => (
            <SettingCard key={item.name} title={item.name} icon={item.icon} />
          ))}
        </ul>
      </div>
      <div
        onClick={hideWhenBreakpointReached}
        className='bg-green-950 opacity-50 max-2xl:w-screen max-2xl:h-screen max-2xl:z-10 absolute top-0 left-0 -z-10  hidden'
      ></div>
    </>
  )
}

export default Setting
