import { useState } from 'react'

function NavBar() {
  const [isopen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isopen)
  }

  return (
    <>
      <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 className='ml-5 text-3xl font-bold mr-5 sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
              GymFreak
            </h1>

            <ul className='hidden lg:flex'>
              <li className='p-5 text-gray-700 hover:bg-gray-200 hover:rounded-md cursor-pointer'>
                <a href='#home'>Home</a>
              </li>
              <li className='p-5  text-gray-700  hover:bg-gray-200 hover:rounded-md cursor-pointer'>
                <a href='#about'>About</a>
              </li>
              <li className='p-5 text-gray-700  hover:bg-gray-200 hover:rounded-md cursor-pointer'>
                <a href='#pricing'>Pricing</a>
              </li>
              <li className='p-5 hover:bg-gray-200 hover:rounded-md text-gray-700  cursor-pointer hover:underline'>
                <button>
                  GymFreak MealPlan{' '}
                  <span className='font-bold text-sky-700'>BETA!</span>
                </button>
              </li>
              <li className='p-5 hover:bg-gray-200 hover:rounded-md text-gray-700  cursor-pointer hover:underline'>
                <button>
                  WorkoutTracker{' '}
                  <span className='font-bold text-[#10b981]'>NEW!</span>
                </button>
              </li>
            </ul>
          </div>

          <div className='hidden lg:flex pr-4'>
            <button className='border-none bg-transparent text-black mr-4 hover:text-slate-600'>
              <a href='/signin'>Sign In</a>
            </button>
            <button className='px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-bold'>
              <a href='/signup'>Sign Up</a>
            </button>
          </div>

          <div className='lg:hidden'>
            {isopen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
                className='w-5 cursor-pointer'
                onClick={handleOpen}
              >
                <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z'></path>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                aria-hidden='true'
                className='w-5 cursor-pointer'
                onClick={handleOpen}
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                ></path>
              </svg>
            )}
          </div>
        </div>

        <ul className={isopen ? 'absolute bg-white w-full px-8' : 'hidden'}>
          <li className='border-b-2 border-zinc-300 w-full text-gray-700 p-4'>
            <a>Home</a>
          </li>
          <li className='border-b-2 text-gray-700 border-zinc-300 w-full p-4'>
            <a>About</a>
          </li>
          <li className='border-b-2 border-zinc-300 w-full text-gray-700 p-4'>
            <a>Pricing</a>
          </li>
          <li className='border-b-2 border-zinc-300 p-3 cursor-pointer  text-gray-700 hover:underline'>
            <button>
              GymFreak MealPlan{' '}
              <span className='font-bold text-[#10b981]'>NEW!</span>
            </button>
          </li>
          <li className=' border-b-2 border-zinc-300 p-3 cursor-pointer  text-gray-700 hover:underline'>
            <button>
              WorkoutTracker{' '}
              <span className='font-bold text-[#10b981]'>NEW!</span>
            </button>
          </li>
          <div className='flex flex-col my-4'>
            <button className='bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 border-0 hover:bg-gradient-to-r hover:from-purple-700 hover:via-purple-700 hover:to-indigo-700 font-bold text-white rounded-md px-8 py-3 mb-4'>
              <a href='/login'>Sign In</a>
            </button>
            <button className='px-8 py-3'>Sign Up</button>
          </div>
        </ul>
      </div>
    </>
  )
}

export default NavBar
