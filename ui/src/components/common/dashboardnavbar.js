import NotificationIcon from '../../assets/notificationicon'
import SettingsIcon from '../../assets/settingsicons'
import UserIcon from '../../assets/userIcon'

function DashBoardNavbar() {
  return (
    <>
      <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <h1 className='ml-5 text-3xl font-bold mr-5 sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
            GymFreak
          </h1>

          <div className='flex pr-5 space-x-4'>
            <NotificationIcon />
            <a href='/settings'>
              <SettingsIcon />
            </a>
            <a href='/profile'>
              <UserIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoardNavbar
