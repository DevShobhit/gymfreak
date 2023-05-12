import DashBoardNavbar from '../components/common/dashboardnavbar'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../features/userslice'

function Settings() {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  const [email, setEmail] = useState(user?.email)
  const [password, setPassword] = useState('')
  const [notifpref, setNotifPref] = useState('All')

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    let changes = {}
    if (password === '') {
      changes = {
        email,
        notifpref,
      }
    } else {
      changes = {
        email,
        password,
        notifpref,
      }
    }
    dispatch(updateUser(changes))
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleNotifPrefChange = (e) => {
    setNotifPref(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <DashBoardNavbar />
      <div className='flex max-w-5xl mx-auto flex-col items-center  py-2 min-h-screen'>
        <div className='flex flex-1 w-full flex-col items-center  text-center px-4 mt-12 sm:mt-20'>
          <h1 className='sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
              Settings
            </span>
          </h1>

          <form className='mt-8 space-y-5'>
            <div>
              <label className='font-medium'>Email</label>
              <input
                type='email'
                name='email'
                required=''
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label className='font-medium'>Password</label>
              <input
                type='password'
                name='password'
                required=''
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div>
              <label
                for='notification'
                class='block mb-2 text-base font-medium text-gray-900'
              >
                Notification Preferences
              </label>
              <select
                id='notification'
                value={notifpref}
                onChange={handleNotifPrefChange}
                className='block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
              >
                <option selected value='All'>
                  All
                </option>
                <option value='Balanced'>Balanced</option>
                <option value='Focused'>Focused</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className=' w-full px-4 py-3 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-indigo-600 rounded-lg duration-150'
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Settings
