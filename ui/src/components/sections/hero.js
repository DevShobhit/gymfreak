function Hero() {
  return (
    <div id='home'>
      <div className='w-full h-screen bg-white pt-16 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-screen-xl m-auto'>
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <h1 className='text-5xl md:text-7xl font-bold text-center md:text-left mb-5'>
              Get
              <span className='tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
                fit
              </span>
            </h1>
            <p className='text-2xl font-bold text-center md:text-left mb-5'>
              Introducing GymFreak: tailored workout routines for
              <span className='tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
                &nbsp;you&nbsp;
              </span>
            </p>
            <div className='flex flex-col'>
              <p className='text-2xl font-bold text-center md:text-left mb-5'>
                ✨ Just Released New Workouts✨
              </p>
              <p className='text-2xl font-bold text-center md:text-left mb-5'>
                <span className='tracking-tight underline text-sky-700'>
                  <button>GymFreak MealPlan 🥗&nbsp;</button>
                </span>
                <br />
                Supercharge your personalized workout with specific meal plans
                tailored to your fitness goals&nbsp;
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='text-2xl font-bold text-center md:text-left mb-5'>
                <span className='tracking-tight underline text-[#10b981]'>
                  <button>WorkoutTracker ✏️&nbsp;</button>
                </span>
                <br />
                Effortlessly track your workouts &nbsp;
              </p>
            </div>
            <p className='flex pt-2 text-center text-slate-600 md:text-left mb-5'>
              No credit card required.
            </p>
            <button className='mt-5 bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 text-white border-0 hover:bg-gradient-to-r hover:from-purple-700 hover:via-purple-700 hover:to-indigo-700 py-3 px-6 font-bold rounded-md transition duration-150 ease-in-out'>
              <a href='/signup'>Get Started</a>
            </button>
          </div>
          <div className='flex items-center justify-center text-center'>
            <span className='text-9xl text-center'>🦾</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
