import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signupUser } from '../features/userslice'
import { redirect } from 'react-router-dom'

function Signup() {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cnfrmpassword, setcnfrmPassword] = useState('')

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = firstName + lastName
    if (name && email && password === cnfrmpassword) {
      dispatch(signupUser({ name, email, password }))
      return redirect('/workoutplans')
    }
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setcnfrmPassword('')
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handlecnfrmPasswordChange = (e) => {
    setcnfrmPassword(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center px-4 bg-[#f7f9fc]'>
        <div className='max-w-sm w-full text-gray-600 bg-white p-10 rounded-md'>
          <h1 className='text-center sm:text-4xl text-2xl font-bold ml-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
            <a href='/'>GymFreak</a>
          </h1>
          <div className='text-center'>
            <div className='mt-5 space-y-2'>
              <h3 className='text-gray-800 text-2xl font-bold sm:text-3xl'>
                Sign up for an account
              </h3>
              <p className=''>
                Have an account already?{' '}
                <a
                  href='/signin'
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
          <form className='mt-8 space-y-5'>
            <div>
              <label className='font-medium'>First Name</label>
              <input
                type='text'
                name='firstName'
                required=''
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div>
              <label className='font-medium'>Last Name</label>
              <input
                type='text'
                name='lastName'
                required=''
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
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
              <label className='font-medium'>Confirm Password</label>
              <input
                type='password'
                name='confirm'
                required=''
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                value={cnfrmpassword}
                onChange={handlecnfrmPasswordChange}
              />
            </div>
            <button
              onClick={handleSubmit}
              className='w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150'
            >
              Sign Up
            </button>
          </form>
          <p>
            Not signed in - by signing up you agree to our{' '}
            <span className='underline'>
              <a href='https://www.privacyboard.co/company/gymfreak'>
                privacy policy
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Signup
