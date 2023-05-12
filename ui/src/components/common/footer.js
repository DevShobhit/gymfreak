function Footer() {
  let year = new Date().getFullYear()
  return (
    <>
      <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8'>
          <div>
            <h6 className='font-bold uppercase pt-2'>Support</h6>
            <ul>
              <li className='py-1'>Pricing</li>
            </ul>
          </div>
          <div>
            <h6 className='font-bold uppercase pt-2'>Company</h6>
            <ul>
              <li className='py-1'>About</li>
            </ul>
          </div>
          <div>
            <h6 className='font-bold uppercase pt-2'>Legal</h6>
            <ul>
              <li className='py-1 hover:underline cursor-pointer'>
                <a href='https://www.privacyboard.co/company/gymfreak'>
                  Privacy
                </a>
              </li>
              <li className='py-1 hover:underline'>
                <a href='/terms'>Terms</a>
              </li>
            </ul>
          </div>
          <div className='col-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to our newsletter</p>
            <p className='py-4'>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className='flex flex-col sm:flex-row'>
              <input type='email' className='w-full p-2 mr-4 rounded-md mb-4' />
              <button className='text-white border bg-indigo-600 border-indigo-600  hover:bg-transparent hover:text-indigo-600 rounded-md p-2 mb-4'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='flex flex-col max-w-[1240px] mx-auto px-2 py-4 justify-between sm:flex-row text-center text-gray-500'>
          <p>©{year} GymFreak. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
