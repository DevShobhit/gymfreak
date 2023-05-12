import DashBoardNavbar from '../components/common/dashboardnavbar'
import { useSelector } from 'react-redux'

function Profile() {
  const workouts = useSelector((state) => state.workoutplans.workoutplan)
  return (
    <>
      <DashBoardNavbar />
      <div className='flex max-w-5xl mx-auto flex-col items-center  py-2 min-h-screen'>
        <div className='flex flex-1 w-full flex-col items-center  text-center px-4 mt-12 sm:mt-20'>
          <h1 className='sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900'>
            Workout{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
              History
            </span>{' '}
          </h1>
        </div>
        <button className='bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80'>
          <a href='/workoutplans'>Explore and add new Workouts to Profile</a>
        </button>
        <div className='px-10'>
          {workouts.exercises.map((exercise) => (
            <div key={exercise.id} className='mt-10'>
              <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100'>
                <div className='flex flex-col justify-between p-4 leading-normal'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                    {exercise.exercise.name}
                  </h5>
                  <div className='flex flex-row justify-center items-center space-x-4'>
                    <p className='mb-2 font-normal text-gray-700'>
                      <span className='font-bold'>Sets: </span>
                      {exercise.sets}
                    </p>
                    <p className='mb-2 font-normal text-gray-700'>
                      <span className='font-bold'>Reps: </span>
                      {exercise.reps}
                    </p>
                    <p className='mb-2 font-normal text-gray-700'>
                      <span className='font-bold'>Weight: </span>
                      {exercise.weight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Profile
