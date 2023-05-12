import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signinUser } from '../features/userslice'
import { redirect } from 'react-router-dom'

function Signin() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email && password) {
      dispatch(
        signinUser({
          email,
          password,
        })
      )
      return redirect('/workoutplans')
    }
    setEmail('')
    setPassword('')
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center px-4 bg-[#f7f9fc]'>
        <div className='max-w-sm w-full text-gray-600 bg-white p-10 rounded-md'>
          <h1 className='text-center sm:text-4xl text-2xl font-bold ml-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
            <button>
              <a href='/'> GymFreak</a>
            </button>
          </h1>
          <div className='text-center'>
            <div className='mt-5 space-y-2'>
              <h3 className='text-gray-800 text-2xl font-bold sm:text-3xl'>
                Sign in
              </h3>
              <p className=''>
                Don't have an account?{' '}
                <a
                  href='/signup'
                  className='font-medium text-blue-600 hover:text-blue-500'
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
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
            <button
              onClick={handleSubmit}
              className='w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-indigo-600 rounded-lg duration-150'
            >
              Sign In
            </button>
            <p className='text-center'>
              <button>
                <span className='hover:underline'>Forgot password?</span>
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin
