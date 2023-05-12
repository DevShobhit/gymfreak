function PasswordReset() {
  return (
    <>
      <main className='w-full h-screen flex flex-col items-center justify-center px-4'>
        <h1 className='sm:text-4xl text-2xl font-bold ml-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
          <a href='/'>GymFreak</a>
        </h1>
        <div className='max-w-sm w-full text-gray-600'>
          <div className='text-center'>
            <div className='mt-5 space-y-2'>
              <h3 className='text-gray-800 text-2xl font-bold sm:text-3xl'>
                Reset Password
              </h3>
            </div>
          </div>
          <form className='mt-8 space-y-5'>
            <div>
              <label className='font-medium'>Enter your account email</label>
              <input
                type='email'
                name='email'
                required=''
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                value=''
              />
            </div>
            <button
              type='submit'
              className='w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-indigo-600 rounded-lg duration-150'
            >
              Reset Password
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

export default PasswordReset
